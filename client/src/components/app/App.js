'use strict';

import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import LoginPage from '../pages/login.js';
import AdminPage from '../pages/admin.js';
import HomePage from '../pages/home.js';
import { VisibilityProvider } from '../../hooks/context/context.js';
import './app.css';

const App = () => {
	return (
		<VisibilityProvider>
		  <Switch>
		  	<Route path='/' exact component={HomePage} />
				<Route path='/login' component={LoginPage} />
				<Route 
					path='/admin' 
					render={() => {
						return localStorage.getItem('admin') 
							? <AdminPage />
							: <Redirect to='/login' />
						}
					}
				/>
			</Switch>
		</VisibilityProvider>
	);
};

export default App;