'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  const isDivisible = function (eleInA) {
    return collection_b.some(function divisible(eleInB) {
      return eleInA % eleInB === 0;
    });
  }
  return collection_a.filter(isDivisible);
}



module.exports = choose_divisible_integer;
