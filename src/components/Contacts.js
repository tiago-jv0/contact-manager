import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [
                { id: 0, name: 'Tiago', email: 'tiago_jvo@outlook.com', phone: '999347805'},
                { id: 1, name: 'José', email: 'idunno@outlook.com', phone: '99654785'},
            ],
        };
    }


    render() {
        const { contacts } = this.state;

        return (
            <React.Fragment>
                {contacts.map((contact) => {
                    return (
                        <Contact
                            key={contact.id}
                            contact={contact}
                        ></Contact>
                    );
                })}
            </React.Fragment>
        );
    }
}

export default Contacts;
