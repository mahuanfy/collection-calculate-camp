'use strict';

function hybrid_operation_to_uneven(collection) {
  let oddArr = collect_all_odd(collection);
  return oddArr.map(triplePlusTwo);
}

function collect_all_odd(collection) {
  return collection.filter(isOdd);
}

function isOdd(element) {
  return element % 2 !== 0;
}

function triplePlusTwo(num) {
  return num * 3 + 2;
}

module.exports = hybrid_operation_to_uneven;

