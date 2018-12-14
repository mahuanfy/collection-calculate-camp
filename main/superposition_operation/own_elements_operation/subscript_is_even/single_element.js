'use strict';
var single_element = function (collection) {
  let numEvenArr = collectNumEvenEle(collection);
  return numEvenArr.filter(isSingleElement);
};

function isSingleElement(element, index, array) {
  return array.indexOf(element) === index && array.lastIndexOf(element) === index;
}

function collectNumEvenEle(collection) {
  return collection.filter(isNumEven);
}
function isNumEven(element, index) {
  if ((index + 1) % 2 == 0) {
    return element;
  }
}
module.exports = single_element;
