'use strict';
var is_exist_element = function (collection, element) {
  let evenSubArr = collect_all_even_subscript(collection);
  return evenSubArr.includes(element);
};

function collect_all_even_subscript(collection) {
  return collection.filter(subscriptIsEven);
}

function subscriptIsEven(element, index) {
  if (index % 2 == 0) {
    return element;
  }
}

module.exports = is_exist_element;
