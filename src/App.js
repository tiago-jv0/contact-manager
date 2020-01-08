import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/layout/Header';
import Contacts from './components/contacts/Contacts';
import { Provider } from './Context';
import AddContact from './components/contacts/AddContact';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';


export class App extends Component {
    render() {
        return (
            <Provider>
                <Router>
                    <div className="App">
                        <Header branding="Contact Manager"></Header>
                        <div className="container">
                            <Switch>
                                <Route exact path="/contact/add" component={AddContact} />
                                <Route exact path="/about" component={About} />
                                <Route exact path='/not-found' component={NotFound}/>
                                <Route exact path="/" component={Contacts} />
                                <Redirect to='/not-found'></Redirect>
                            </Switch>
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
