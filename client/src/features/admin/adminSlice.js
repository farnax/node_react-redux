'use strict';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	login: false
};

const adminSlice = createSlice({
	name: 'admin',
	initialState,
	reducers: {
		loginIn(state) {
			state.login = true;
		},
		loginOut(state) {
			state.login = false;
		}
	}
});

export const { loginIn, loginOut } = adminSlice.actions;
export default adminSlice.reducer;