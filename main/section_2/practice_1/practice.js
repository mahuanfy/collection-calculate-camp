function count_same_elements(collection) {
  let countsArr = grouping_count(collection);
  return countsArr.map(formatObj);
}

function formatObj(arr) {
  let formattedObj = {};
  formattedObj.key = arr[0];
  formattedObj.count = arr[1];
  return formattedObj;
}

function grouping_count(collection) {
  let obj = collection.reduce(countedElements, {});
  return Object.entries(obj);
}

function countedElements(allElements, ele) {
  if (ele in allElements) {
    allElements[ele]++;
  }
  else {
    allElements[ele] = 1;
  }
  return allElements;
}

module.exports = count_same_elements;
