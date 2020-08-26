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

  onShelfChange = newShelfData => {
      
      this.props.onShelfChange( newShelfData );

  }

  onSearch = query => {

    this.setState(
      {
        query,
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
            results: [],
            isError: true,
          }
        )
      }
    );

  }

  render() {

    const shelfName = ''; // TODO: data && data structure

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
              debounceTimeout={ 300 } 
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
                            shelfName={ shelfName }
                            onShelfChange={ this.onShelfChange }
                        />
                    </li>
                  )
                )
            }
          </ol>
        </div>
        
        {
          isError
          && <ErrorMessage
            isError={ isError }
            message={ 'No results founded. Please try with a different query' }
          />
        }
        
      </div>
    );

  }

}

export default SearchBooks;