import React from 'react';
import PropTypes from 'prop-types';

class BookShelfChanger extends React.Component {

    handleChange = event => {

        const newShelf = event.target.value;

        newShelf !== 'none'
        && this.props.onShelfChange(
            newShelf
        );

      };

    render() {

        return (
            <div className="book-shelf-changer">
                <select
                    onChange={ this.handleChange }
                    defaultValue={ this.props.shelfName }
                >
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

BookShelfChanger.propTypes = {
    onShelfChange: PropTypes.func.isRequired,
    shelfName: PropTypes.string.isRequired,
};

export default BookShelfChanger;