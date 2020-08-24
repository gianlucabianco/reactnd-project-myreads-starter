import React from 'react';

import BookCard from './BookCard';

class Bookshelf extends React.Component {

    onShelfChange = newShelfData => {
        
        this.props.onShelfChange( newShelfData );

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

export default Bookshelf;