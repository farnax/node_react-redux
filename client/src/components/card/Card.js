'use strict';

import React from 'react';

import './card.css';

const Card = ({ card }) => {
	return (
    <div className="col-3 col-sm-6 col-md-3">
      <div className="card">
        <img src={card.src} className="card-img-top"/>
        <div className="card-body">
    			<h5 className="card-title">Card title {card.title}</h5>
    			<p className="card-text">Card body {card.body}</p>
    			<a href="#" className="btn btn-primary">Go somewhere</a>
  			</div>
      </div>
    </div>
	);
};

export default Card;