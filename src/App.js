import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';

import ListBooks from './components/ListBooks';
import SearchBooks from './components/SearchBooks';

class BooksApp extends React.Component {
  state = {
    bookShelves: [],
    allBooks: [],
  };

  componentDidMount = () => {
    this.fetchBooks();
  }

  fetchBooks = () => {

    BooksAPI.getAll()
    .then(
      books => {
        this.setAllBooks( books )  
      }
    );

  }

  setAllBooks = allBooks => {

    this.setState(
      {
        allBooks
      }
    )

    this.setShelves( allBooks );

  }

  setShelves = books => {

    const bookShelves = [
      {
        title: 'Currently reading',
        books: [],
      },
      {
        title: 'Want to read',
        books: [],
      },
      {
        title: 'Read',
        books: [],
      },
    ];
  
    books.forEach(
      book => {
        
        if ( book.shelf ) {

          book.shelf === 'currentlyReading'
          && bookShelves[ 0 ].books.push( book );
          
          book.shelf === 'wantToRead'
          && bookShelves[ 1 ].books.push( book );
          
          book.shelf === 'read'
          && bookShelves[ 2 ].books.push( book );

        }
                    
      }
    );

    this.setState(
        {
          bookShelves,
        }
    );

  }

  onShelfChange = newShelfData => {
    
    BooksAPI.update(
      {
        id: newShelfData.book.id
      },
      newShelfData.newShelf
    ).then(
      () => this.fetchBooks()
    );

  }

  render() {

    const {
      bookShelves,
      allBooks,
    } = this.state;

    return (
      <div className="app">
        <Route
          path="/"
          exact
          render={
            () => (
              <ListBooks
                bookShelves={ bookShelves }
                onShelfChange={ this.onShelfChange }
              />
            )
          }
        />

        <Route
          path="/search"
          exact
          render={
            () => (
              <SearchBooks
                allBooks={ allBooks }
                onShelfChange={ this.onShelfChange }
              />
            )
          }
        />
      </div>
    )
  }
}

export default BooksApp
