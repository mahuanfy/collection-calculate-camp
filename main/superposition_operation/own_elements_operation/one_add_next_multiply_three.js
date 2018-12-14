'use strict';
function one_add_next_multiply_three(collection) {
  let computedArr = collection.map(addNextMultiplyThree);
  computedArr.pop();
  return computedArr;
}

function addNextMultiplyThree(currentValue, index, array) {
  if (index < array.length - 1) {
    let next = array[index + 1];
    return (currentValue + next) * 3;
  }
  return currentValue;
}

module.exports = one_add_next_multiply_three;
