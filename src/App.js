import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'

import BookCard from './components/BookCard';
import Bookshelf from './components/Bookshelf';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: {
      currentReading: [
        {
          title: 'Composing Software: An Exploration of Functional Programming and Object Composition in JavaScript',
          author: 'Eric Elliot',
          cover: 'https://d2sofvawe08yqg.cloudfront.net/composingsoftware/hero?1588710676',
        },
        {
          title: 'Batwoman',
          author: 'J.H. Williams III',
          cover: 'https://images-na.ssl-images-amazon.com/images/I/61KzMKstU-L._SX320_BO1,204,203,200_.jpg',
        },
        {
          title: 'Do the work',
          author: 'Steven Pressfield',
          cover: 'https://images-na.ssl-images-amazon.com/images/I/41S6LVVM5pL._SX311_BO1,204,203,200_.jpg',
        },
      ],
      wantToRead: [
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
      read: [
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
    },
    showSearchPage: false
  }

  render() {

    const { books } = this.state;

    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
              <Bookshelf
                books={ books.currentReading }
                section={ 'Read' }
              />
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {
                        books.currentReading.map(
                          book => (
                            <li
                              key={ book.title }
                            >
                              <BookCard
                                title={ book.title }
                                author={ book.author }
                                cover={ book.cover }
                              />
                            </li>
                          )
                        )
                      }
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {
                        books.wantToRead.map(
                          book => (
                            <li
                              key={ book.title }
                            >
                              <BookCard
                                title={ book.title }
                                author={ book.author }
                                cover={ book.cover }
                              />
                            </li>
                          )
                        )
                      }
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {
                        books.read.map(
                          book => (
                            <li
                              key={ book.title }
                            >
                              <BookCard
                                title={ book.title }
                                author={ book.author }
                                cover={ book.cover }
                              />
                            </li>
                          )
                        )
                      }
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
