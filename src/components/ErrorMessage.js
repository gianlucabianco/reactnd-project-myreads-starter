import React from 'react';
import PropTypes from 'prop-types';

class ErrorMessage extends React.Component {
    
    render() {

        /* Note for the Reviewer: "hints" should come from a props / BE / API */        
        const hints = [
            'Android',
            'Art',
            'Artificial Intelligence',
            'Astronomy',
            'Austen',
            'Baseball',
            'Basketball',
            'Bhagat',
            'Biography',
            'Brief',
            'Business',
            'Camus',
            'Cervantes',
            'Christie',
            'Classics',
            'Comics',
            'Cook',
            'Cricket',
            'Cycling',
            'Desai',
            'Design',
            'Development',
            'Digital Marketing',
            'Drama',
            'Drawing',
            'Dumas',
            'Education',
            'Everything',
            'Fantasy',
            'Film',
            'Finance',
            'First',
            'Fitness',
            'Football',
            'Future',
            'Games',
            'Gandhi',
            'Homer',
            'Horror',
            'Hugo',
            'Ibsen',
            'Journey',
            'Kafka',
            'King',
            'Lahiri',
            'Larsson',
            'Learn',
            'Literary Fiction',
            'Make',
            'Manage',
            'Marquez',
            'Money',
            'Mystery',
            'Negotiate',
            'Painting',
            'Philosophy',
            'Photography',
            'Poetry',
            'Production',
            'Programming',
            'React',
            'Redux',
            'River',
            'Robotics',
            'Rowling',
            'Satire',
            'Science Fiction',
            'Shakespeare',
            'Singh',
            'Swimming',
            'Tale',
            'Thrun',
            'Time',
            'Tolstoy',
            'Travel',
            'Ultimate',
            'Virtual Reality',
            'Web Development',
            'iOS'
        ];

        return (
            <div
                className="error-message"
            >
                <p
                    className="error-message-title"
                >
                    { this.props.message }
                </p>
                <div
                    className="error-message-hints"
                >
                    <div>
                        Try something like this:
                    </div>                
                    {
                        this.props.isError
                        && hints.map(
                            (
                                hint,
                                index
                            ) => (
                                <span
                                    key={ `${ hint }-${ index }` }
                                >{`${ hint } | `}</span>
                            )
                        )
                    }
                </div>
            </div>
        );
    }

};

ErrorMessage.propTypes = {
    isError: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
  };

export default ErrorMessage;