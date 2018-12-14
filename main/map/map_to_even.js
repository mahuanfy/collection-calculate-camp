'use strict';
function map_to_even(collection) {
  return collection.map(double);
}

function double(ele) {
  return ele * 2;
}

module.exports = map_to_even;
