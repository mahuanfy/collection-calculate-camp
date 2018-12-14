'use strict';

function compute_average(collection) {
  return collection.reduce(sumArr) / collection.length;
}

function sumArr(accumulator, currentValue) {
  return accumulator + currentValue;
}

module.exports = compute_average;

