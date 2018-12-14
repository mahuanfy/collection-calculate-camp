function create_updated_collection(collection_a, object_b) {
  let valueArr = object_b.value;
  const findSameAndMinusOne = function (obj) {
    if (valueArr.includes(obj.key)) {
      obj.count -= minusOneEveryThree(obj.count);
    }
    return obj;
  }
  return collection_a.map(findSameAndMinusOne);
}

function minusOneEveryThree(num) {
  return Math.floor(num / 3);
}

module.exports = create_updated_collection;
