'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter  as Router} from "react-router-dom";

import store from './store.js';
import 'bootstrap/dist/css/bootstrap.min.css';


import App from './components/app/App.js';

ReactDOM.render (
	<Provider store={store}>
		<Router>
  		<App />
  	</Router>
  </Provider>,
  document.getElementById('root')
);