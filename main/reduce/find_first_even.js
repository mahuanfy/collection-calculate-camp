'use strict';

function find_first_even(collection) {
  return collection.find(even);
}

function even(num) {
  return num % 2 == 0;
}

module.exports = find_first_even;

