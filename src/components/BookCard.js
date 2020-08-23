import React from 'react';

class BookCard extends React.Component {

    render() {

        const {
            bookTitle,
            bookAuthor,
            bookCover
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
                        backgroundImage: `url("${bookCover}")`,
                    }}
                />
                {/* TODO: this should be a compoent */}
                <div className="book-shelf-changer">
                    <select>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
                </div>

                <div
                    className="book-title"
                >
                    { bookTitle }
                </div>
                <div
                    className="book-authors"
                >
                    { bookAuthor }
                </div>

            </div>
        );

    }

}

export default BookCard;