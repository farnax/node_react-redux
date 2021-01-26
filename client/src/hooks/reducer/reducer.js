'use strict';

import React from 'react';

const TOGGLE_VISIBILITY = 'TOGGLE_VISIBILITY';

export const initialState = {
	visible: false
};

export const toggleVisibility = () => ({ type: TOGGLE_VISIBILITY});

export const visibilityReducer = (state, action) => {
	switch(action.type) {
		case TOGGLE_VISIBILITY: 
		  return { visible: !state.visible };
		default: 
		  return state;
	}
};