'use strict';
var calculate_average = function (collection) {
  let evenSubArr = collectNumEvenEle(collection);
  return evenSubArr.reduce(sumArr) / evenSubArr.length;
};

function collectNumEvenEle(collection) {
  return collection.filter(isNumEven);
}
function isNumEven(element, index) {
  if ((index + 1) % 2 == 0) {
    return element;
  }
}

function sumArr(accumulator, currentValue) {
  return accumulator + currentValue;
}

module.exports = calculate_average;
