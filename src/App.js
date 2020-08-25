import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';

import ListBooks from './components/ListBooks';
import SearchBooks from './components/SearchBooks';

class BooksApp extends React.Component {
  state = {
    bookShelves: [],
  };

  componentDidMount = () => {
    this.fetchBooks();
  }

  fetchBooks = () => {

    BooksAPI.getAll()
    .then(
      books => {
        this.getShelves( books )  
      }
    );

  }

  getShelves = books => {

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
      result =>  { this.updateShelves( result ) }
    )

  }

  updateShelves = booksIdsByShelves => {


    let notSortedByShelfBooks = [];

    this.state.bookShelves.map(
      shelf => shelf.books.forEach(
        book => {

          const {
            shelf,
            ...noShelfBook
          } = book;

          notSortedByShelfBooks.push( noShelfBook );

        }
      )
    )
    
    let updatedBooks = [];

    for (const shelfName in booksIdsByShelves) {

        if(
          Object.prototype.hasOwnProperty.call( booksIdsByShelves, shelfName )
        ) {

          booksIdsByShelves[ shelfName ].forEach(
            id => {

              const book = notSortedByShelfBooks.find(
                book => book.id === id
              );

              updatedBooks.push(
                {
                  ...book,
                  shelf: shelfName,
                }
              );

            }

          );        
          
        }
        
    }

    this.getShelves( updatedBooks );

  }

  render() {

    const { bookShelves } = this.state;

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
                bookShelves={ bookShelves }
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
