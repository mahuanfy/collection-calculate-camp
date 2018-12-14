function collect_same_elements(collection_a, collection_b) {
  const oneDimensionArr = toOneDimension(collection_b);
  return collectSame(collection_a, oneDimensionArr);
}

function toOneDimension(collection) {
  return collection.reduce(toConcatArr, []);
}

function toConcatArr(accumulator, currentValue) {
  return accumulator.concat(currentValue);
}

function collectSame(collection_a, collection_b) {
  const isInclude = function (element) {
    return collection_b.includes(element);
  }
  return collection_a.filter(isInclude);
}

module.exports = collect_same_elements;
