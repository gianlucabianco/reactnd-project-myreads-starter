import React from 'react';

import { Link } from 'react-router-dom';
import { DebounceInput } from 'react-debounce-input';

import BookCard from './BookCard';
import ErrorMessage from './ErrorMessage';

import * as BooksAPI from '../BooksAPI';

class SearchBooks extends React.Component {

  state = {
    query: '',
    results: [],
    isError: false,
  };

  getShelfName = ( book, allBooks ) => {
    
    let shelf = 'None';
    
    const matchingBook = allBooks.find(
      currentBook => currentBook.id === book.id
    );
    
    if( matchingBook ) {

      /* TODO: better BL for shelf reassignment*/

      if( matchingBook.shelf === 'currentlyReading' )
        shelf = 'Currently reading';
      
      if( matchingBook.shelf === 'wantToRead' )
        shelf = 'Want to read';

      if( matchingBook.shelf === 'read' )
        shelf = 'Read';

    }

    return shelf;

  }

  onShelfChange = newShelfData => {
      
      this.props.onShelfChange( newShelfData );

  }

  onSearch = query => {

    this.setState(
      {
        query,
        results: [],
        isError: false,
      }
    );

    query.length
    && BooksAPI.search(
      query
    ).then(
      result => {
        Array.isArray( result )
        ? this.setState(
          {
            results: result,
            isError: false,
          }
        )
        : this.setState(
          {
            isError: true,
          }
        )
      }
    );

  }

  render() {

    const { allBooks } = this.props;

    const {
      query,
      results,
      isError
    } = this.state;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to="/"
            className="close-search"
          >
            Close
          </Link>

          <div className="search-books-input-wrapper">
            <DebounceInput
              debounceTimeout={ 200 } 
              value={ query }
              onChange={ event => this.onSearch( event.target.value ) }
              type="text"
              placeholder="Search by title or author"
            />
          </div>
        </div>

        <div className="search-books-results">

          <ol className="books-grid">
            {
              query
              && results
              && results.map(
                book => (
                  <li 
                      key={ book.id }
                  >
                      <BookCard
                          book={ book }                                    
                          shelfName={ this.getShelfName( book, allBooks ) }
                          onShelfChange={ this.onShelfChange }
                      />
                  </li>
                )
              )
            }
          </ol>
        
          {
            isError
            && <ErrorMessage
              isError={ isError }
              message={ 'No results founded. Please try with a different query' }
            />
          }
        </div>
        
      </div>
    );

  }

}

export default SearchBooks;