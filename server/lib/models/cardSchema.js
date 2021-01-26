'use strict';

const fs = require('fs');

const buffer = fs.readFileSync('lib/data/images/1.jpeg');

const generateId = () => `id${(~~(Math.random()*1e8)).toString(16)}`;

module.exports = (
  title = 'Title',
  body = 'Body',
  src = buffer
) => ({
  id: generateId(),
  title,
  body,
  src
});