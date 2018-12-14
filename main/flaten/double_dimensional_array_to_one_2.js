'use strict';

function double_to_one(collection) {
  let oneDimension = collection.reduce(toConcatArr, []);
  return choose_no_repeat_number(oneDimension);
}

function toConcatArr(accumulator, currentValue) {
  return accumulator.concat(currentValue);
}

function choose_no_repeat_number(collection) {
  return collection.filter(noRepeat);
}

function noRepeat(element, index, array) {
  return array.indexOf(element) === index;
}

module.exports = double_to_one;
