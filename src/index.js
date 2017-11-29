import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promise from 'redux-promise';

import reducers from './reducers';
import App from './App';

const createStoreWithMiddleware = applyMiddleware(...[promise,thunkMiddleware])(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
        <App />
    </Provider>
    , document.getElementById('root'));
