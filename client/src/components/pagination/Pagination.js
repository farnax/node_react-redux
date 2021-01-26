'use strict';

import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CardList from '../cardList/CardList.js';
import { fetchCards, selectCards } from '../../features/cards/cardsSlice.js';


const LIMIT = 3;

const Pagination = () => {
  const cards = useSelector(selectCards);
  const loadingStatus = useSelector(state => state.cards.status);

  const dispatch = useDispatch();

  const delta = useRef(0);
  const cardsLength = useRef(0);
  let range = null;

  if (delta.current === 0) {
  	range = [delta.current, LIMIT];
  	delta.current = LIMIT;
    cardsLength.current = LIMIT;

  	dispatch(fetchCards(range));
  }

  const handleNext = () => {
    const length = cards.length;
  	if (length >= LIMIT) {
  		cardsLength.current = cardsLength.current + length;
  		range = [delta.current, delta.current + length];
      delta.current = delta.current + length;

      dispatch(fetchCards(range));
  	}
  };

  const handlePrev = () => {
    if (delta.current - LIMIT > 0) {
    	const length = cards.length;
    	cardsLength.current = cardsLength.current - LIMIT;
    	delta.current = cardsLength.current - LIMIT;
      range = [delta.current - LIMIT, delta.current];

      dispatch(fetchCards(range));
    }
  };
  
  if (loadingStatus === 'loading') {
    return (
      <div className="row justify-content-start">
        <p> ...Loading </p>
      </div>
    );
  }

  return (
  	<>
  		{cards && <CardList cards={cards} />}
  		<div className="row justify-content-start">
  		<button 
  			type="button" 
  			className="btn btn-info col-1"
  			onClick={() => handlePrev()}>
  			Prev
  		</button>
  		<button 
  			type="button" 
  			className="btn btn-info col-1 offset-1"
  			onClick={() => handleNext()}>
  			Next
  		</button>
  		</div>
  	</>
  );
};

export default Pagination;
