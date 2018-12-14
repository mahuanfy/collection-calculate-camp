'use strict';

function average_to_letter(collection) {
  let code = Math.ceil(compute_average(collection));
  return codeToLetter(code);
}

function compute_average(collection) {
  return collection.reduce(sumArr) / collection.length;
}

function sumArr(accumulator, currentValue) {
  return accumulator + currentValue;
}

function codeToLetter(code) {
  return String.fromCharCode(97 + code - 1);
}

module.exports = average_to_letter;

