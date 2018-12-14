'use strict';
function rank_by_two_large_one_small(collection) {
  let ascArr = rank_asc(collection);
  return ascArr.reduce(rankBytwoLargeOneSmall, []);
}

function rankBytwoLargeOneSmall(acc, currentValue, index, array) {
  let silceArr = []
  if (index % 3 == 0) {
    silceArr = array.slice(index, index + 3);
  }
  if (silceArr.length == 3) {
    silceArr.shift();
    silceArr.push(currentValue);
  }
  return acc.concat(silceArr);
}

function rank_asc(collection) {
  return collection.sort(rankAsc);
};

function rankAsc(a, b) {
  return a - b;
}

module.exports = rank_by_two_large_one_small;
