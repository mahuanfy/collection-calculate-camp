'use strict';

function even_to_letter(collection) {
  let codeArray = collect_all_even(collection);
  return codeArray.map(codeToLetter);
}

function collect_all_even(collection) {
  return collection.filter(isEven);
}

function isEven(element) {
  return element % 2 == 0;
}

function codeToLetter(code) {
  return String.fromCharCode(97 + code - 1);
}

module.exports = even_to_letter;
