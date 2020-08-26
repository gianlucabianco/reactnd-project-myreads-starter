import React from 'react';
import PropTypes from 'prop-types';

class DetailsModal extends React.Component {

    hideDetails = event => {

        event.preventDefault();
        
        this.props.hideDetails();

    }

    render() {

        const {
            title,
            subtitle,
            pageCount,
            authors,
            categories,
            averageRating,
            description,
            publishedDate,
            publisher
        } = this.props.book;

        return (
            <div className="details-modal">
                <div className="details-modal-content">
                    <h2>Book details</h2>
                    
                    {
                        title
                        && <div>
                            <strong>Title: </strong> { title }
                        </div>
                    }

                    {
                        subtitle
                        && <div>
                            <strong>Subtitle: </strong> { subtitle }
                        </div>
                    }

                    {
                        pageCount
                        && <div>
                            <strong>Page count: </strong> { pageCount }
                        </div>
                    }

                    {
                        authors
                        && authors.length
                        && <div className="details-modal-content-authors">
                                <strong>Authors:</strong> {
                                    authors.map(
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
                        categories
                        && categories.length
                        && <div className="details-modal-content-categories">
                            <strong>Categories:</strong> {
                                categories.map(
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
                        averageRating
                        && <div>
                            <strong>Average Rating: </strong> { averageRating }/5
                        </div>
                    }

                    {
                        description
                        && <div className="details-modal-content-description">
                            <strong>Description: </strong>
                            <span>{ description }</span>
                        </div>
                    }

                    {
                        publishedDate
                        && <div>
                            <strong>Published Date: </strong> { publishedDate }
                        </div>
                    }

                    {
                        publisher
                        && <div>
                            <strong>Publisher: </strong> { publisher }
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