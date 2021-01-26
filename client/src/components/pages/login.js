'use strict';

import React from 'react';
import LoginForm from '../forms/LoginForm.js';

const LoginPage = () => {
	return (
		<div className="container">
		  <div className="row justify-content-center">
				<h2>Login Page</h2>
				<LoginForm />
			</div>
		</div>
	);
};

export default LoginPage;