'use strict';

function grouping_count(collection) {
  return collection.reduce(countedElements, {});
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

module.exports = grouping_count;
