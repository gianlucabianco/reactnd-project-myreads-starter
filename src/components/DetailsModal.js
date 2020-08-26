import React from 'react';

class DetailsModal extends React.Component {

    hideDetails = event => {

        event.preventDefault();
        
        this.props.hideDetails();

    }

    render() {

        const { book } = this.props;

        return (
            <div className="details-modal">
                this is a modal for { book.title }
                <button
                    onClick={ event => this.hideDetails( event ) }

                >close</button>
            </div>
        );

    }

}

export default DetailsModal;