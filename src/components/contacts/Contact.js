import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../Context';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Contact extends Component {
    state = {
        showInformation: false,
    };

    handleDelete = async (id, dispatch) => {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

            dispatch({ type: 'DELETE_CONTACT', payload: id });
        } catch (error) {
            console.log(error);
        }
    };

    render() {
        const { contact } = this.props;
        const { showInformation } = this.state;

        return (
            <Consumer>
                {(value) => {
                    const { dispatch } = value;

                    return (
                        <div className="card card-body mb-3">
                            <h4>
                                {contact.name}{' '}
                                <i
                                    onClick={() => this.setState({ showInformation: !showInformation })}
                                    className="fas fa-sort-down"
                                    style={{ cursor: 'pointer' }}
                                ></i>{' '}
                                <i
                                    onClick={() => this.handleDelete(contact.id, dispatch)}
                                    className="fa fa-times"
                                    style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                                ></i>
                                <Link to={`/contact/edit/${contact.id}`}>
                                    {' '}
                                    <i
                                        className="fas fa-pencil-alt"
                                        style={{
                                            cursor: 'pointer',
                                            float: 'right',
                                            color: 'black',
                                            marginRight: '1rem',
                                        }}
                                    ></i>{' '}
                                </Link>
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
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
};

export default Contact;
