import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import {persistReducer} from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadingBarMiddleware } from 'react-redux-loading-bar';
import storage from 'redux-persist/lib/storage'

import rootReducer from './reducers/index';

const persistConfig = {
    key: 'root',
    storage,
}

const middleware = composeWithDevTools(
    applyMiddleware(
        loadingBarMiddleware(),
        createLogger(),
    )
);

export default createStore(persistReducer(persistConfig, rootReducer), middleware);