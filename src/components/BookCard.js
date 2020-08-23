import React from 'react';

import BookShelfChanger from './BookShelfChanger';

class BookCard extends React.Component {

    render() {

        const {
            title,
            author,
            cover
        } = this.props;

        return (
            <div className="book">
                <div className="book-top">
                {/* TODO: move book-cover style properties in a scoped css set of rules */}
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

                <BookShelfChanger />
                
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