'use strict';

function amount_even(collection) {
  let evenArr = collect_all_even(collection);
  return evenArr.reduce(sumArr);
}

function collect_all_even(collection) {
  return collection.filter(isEven);
}
function isEven(element) {
  return element % 2 == 0;
}

function sumArr(accumulator, currentValue) {
  return accumulator + currentValue;
}


module.exports = amount_even;
