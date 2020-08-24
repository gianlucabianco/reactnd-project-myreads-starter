import React from 'react';

class BookShelfChanger extends React.Component {

    handleChange = event => {

        const newShelf = event.target.value;

        if ( newShelf !== 'None' ) {
            
            this.props.onShelfChange( newShelf );

        }


      };

    render() {

        return (
            <div className="book-shelf-changer">
                <select
                    onChange={ this.handleChange }
                    defaultValue={ this.props.shelfName }                    
                >
                    <option value="Move" disabled>Move to...</option>
                    <option value="Currently Reading">Currently Reading</option>
                    <option value="Want to Read">Want to Read</option>
                    <option value="Read">Read</option>
                    <option value="None">None</option>
                </select>
            </div>
        );

    }

}

export default BookShelfChanger;