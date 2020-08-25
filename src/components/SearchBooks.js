import React from 'react';
import { Link } from 'react-router-dom';
import BookCard from './BookCard';


class SearchBooks extends React.Component {

    onShelfChange = newShelfData => {
        
        this.props.onShelfChange( newShelfData );

    }

    render() {

        const { bookShelves } = this.props
        , books = [] // TODO: data && data structure
        , shelfName = '';  // TODO: data && data structure

        console.log(
          {
            bookShelves,
          }
        );

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
            <ol className="books-grid">
                {
                    books.map(
                        book => (
                        <li 
                            key={ book.title }
                        >
                            <BookCard
                                title={ book.title }
                                author={ book.author }
                                cover={ book.cover }
                                shelfName={ shelfName }
                                onShelfChange={ this.onShelfChange }
                            />
                        </li>
                        )
                    )
                }
              </ol>
            </div>
          </div>
        );

    }

}

export default SearchBooks;