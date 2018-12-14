'use strict';

function hybrid_operation_to_uneven(collection) {
  let oddArr = collect_all_odd(collection);
  let newArr = oddArr.map(triplePlusFive);
  return newArr.reduce(sumArr);
}

function collect_all_odd(collection) {
  return collection.filter(isOdd);
}

function isOdd(element) {
  return element % 2 !== 0;
}

function triplePlusFive(num) {
  return num * 3 + 5;
}

function sumArr(accumulator, currentValue) {
  return accumulator + currentValue;
}

module.exports = hybrid_operation_to_uneven;

