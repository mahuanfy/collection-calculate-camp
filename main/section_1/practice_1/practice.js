function collect_same_elements(collection_a, collection_b) {
  const isInclude = function (element) {
    return collection_b.includes(element);
  }
  return collection_a.filter(isInclude);
}

module.exports = collect_same_elements;
