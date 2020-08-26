import React from 'react';

import BookCard from './BookCard';

class Bookshelf extends React.Component {

    onShelfChange = newShelfData => {
        
        this.props.onShelfChange( newShelfData );

    }

    showDetails = book => {
        
        this.props.showDetails( book );

    }

    render() {

        const {
            books,
            shelfName,
        } = this.props;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{ shelfName }</h2>
                <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        books.map(
                            book => (
                            <li 
                                key={ book.id }
                            >
                                <BookCard
                                    book={ book }                                    
                                    shelfName={ book.shelf }
                                    onShelfChange={ this.onShelfChange }
                                    showDetails={ this.showDetails }
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

export default Bookshelf;