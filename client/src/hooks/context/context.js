'use strict';

import React, { useReducer, useContext } from 'react';

import { initialState, visibilityReducer } from '../reducer/reducer.js';


const VisibilityContext = React.createContext();

export const useVisibility = () => useContext(VisibilityContext);

export const VisibilityProvider = ({ children }) => {
	const [ state, dispatch ] = useReducer(visibilityReducer, initialState);

	return (
		<VisibilityContext.Provider value={{
			state, 
			dispatch
		}}>
			{children}
		</VisibilityContext.Provider>
	);
};