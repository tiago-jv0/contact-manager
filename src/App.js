import React, { Component } from 'react';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacts from './components/Contacts';

export class App extends Component {
    render() {
        return (
            <div className="App">
                <Header branding="Contact Manager"></Header>
                <div className="container">
                    <Contacts></Contacts>
                </div>
            </div>
        );
    }
}

export default App;
