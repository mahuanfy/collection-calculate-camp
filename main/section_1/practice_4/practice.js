function collect_same_elements(collection_a, object_b) {
  let keyArr = collection_a.reduce(takeOutKeyValue, []);
  let collection = object_b.value;
  return collectSame(keyArr, collection);
}

function takeOutKeyValue(acc, obj) {
  acc.push(obj.key);
  return acc;
}

function collectSame(collection_a, collection_b) {
  const isInclude = function (element) {
    return collection_b.includes(element);
  }
  return collection_a.filter(isInclude);
}

module.exports = collect_same_elements;
