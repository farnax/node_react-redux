import React, { useState, Suspense } from 'react';

import { useVisibility } from '../../hooks/context/context.js';
import { toggleVisibility } from '../../hooks/reducer/reducer.js';

const Button = () => {
	const { state, dispatch } = useVisibility();
	
	return (
		<button 
      type="button" 
      className="btn btn-success"
      onClick={() => dispatch(toggleVisibility())}
     >
      Show article
    </button>
	);
};

export default Button;