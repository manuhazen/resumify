import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import './assets/styles/main.css';
import {Provider} from 'react-redux';
import store from './store';
import {persistStore} from 'redux-persist';

import registerServiceWorker from './registerServiceWorker';

class Entry extends Component {
    state = {
        appReady: false,
    }

    componentDidMount() {
        persistStore(store, {}, () => this.setState({appReady: true}));
    }

    render() {
        if (!this.state.appReady) {
            return <h1> Loading </h1>
        }
        return (
            <Switch>
                <Route exact path="/" component={App} />
            </Switch>
            
        )
    }
};



ReactDOM.render(
    <Router basename="/">
        <Provider store={store}>
            <Entry />
        </Provider>
    </Router>, 
    document.getElementById('root')
);

registerServiceWorker();
