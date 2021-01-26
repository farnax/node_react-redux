'use strict';

import { configureStore } from '@reduxjs/toolkit';

import cardsReducer from './features/cards/cardsSlice.js';
import adminReducer from './features/admin/adminSlice.js';

const store = configureStore({
	reducer: {
		cards: cardsReducer,
		admin: adminReducer
	}
});

export default store;
