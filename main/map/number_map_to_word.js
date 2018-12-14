'use strict';
var number_map_to_word = function (collection) {
  return collection.map(numberToWord);
};

function numberToWord(number) {
  let code = 97 + number - 1;
  return String.fromCharCode(code);
}

module.exports = number_map_to_word;
