'use strict';
var even_group_calculate_average = function (collection) {
  let evenSubArr = collectNumEvenEle(collection);
  let evenSubEvenArr = collect_all_even(evenSubArr);
  if (evenSubEvenArr.length == 0) {
    return [0];
  } else {
    let groupArr = evenSubEvenArr.reduce(groupArray, [[], [], []]);
    let averageArray = groupArr.map(averageArrayAndRemoveEmpty, []);
    return double_to_one(averageArray);
  }
};

function averageArrayAndRemoveEmpty(eleArr) {
  if (eleArr.length !== 0) {
    let average = compute_average(eleArr);
    return average;
  }
  return eleArr;
}

function compute_average(collection) {
  return collection.reduce(sumArr) / collection.length;
}

function sumArr(accumulator, currentValue) {
  return accumulator + currentValue;
}

function groupArray(groupArr, ele) {
  let numLength = ele.toString().length;
  switch (numLength) {
    case 1:
      groupArr[0].push(ele);
      break;
    case 2:
      groupArr[1].push(ele);
      break;
    case 3:
      groupArr[2].push(ele);
      break;
  }
  return groupArr;
}

function collectNumEvenEle(collection) {
  return collection.filter(isNumEven);
}

function isNumEven(element, index) {
  if ((index + 1) % 2 == 0) {
    return element;
  }
}

function collect_all_even(collection) {
  return collection.filter(isEven);
}
function isEven(element) {
  return element % 2 == 0;
}

function double_to_one(collection) {
  return collection.reduce(toConcatArr, []);
}

function toConcatArr(accumulator, currentValue) {
  return accumulator.concat(currentValue);
}

module.exports = even_group_calculate_average;
