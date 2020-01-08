import React, { Component } from 'react';
import { Consumer } from '../../Context';
import uuid from 'uuid';
import Input from '../layout/Input';

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
    };

    handleChange = ({ target: input }) => {
        this.setState({ [input.name]: input.value });
    };

    handleSubmit = (event, dispatch) => {
        event.preventDefault();
        const payload = { ...this.state, id: uuid() };
        dispatch({ type: 'ADD_CONTACT', payload });

        this.setState({
            name: '',
            email: '',
            phone: '',
        });
    };
    render() {
        const { name, email, phone } = this.state;

        return (
            <Consumer>
                {(value) => {
                    const { dispatch } = value;

                    return (
                        <div className="card mb-3">
                            <div className="card-header">Add Contact</div>
                            <div className="card-body">
                                <form onSubmit={(event) => this.handleSubmit(event, dispatch)}>
                                    <Input
                                        name="name"
                                        label="Name"
                                        value={name}
                                        placeholder="Enter phone"
                                        type="text"
                                        onChange={this.handleChange}
                                    ></Input>
                                    <Input
                                        name="email"
                                        label="Email"
                                        value={email}
                                        placeholder="Enter email"
                                        type="text"
                                        onChange={this.handleChange}
                                    ></Input>
                                    <Input
                                        name="phone"
                                        label="Phone"
                                        value={phone}
                                        placeholder="Enter phone"
                                        type="phone"
                                        onChange={this.handleChange}
                                    ></Input>

                                    <input type="submit" value="Add Contact" className="btn btn-block btn-dark" />
                                </form>
                            </div>
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

export default AddContact;
