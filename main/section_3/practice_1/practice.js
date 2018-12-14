function create_updated_collection(collection_a, object_b) {
  let valueArr = object_b.value;
  const findSameAndMinusOne = function (obj) {
    if (valueArr.includes(obj.key)) {
      obj.count -= 1;
    }
    return obj;
  }
  return collection_a.map(findSameAndMinusOne);
}

module.exports = create_updated_collection;
