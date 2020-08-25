import React from 'react';

class BookShelfChanger extends React.Component {

    handleChange = event => {

        const newShelf = event.target.value;

        if ( newShelf !== 'None' ) {
            
            /* parse newShelf in the right structure accepted from BooksAPI.js */

            this.props.onShelfChange(
                newShelf
                .split(' ')
                .map(
                    (
                        word,
                        index
                    ) => index === 0
                    ? word.toLowerCase()
                    : word.toLowerCase().charAt(0).toUpperCase() + word.slice( 1 )
                ).join('')
            );

        }

      };

    render() {

        return (
            <div className="book-shelf-changer">
                <select
                    onChange={ this.handleChange }
                    defaultValue={ this.props.shelfName }                    
                >
                    {/* TODO: from static template to data.map() */}
                    <option value="Move" disabled>Move to...</option>
                    <option value="Currently reading">Currently Reading</option>
                    <option value="Want to read">Want to Read</option>
                    <option value="Read">Read</option>
                    <option value="None">None</option>
                </select>
            </div>
        );

    }

}

export default BookShelfChanger;