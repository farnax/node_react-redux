'use strict';

const cardSchema = require('../models/cardSchema.js');

const add = (data, addition) => {
	const newOne = cardSchema(...addition);
	data.push(newOne);
  //return data;
  return [data, newOne];
};

module.exports = async (name, addition) => {
	const dataLast = memory.get(name);
	if (!dataLast) return `Data: ${name} is not found`;

  //const newData = add(dataLast, addition);
  const [data, newOne] = add(dataLast, addition);
  memory.set(name, data);
  return newOne;
};
