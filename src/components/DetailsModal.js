import React from 'react';
import PropTypes from 'prop-types';

class DetailsModal extends React.Component {

    hideDetails = event => {

        event.preventDefault();
        
        this.props.hideDetails();

    }

    render() {

        const { book } = this.props;

        return (
            <div className="details-modal">
                <div className="details-modal-content">
                    <h2>Book details</h2>
                    
                    {
                        book.title
                        && <div>
                            <strong>Title: </strong> { book.title }
                        </div>
                    }

                    {
                        book.subtitle
                        && <div>
                            <strong>Subtitle: </strong> { book.subtitle }
                        </div>
                    }

                    {
                        book.pageCount
                        && <div>
                            <strong>Page count: </strong> { book.pageCount }
                        </div>
                    }

                    {
                        book.authors
                        && book.authors.length
                        && <div className="details-modal-content-authors">
                                <strong>Authors:</strong> {
                                    book.authors.map(
                                        author => (
                                            <div
                                                key={ author }
                                            >
                                                { author }
                                            </div>
                                        )
                                    )
                                }
                        </div>
                    }

                    {
                        book.categories
                        && book.categories.length
                        && <div className="details-modal-content-categories">
                            <strong>Categories:</strong> {
                                book.categories.map(
                                    category => (
                                        <div
                                            key={ category }
                                        >
                                            { category }
                                        </div>
                                    )
                                )
                            }
                        </div>
                    }

                    {
                        book.averageRating
                        && <div>
                            <strong>Average Rating: </strong> { book.averageRating }/5
                        </div>
                    }

                    {
                        book.description
                        && <div className="details-modal-content-description">
                            <strong>Description: </strong>
                            <span>{ book.description }</span>
                        </div>
                    }

                    {
                        book.publishedDate
                        && <div>
                            <strong>Published Date: </strong> { book.publishedDate }
                        </div>
                    }

                    {
                        book.publisher
                        && <div>
                            <strong>Publisher: </strong> { book.publisher }
                        </div>
                    }

                    <button
                        className="close-modal-button"
                        onClick={ event => this.hideDetails( event ) }

                    >Back to books</button>
                </div>
            </div>
        );

    }

}

DetailsModal.propTypes = {
    hideDetails: PropTypes.func.isRequired,
    book: PropTypes.object.isRequired,
};

export default DetailsModal;