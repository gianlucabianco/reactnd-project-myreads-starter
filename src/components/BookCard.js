import React from 'react';
import PropTypes from 'prop-types';

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
    
    showDetails = book => {
        
        this.props.showDetails( book );

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
                        style={
                            {
                                width: 128,
                                height: 193,
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundImage: `url("${ book && book.imageLinks && book.imageLinks.thumbnail }")`,
                            }
                        }
                        onClick={ () => this.showDetails( book ) }
                    />

                    <BookShelfChanger
                        shelfName={ shelfName }
                        onShelfChange={ this.onShelfChange }
                    />                
                </div>

                <div className="book-title" >
                    {
                        book
                        && book.title
                    }
                </div>

                <div className="book-authors" >
                    {
                        book
                        && book.authors
                        && book.authors.map(
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

BookCard.propTypes = {
    onShelfChange: PropTypes.func.isRequired,
    showDetails: PropTypes.func.isRequired,
    shelfName: PropTypes.string.isRequired,
    book: PropTypes.object.isRequired,
};

export default BookCard;