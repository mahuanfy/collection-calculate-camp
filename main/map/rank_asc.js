'use strict';
var rank_asc = function (collection) {
  return collection.sort(rankDesc);
};

function rankDesc(a, b) {
  return b - a;
}

module.exports = rank_asc;
