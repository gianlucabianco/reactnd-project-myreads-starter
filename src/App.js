import React from 'react';
import { Route } from 'react-router-dom';
// import * as BooksAPI from './BooksAPI';
import './App.css';

import ListBooks from './components/ListBooks';
import SearchBooks from './components/SearchBooks';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    bookShelves: [
      {
        title: 'Currently Reading',
        books: [
          {
            title: 'Composing Software: An Exploration of Functional Programming and Object Composition in JavaScript',
            author: 'Eric Elliot',
            cover: 'https://d2sofvawe08yqg.cloudfront.net/composingsoftware/hero?1588710676',
          },
          {
            title: 'Batwoman',
            author: 'Greg Rucka, J.H.Williams III',
            cover: 'https://images-na.ssl-images-amazon.com/images/I/61KzMKstU-L._SX320_BO1,204,203,200_.jpg',
          },
          {
            title: 'Do the work',
            author: 'Steven Pressfield',
            cover: 'https://images-na.ssl-images-amazon.com/images/I/41S6LVVM5pL._SX311_BO1,204,203,200_.jpg',
          },
        ],
      },
      {
        title: 'Want to Read',
        books: [
          {
            title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
            author: 'Martin Robert C.',
            cover: 'https://m.media-amazon.com/images/I/41SH-SvWPxL.jpg',
          },
          {
            title: 'Promethea',
            author: 'Alan Moore',
            cover: 'https://i.pinimg.com/474x/f5/fa/87/f5fa87848339b69b90a981563f9aff06--bangs-to-bring.jpg',
          },
          {
            title: 'Shogun',
            author: 'James Clavell',
            cover: 'https://img.ibs.it/images/9788858779347_0_0_626_75.jpg',
          },
        ],
      },
      {
        title: 'Read',
        books: [
          {
            title: 'Homo Deus: A Brief History of Tomorrow',
            author: 'Yuval Noah Harari',
            cover: 'https://images-na.ssl-images-amazon.com/images/I/71FX96Ae-PL.jpg',
          },
          {
            title: 'Akira',
            author: 'Katsuhiro Ōtomo',
            cover: 'https://images-na.ssl-images-amazon.com/images/I/91XooFfV1tL.jpg',
          },
          {
            title: 'The verdant passage',
            author: 'Troy Denning',
            cover: 'https://images-na.ssl-images-amazon.com/images/I/51AXYF5GWVL.jpg',
          },
        ],
      }
    ],
  };

  removeFromShelf = (
    book,
    currentShelf,
  ) => {

    const updatedBookShelves = this.state.bookShelves.map(
      shelf => shelf.title !== currentShelf
      ? shelf
      : {
          ...shelf,
          books: shelf.books.filter(
            bookOnShelf => bookOnShelf.title !== book.title
          )
        }
      )

    this.setState(
      {
        bookShelves: updatedBookShelves,
      }
    );

  };

  addToShelf = (
    book,
    newShelf,
  ) => {

    const updatedBookShelves = this.state.bookShelves.map(
      shelf => shelf.title !== newShelf
      ? shelf
      : 
        {
            ...shelf,
            books: [
              ...shelf.books,
              book,
            ]
        }
    );

    this.setState(
      {
        bookShelves: updatedBookShelves,
      }
    );

  };

  onShelfChange = newShelfData => {

    async function handleBook(
      data,
      removeFunction = () => ( {} ),
      addFunction = () => ( {} ),
    ) {

      const {
        book,
        currentShelf = '',
        newShelf,
      } = data;

      try {

        /*
          TODO / FIXME: test the following control "currentShelf && await () => ({})".
          (the first test - with an hardcoded empty currentShelf String - passed, if after routing development the test is ok, leave the comment below).

          If currentShelf is not passed, the user is adding a non existing book to one shelf
          without removing a book from an existing shelf (removeFunction is not called).
        */

        currentShelf && await removeFunction(
          book,
          currentShelf,
        );

        try {

          addFunction(
            book,
            newShelf,
          )

        } catch( errorWhenAdding ) {

          console.log(
            {
              errorWhenAdding
            }
          );

        }

      } catch( errorWhenRemoving ) {

        console.log(
          {
            errorWhenRemoving,
          }
        );

      }

    }

    handleBook(
      newShelfData,
      this.removeFromShelf,
      this.addToShelf
    );

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
