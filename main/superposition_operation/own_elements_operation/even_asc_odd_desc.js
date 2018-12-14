'use strict';

var even_asc_odd_desc = function (collection) {
  let evenArr = choose_even(collection);
  let oddArr = choose_odd(collection);
  evenArr = rank_asc(evenArr);
  oddArr = rank_desc(oddArr);
  return evenArr.concat(oddArr);
};

function choose_even(collection) {
  return collection.filter(isEven);
}

function isEven(element) {
  return element % 2 == 0;
}

function choose_odd(collection) {
  return collection.filter(isOdd);
}

function isOdd(element) {
  return element % 2 !== 0;
}

function rank_asc(collection) {
  return collection.sort(rankAsc);
};

function rankAsc(a, b) {
  return a - b;
}

function rank_desc(collection) {
  return collection.sort(rankDesc);
};

function rankDesc(a, b) {
  return b - a;
}

module.exports = even_asc_odd_desc;
