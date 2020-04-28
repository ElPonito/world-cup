import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './entities/rootReducer';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import './App.css';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__: () => any;
    }
}

export enum AppUrl {
    HOME = '/',
    LOGIN = '/LOGIN'
}

const enhancers = window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, enhancers);

function App() {
    return (
        <Provider store={store}>
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
        </Provider>
    );
}

export default App;
