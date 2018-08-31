import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Account from "./Account";
import logo from "./logo.svg";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">WORSHOP</h1>
                </header>
                <br/>
                <Switch>
                    <Route exact path='/' component={Account}/>
                </Switch>
            </div>
        );
    }
}

export default App;
