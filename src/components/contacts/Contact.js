import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../Context';

const Contact = ({ contact }) => {
    const [showInformation, setShowInformation] = useState(false);

    return (
        <Consumer>
            {(value) => {

                const {dispatch} = value;

                return (
                    <div className="card card-body mb-3">
                        <h4>
                            {contact.name}{' '}
                            <i
                                onClick={() => setShowInformation(!showInformation)}
                                className="fas fa-sort-down"
                                style={{ cursor: 'pointer' }}
                            ></i>{' '}
                            <i
                                onClick={() => dispatch({type : 'DELETE_CONTACT' , payload: contact.id})}
                                className="fa fa-times"
                                style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                            ></i>
                        </h4>
                        {showInformation && (
                            <ul className="list-group">
                                <li className="list-group-item">{contact.email}</li>
                                <li className="list-group-item">{contact.phone}</li>
                            </ul>
                        )}
                    </div>
                );
            }}
        </Consumer>
    );
};

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
};

export default Contact;
