import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './views/Home/Home';
import Login from './views/Login/Login';


export enum AppUrl {
    HOME = '/',
    LOGIN = '/LOGIN'
}

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path={AppUrl.HOME}>
                    <Home/>
                </Route>
                <Route exact path={AppUrl.LOGIN}>
                    <Login/>
                </Route>
                <Route path="*">
                    Oooops wrong way
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
