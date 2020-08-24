import React from 'react';

import BookShelfChanger from './BookShelfChanger';

class BookCard extends React.Component {

    onShelfChange = newShelf => {
        
        this.props.onShelfChange(
            {
                currentShelf: this.props.shelfName,
                newShelf,
                book: {
                    title: this.props.title,
                    author: this.props.author,
                    cover: this.props.cover,
                },
            }
        );

    }

    render() {

        const {
            shelfName,
            title,
            author,
            cover,
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
                        backgroundImage: `url("${ cover }")`,
                    }}
                />

                <BookShelfChanger
                    shelfName={ shelfName }
                    onShelfChange={ this.onShelfChange }
                />
                
                </div>

                <div className="book-title" >
                    { title }
                </div>
                <div className="book-authors" >
                    { author }
                </div>

            </div>
        );

    }

}

export default BookCard;