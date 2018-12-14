'use strict';

function choose_even(collection) {
  return collection.filter(function (element) {
    return element % 2 == 0;
  });
}

module.exports = choose_even;
