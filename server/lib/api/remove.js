'use strict';

const remove = (data, id) => {
	return data.filter(elem => elem.id !== id);
};

module.exports = async (name, id) => {
	const data = memory.get(name);
	if (!data) return `Data: ${name} is not found`;

  const newData = remove(data, id);
  memory.set(name, newData);
};
