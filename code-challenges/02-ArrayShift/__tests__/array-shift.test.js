'use strict';

let insertShiftArray = require('../array-shift.js');

describe('check for expected functionality of the insertArrayShift function', () => {
  
  it('puts the value into the middle of the new array if the input array is even', () => {
    expect(insertShiftArray([1,2,4,5], 3)).toStrictEqual([1,2,3,4,5]);
  }); 

  it('puts the value just after the middle of the new array if the input array is odd', () => {
    expect(insertShiftArray([1,2,3,5,6], 4)).toStrictEqual([1,2,3,4,5,6]);
  }); 

  it('handles an empty input array by simply adding the value to it', () => {
    expect(insertShiftArray([], 11)).toStrictEqual([11]);
  });

});
