'use strict';

function compute_median(collection) {
  let rankAscArr = rankAsc(collection);
  let medianLeftSub = Math.floor((rankAscArr.length - 1) / 2);
  let medianRightSub = Math.ceil((rankAscArr.length - 1) / 2);
  let doubleMedian = rankAscArr[medianLeftSub] + rankAscArr[medianRightSub];
  return doubleMedian / 2;
}

function rankAsc(collection) {
  return collection.sort(function (a, b) {
    return a - b;
  });
}

module.exports = compute_median;


