'use strict';

function spilt_to_zero(number, interval) {
  let splitArr = [number];
  do {
    number = (number * 10 - interval * 10) / 10;
    splitArr.push(number);
  } while (number > 0);
  return splitArr;
}

module.exports = spilt_to_zero;
