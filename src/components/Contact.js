import React from 'react';
import PropTypes from 'prop-types'

const Contact = ({ contact }) => {
    return (
        <div className='card card-body mb-3'>
            <h4>{contact.name}</h4>
            <ul className='list-group'>
                <li className='list-group-item'>{contact.email}</li>
                <li className='list-group-item'>{contact.phone}</li>
            </ul>
        </div>
    );
};

Contact.propTypes = {
    contact : PropTypes.object.isRequired
}

export default Contact;
