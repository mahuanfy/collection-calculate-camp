function collect_same_elements(collection_a, object_b) {
  let collection_b = object_b.value;
  return collectSame(collection_a, collection_b);
}

function collectSame(collection_a, collection_b) {
  const isInclude = function (element) {
    return collection_b.includes(element);
  }
  return collection_a.filter(isInclude);
}

module.exports = collect_same_elements;