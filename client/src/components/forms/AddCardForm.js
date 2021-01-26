'use strict';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import useInput from '../../hooks/myHooks/useInput.js';
import { saveNewCard, selectCards } from '../../features/cards/cardsSlice.js';

const AddCardForm = () => {
	const cards = useSelector(selectCards);
	if (cards.length !== 0) console.log("cards", cards);
	const dispatch = useDispatch();

  const title = useInput();
  const body = useInput();


	const handleSubmit = e => {
		e.preventDefault();
    const card = [title.value, body.value];
    
    dispatch(saveNewCard(card));
    title.clear();
    body.clear();
	};

	return (
		<form className="col-6 col-sm-10" onSubmit={handleSubmit}>
  		<label className="form-label col-6 col-sm-10">
    		Title:
    		<input className="form-control" type="text" name="title" {...title.bind}/>
  		</label>  				
  		<label className="form-label col-6 col-sm-10">
    		Body:
    		<input className="form-control" type="text" name="body" {...body.bind}/>
  		</label>
  		<input type="submit" value="Add" className="btn btn-secondary" />
		</form>
	);
};

export default AddCardForm;