'use strict';

import React from 'react';

import Admin from '../admin/Admin.js';
import AddCardForm from '../forms/AddCardForm.js'; 

const AdminPage = () => {
	return (
    <Admin>
			<AddCardForm />
		</Admin>
	);
};

export default AdminPage;