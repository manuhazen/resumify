import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

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
            <App />
        )
    }
};



ReactDOM.render(
    <Provider store={store}>
        <Entry />
    </Provider>, 
    document.getElementById('root')
);

registerServiceWorker();
