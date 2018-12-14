'use strict';

function average_uneven(collection) {
  let oddArr = collect_all_odd(collection);
  return oddArr.reduce(sumArr) / oddArr.length;
}

function collect_all_odd(collection) {
  return collection.filter(isOdd);
}

function isOdd(element) {
  return element % 2 !== 0;
}

function sumArr(accumulator, currentValue) {
  return accumulator + currentValue;
}

module.exports = average_uneven;
