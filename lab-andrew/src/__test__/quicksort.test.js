'use strict';

const quickSort = require('../lib/quicksort');

describe('testing quickSort for correct functionality', () => {
  test('testing that quicksort returns simple sorted arrays', () => {
    expect(quickSort([9,1,8,2,7,3,6,4,5])).toEqual([1,2,3,4,5,6,7,8,9]);
  });
  test('quicksort should sort arrays that have repeat values', () => {
    expect(quickSort([9,3,2,4,5,3,2,2,2,1])).toEqual([1,2,2,2,2,3,3,4,5,9]);
  });
  test('expect quicksort to sort array of only repeating values', () => {
    expect(quickSort([2,2,2,2,2,2,2])).toEqual([2,2,2,2,2,2,2]);
  });
});