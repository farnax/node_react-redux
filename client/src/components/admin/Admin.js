'use strict';

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory  } from 'react-router-dom';

import { loginIn, loginOut } from '../../features/admin/adminSlice.js';

const Admin = ({children}) => {
	const login = useSelector(state => state.admin.login);
	
	const dispatch = useDispatch();
	const history = useHistory();
  
  useEffect(() => {
  	if(localStorage.getItem('admin')) {
  		dispatch(loginIn());
  	}
  },[]);

	const handleLoginOut = () => {
		dispatch(loginOut());
		history.push('/');
	};
  
	return (
		<div className="container">
		  <div className="row justify-content-center">
				<h2>Admin Page</h2>
				<p>Add a new card</p>
				{children}
			</div>
			<button 
  			type="button" 
  			className="btn btn-info offset-8"
  			onClick={() => handleLoginOut()}>
  			Login Out
  		</button>
		</div>
	);
};

export default Admin;