'use strict';

const arr = [0, 1, 2, 3, 4, 5, 6];

const reverseArr = function() {
  const reversedArr = [];
  let counter = 0;
  for(let i = arr.length-1; i >= 0; i--) {
    reversedArr[counter] = arr[i];
    counter++;
  }
  return reversedArr;
};

reverseArr();