'use strict';

import { 
	createSlice,
  createAsyncThunk, 
  createEntityAdapter,
  createSelector
} from '@reduxjs/toolkit';

import { api } from '../../api/api.js';

const cardsAdapter = createEntityAdapter();

const initialState = cardsAdapter.getInitialState({
	status: 'idle'
});

const createImage = data => {
	const bytes = new Uint8Array(data);
  const blob = new Blob([bytes], {type: 'image/jpeg'});
  return URL.createObjectURL(blob);
};

export const fetchCards = createAsyncThunk(
	'cards/fetchCards', 
	async range => {
  	const cards = await api.get(range).catch(e => console.log(e));
  	cards.forEach(card => {
      card.src = createImage(card.src.data);
  	});
  	return cards;
});

export const saveNewCard = createAsyncThunk(
	'cards/saveNewCard', 
	async card => {
  	const fetchCard = await api.add(card).catch(e => console.log(e));
  	const image = createImage(fetchCard.src.data)
    fetchCard.src = image;
  	return fetchCard;
});

const cardsSlice = createSlice({
	name: 'cards',
	initialState,
	reducers: {
		cardDeleted: cardsAdapter.removeOne,
	},
	extraReducers: builder => {
		builder
			.addCase(fetchCards.pending, state => {
				state.status = 'loading'
			})
			.addCase(fetchCards.fulfilled, (state, action) => {
				cardsAdapter.setAll(state, action.payload);
		  	state.status = 'idle';
			})
			.addCase(saveNewCard.fulfilled, cardsAdapter.addOne)
	}
});

export const { cardDeleted } = cardsSlice.actions;

export const {
	selectAll: selectCards,
	//selectById: selectCardById
} = cardsAdapter.getSelectors(state => state.cards);

export const selectCardIds = createSelector(
	selectCards,
	cards => cards.map(card => card.id)
);
export default cardsSlice.reducer;