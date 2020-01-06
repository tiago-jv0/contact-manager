import React, {useState} from 'react';
import PropTypes from 'prop-types';

const Contact = ({ contact }) => {

    const [showInformation , setShowInformation] = useState(false);


    return (
        <div className="card card-body mb-3">
            <h4 onClick={() => setShowInformation(!showInformation)}>
                {contact.name} <i className="fas fa-sort-down"></i>
            </h4>
            {showInformation && (
                <ul className="list-group">
                    <li className="list-group-item">{contact.email}</li>
                    <li className="list-group-item">{contact.phone}</li>
                </ul>
            )}
        </div>
    );
};

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
};

export default Contact;
