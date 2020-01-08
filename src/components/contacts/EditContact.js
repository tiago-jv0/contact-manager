import React, { Component } from 'react';
import { Consumer } from '../../Context';
import Input from '../layout/Input';
import axios from 'axios';

class EditContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {},
    };

    handleChange = ({ target: input }) => {
        this.setState({ [input.name]: input.value });
    };

    async componentDidMount() {
        const { id } = this.props.match.params;

        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

        const { name, email, phone } = response.data;

        this.setState({
            name,
            email,
            phone,
        });
    }

    handleSubmit = async (event, dispatch) => {
        event.preventDefault();

        const { id } = this.props.match.params;
        const { name, phone, email } = this.state;

        let errors = {};

        if (name === '') {
            errors['name'] = 'Name is required';
        }
        if (phone === '') {
            errors['phone'] = 'Phone is required';
        }
        if (email === '') {
            errors['email'] = 'Email is required';
        }

        if (Object.keys(errors).length > 0) {
            this.setState({ errors });
            return;
        }

        const updatedContact = {
            name,
            email,
            phone,
        };

        const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updatedContact);

        dispatch({type: 'UPDATE_CONTACT' , payload : response.data})

        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {},
        });

        this.props.history.push('/');
    };
    render() {
        const { name, email, phone, errors } = this.state;
        return (
            <Consumer>
                {(value) => {
                    const { dispatch } = value;

                    return (
                        <div className="card mb-3">
                            <div className="card-header">Edit Contact</div>
                            <div className="card-body">
                                <form onSubmit={(event) => this.handleSubmit(event, dispatch)}>
                                    <Input
                                        name="name"
                                        label="Name"
                                        value={name}
                                        placeholder="Enter name"
                                        type="text"
                                        onChange={this.handleChange}
                                        error={errors.name || ''}
                                    ></Input>
                                    <Input
                                        name="email"
                                        label="Email"
                                        value={email}
                                        placeholder="Enter email"
                                        type="text"
                                        onChange={this.handleChange}
                                        error={errors.email || ''}
                                    ></Input>
                                    <Input
                                        name="phone"
                                        label="Phone"
                                        value={phone}
                                        placeholder="Enter phone"
                                        type="phone"
                                        onChange={this.handleChange}
                                        error={errors.phone || ''}
                                    ></Input>

                                    <input type="submit" value="Update Contact" className="btn btn-block btn-dark" />
                                </form>
                            </div>
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

export default EditContact;
