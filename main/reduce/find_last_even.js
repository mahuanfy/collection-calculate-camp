'use strict';

function find_last_even(collection) {
  return collection.reverse().find(even);
}

function even(num) {
  return num % 2 == 0;
}

module.exports = find_last_even;
