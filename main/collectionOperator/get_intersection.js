'use strict';

function get_intersection(collection_a, collection_b) {
  return collection_b.filter(function (element) {
    return collection_a.includes(element);
  });
}

module.exports = get_intersection;
