import React from 'react';

class BookShelfChanger extends React.Component {

    handleChange = event => {

        const newShelf = event.target.value;

        if ( newShelf !== 'none' ) {

            this.props.onShelfChange(
                newShelf
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
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        );

    }

}

export default BookShelfChanger;