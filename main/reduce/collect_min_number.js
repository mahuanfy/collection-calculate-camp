'use strict';

function collect_min_number(collection) {
  return collection.reduce(minNumber);
}

function minNumber(min, current) {
  return Math.min(min, current);
}

module.exports = collect_min_number;

