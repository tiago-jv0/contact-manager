import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [{id: 0 , name: 'Tiago', email: 'tiago_jvo@outlook.com', phone: '999347805' }],
        };
    }

    render() {
        const { contacts } = this.state;

        return (
            <div>
                {contacts.map((contact) => {
                    return <Contact key={contact.id} contact={contact}></Contact>;
                })}
            </div>
        );
    }
}

export default Contacts;
