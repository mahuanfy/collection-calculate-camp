'use strict';

function get_letter_interval_2(number_a, number_b) {
  let codeArray = get_integer_interval(number_a, number_b)
  return codeArray.map(codeToLetter);
}

function codeToLetter(code) {
  if (code > 26) {
    let firstCode = Math.floor((code - 1) / 26) - 1 + 97;
    let secondCode = (code - 1) % 26 + 97;
    return String.fromCharCode(firstCode, secondCode);
  } else {
    return String.fromCharCode(97 + code - 1);
  }
}

function get_integer_interval(number_a, number_b) {
  let leftInterval = Math.min(number_a, number_b);
  let rightInterval = Math.max(number_a, number_b);
  let integerArray = getIntervalArr(leftInterval, rightInterval);
  if (number_a > number_b) {
    integerArray.reverse();
  }
  return integerArray;
}

function getIntervalArr(leftInterval, rightInterval) {
  let integerArray = [];
  for (leftInterval; leftInterval <= rightInterval; leftInterval++) {
    integerArray.push(leftInterval);
  }
  return integerArray;
}

module.exports = get_letter_interval_2;

