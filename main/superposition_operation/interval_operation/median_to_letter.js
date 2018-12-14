'use strict';

function median_to_letter(collection) {
  let code = Math.ceil(calculateMedian(collection));
  return codeToLetter(code);
}

function calculateMedian(collection) {
  let medianLeftSub = Math.floor((collection.length - 1) / 2);
  let medianRightSub = Math.ceil((collection.length - 1) / 2);
  let doubleMedian = collection[medianLeftSub] + collection[medianRightSub];
  return doubleMedian / 2;
}

function codeToLetter(code) {
  if (code > 26) {
    let firstCode = Math.floor((code - 1) / 26) - 1 + 97;
    let secondCode = (code - 1) % 26 + 97;
    return String.fromCharCode(firstCode, secondCode);
  } else {
    return String.fromCharCode(97 + code - 1);
  }
}

module.exports = median_to_letter;
