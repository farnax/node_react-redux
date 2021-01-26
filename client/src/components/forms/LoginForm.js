'use strict';

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { loginIn } from '../../features/admin/adminSlice.js';
import AdminPage from '../pages/admin.js';
import useInput from '../../hooks/myHooks/useInput.js';
import './form.css';

const EMAIL = 'admin@gmail.com';
const PASSWORD = 'admin';

const login = (email, password) => {
	if (EMAIL === email && PASSWORD === password) {
		localStorage.setItem('admin', 'token');
	}
	return;
};

const Form = () => {
	const inputEmail = useInput();
	const inputPassword = useInput();
  const history = useHistory();
  const dispatch = useDispatch();

	const handleSubmit = e => {
		e.preventDefault();
    localStorage.clear();

		if (!inputEmail.value || !inputPassword.value) return;

		login(inputEmail.value, inputPassword.value);

		if(localStorage.getItem('admin')) {
      dispatch(loginIn());
      history.push('admin');
    }
    else {
    	inputEmail.clear();
    	inputPassword.clear();
    }
	};

  return (
  	<div >
  		<form className="col-6 col-sm-10" onSubmit={handleSubmit}>
  			<div className="mb-3">
    			<label className="form-label col-6 col-sm-10">
    				Email address
    				<input type="email" className="form-control" {...inputEmail.bind} />
    			</label>
    			<div className="form-text">We'll never share your email with anyone else.</div>
  			</div>
  			<div className="mb-3">
    		<label className="form-label col-6 col-sm-10">
    			Password 
    			<input type="password" className="form-control" {...inputPassword.bind}/>
    		</label>
  			</div>
  			<button type="submit" className="btn btn-primary">Submit</button>
			</form>
  	</div>
  );
};


export default Form;