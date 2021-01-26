'use strict';

import React from 'react';

import Card from '../card/Card.js';

const CardList = ({ cards }) => {

	return (
		<div className="row justify-content-between">
			{cards.map(card => <Card key={card.id} card={card} />)}
		</div>
	);
};

export default CardList;