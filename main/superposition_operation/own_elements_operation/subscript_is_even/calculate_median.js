'use strict';
var calculate_median = function (collection) {
  let evenSubArr = collectNumEvenEle(collection);
  return calculateMedian(evenSubArr);
};

function collectNumEvenEle(collection) {
  return collection.filter(isNumEven);
}
function isNumEven(element, index) {
  if ((index + 1) % 2 == 0) {
    return element;
  }
}

function calculateMedian(collection) {
  let medianLeftSub = Math.floor((collection.length - 1) / 2);
  let medianRightSub = Math.ceil((collection.length - 1) / 2);
  let doubleMedian = collection[medianLeftSub] + collection[medianRightSub];
  return doubleMedian / 2;
}
module.exports = calculate_median;
