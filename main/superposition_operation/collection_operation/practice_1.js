'use strict';

function hybrid_operation(collection) {
  let newArr = collection.map(triplePlusTwo);
  return newArr.reduce(sumArr);
}

function triplePlusTwo(num) {
  return num * 3 + 2;
}

function sumArr(accumulator, currentValue) {
  return accumulator + currentValue;
}

module.exports = hybrid_operation;

