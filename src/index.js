import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import rootReducer from './reducers';
import './styles/app.scss';

ReactDOM.render(
    <Provider store={createStore(rootReducer)}>
        <App />
    </Provider>, document.getElementById('app'));