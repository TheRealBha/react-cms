import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './components/reducers';
import App from './App';

let store = createStore(reducers);

console.log(store);

ReactDOM.render(< App />, document.getElementById('root'));