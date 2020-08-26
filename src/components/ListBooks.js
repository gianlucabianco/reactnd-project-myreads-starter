import React from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './Bookshelf';


class ListBooks extends React.Component {

    onShelfChange = newShelfData => {
        
        this.props.onShelfChange( newShelfData );

    }

    showDetails = book => {
        
      this.props.showDetails( book );

    }

    render() {

        const { bookShelves } = this.props;

        return (
            <div className="list-books">

                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
  
                <div className="list-books-content">
                  {
                    bookShelves.map(
                      shelf => (
                        <Bookshelf
                          key={ shelf.title }
                          books={ shelf.books }                      
                          shelfName={ shelf.title }
                          onShelfChange={ this.onShelfChange }
                          showDetails={ this.showDetails }
                        />
                      )
                    )
                  }             
                </div>
  
                <div className="open-search">
                  <Link
                    to="/search"
                    className="open-search-button"
                  >
                    Add a book
                  </Link>
                </div>
            </div>
        );

    }

}

export default ListBooks;