'use strict';

const cardSchema = require('../models/cardSchema.js');

const generateData = length => {
  const data = new Array(length).fill(undefined);
  const dataCards = data.map(elem => elem = cardSchema());

  return dataCards;
};

module.exports = generateData(10);