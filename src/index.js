import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import getStore from './store.js'

ReactDOM.render(
	<Provider store={getStore({})}>
		<App />
	</Provider>, document.getElementById('root'));

