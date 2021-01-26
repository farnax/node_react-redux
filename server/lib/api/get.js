'use strict';

const get = (data, from, to) => {
  return data.slice(from, to);
};

module.exports = async (name, range) => {
	const data = memory.get(name);
	if (!data) return `Data: ${name} is not found`;

	let begin = 0;
  let end = data.length;

  if (range) {
  	const [from, to] = range;
    begin = from;
    end = to;
  }

  return get(data, begin, end);
};