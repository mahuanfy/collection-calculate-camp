'use strict';

function double_to_one(collection) {
  return collection.reduce(toConcatArr, []);
}

function toConcatArr(accumulator, currentValue) {
  return accumulator.concat(currentValue);
}

module.exports = double_to_one;
