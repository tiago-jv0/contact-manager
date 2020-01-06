import React, { Component } from 'react';
import Header from './components/Header';
import Contacts from './components/Contacts';
import { Provider } from './Context';
import 'bootstrap/dist/css/bootstrap.min.css';

export class App extends Component {
    render() {
        return (
            <Provider>
                <div className="App">
                    <Header branding="Contact Manager"></Header>
                    <div className="container">
                        <Contacts></Contacts>
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;
