'use strict';

function collect_max_number(collection) {
  return collection.reduce(maxNumber);
}

function maxNumber(max, current) {
  return Math.max(max, current);
}

module.exports = collect_max_number;
