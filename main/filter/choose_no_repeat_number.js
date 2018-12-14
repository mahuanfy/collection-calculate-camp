'use strict';

function choose_no_repeat_number(collection) {
  return collection.filter(noRepeat);
}

function noRepeat(element, index, array) {
  return array.indexOf(element) === index;
}

module.exports = choose_no_repeat_number;
