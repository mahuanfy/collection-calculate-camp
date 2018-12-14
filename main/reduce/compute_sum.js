'use strict';

function calculate_elements_sum(collection) {
  return collection.reduce(sumArr);
}

function sumArr(accumulator, currentValue) {
  return accumulator + currentValue;
}

module.exports = calculate_elements_sum;

