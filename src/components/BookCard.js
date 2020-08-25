import React from 'react';

import BookShelfChanger from './BookShelfChanger';

class BookCard extends React.Component {

    onShelfChange = newShelf => {
        
        this.props.onShelfChange(
            {
                newShelf,
                book: {
                    id: this.props.book.id,
                },
            }
        );

    }

    render() {

        const {
            shelfName,
            book,
        } = this.props;

        return (
            <div className="book">
                <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundImage: `url("${ book.imageLinks.thumbnail }")`,
                    }}
                />

                <BookShelfChanger
                    shelfName={ shelfName }
                    onShelfChange={ this.onShelfChange }
                />
                
                </div>

                <div className="book-title" >
                    { book.title }
                </div>
                <div className="book-authors" >
                    {
                        book.authors.map(
                            author => (
                                <div
                                    key={ author }
                                >{ author }</div>
                            )
                        )
                    }
                </div>

            </div>
        );

    }

}

export default BookCard;