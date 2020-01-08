import React, { Component } from 'react';
import { Consumer } from '../../Context';
import uuid from 'uuid';

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
        const payload = { ...this.state , id:uuid() };
        dispatch({ type: 'ADD_CONTACT', payload });

        this.setState({
            name : '',
            email : '',
            phone : ''
        })
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
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input
                                            onChange={this.handleChange}
                                            name="name"
                                            id="name"
                                            type="text"
                                            className="form-control form-control-lg"
                                            placeholder="Enter name"
                                            value={name}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            onChange={this.handleChange}
                                            name="email"
                                            id="email"
                                            type="email"
                                            className="form-control form-control-lg"
                                            placeholder="Enter email"
                                            value={email}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone</label>
                                        <input
                                            onChange={this.handleChange}
                                            name="phone"
                                            id="phone"
                                            type="phone"
                                            className="form-control form-control-lg"
                                            placeholder="Enter phone"
                                            value={phone}
                                        />
                                    </div>

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
