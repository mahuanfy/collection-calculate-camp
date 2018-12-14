'use strict';
var number_map_to_word_over_26 = function (collection) {
  return collection.map(numberToWordOver_26);
};

function numberToWordOver_26(number) {
  if (number > 26) {
    let firstCode = Math.floor((number - 1) / 26) - 1 + 97;
    let secondCode = (number - 1) % 26 + 97;
    return String.fromCharCode(firstCode, secondCode);
  } else {
    return String.fromCharCode(97 + number - 1);
  }
}
module.exports = number_map_to_word_over_26;
