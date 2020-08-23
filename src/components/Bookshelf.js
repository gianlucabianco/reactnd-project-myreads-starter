import React from 'react';

import BookCard from './BookCard';

class Bookshelf extends React.Component {

    render() {

        const { books, section } = this.props;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{ section }</h2>
                <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                    books.map(
                        book => (
                        <li>
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
        );

    }

}

export default Bookshelf;