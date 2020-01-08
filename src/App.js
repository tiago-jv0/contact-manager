import React, { Component } from 'react';
import Header from './components/layout/Header';
import Contacts from './components/contacts/Contacts';
import { Provider } from './Context';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddContact from './components/contacts/AddContact';

export class App extends Component {
    render() {
        return (
            <Provider>
                <div className="App">
                    <Header branding="Contact Manager"></Header>
                    <div className="container">
                        <AddContact></AddContact>
                        <Contacts></Contacts>
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;
