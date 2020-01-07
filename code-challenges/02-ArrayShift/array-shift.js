'use strict';

const arr = [1, 2, 3, 5, 6];

const val = 4;

const insertShiftArray = (arr, val) => {
  const newArr = [];
  let i = 0;
  const x = Math.ceil(arr.length/2);
  while(i < x) {
    newArr[i] = arr[i];
    i++;
  }
  newArr[i] = val;
  i++;
  while(i <= arr.length) {
    newArr[i] = arr[i-1];
    i++;
  }
  return newArr;
};

insertShiftArray(arr, val);