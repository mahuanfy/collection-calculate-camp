'use strict';

function get_union(collection_a, collection_b) {
  const notInclude = function (element) {
    return !collection_a.includes(element);
  }
  let complementary = collection_b.filter(notInclude);
  return collection_a.concat(complementary);
}

module.exports = get_union;

