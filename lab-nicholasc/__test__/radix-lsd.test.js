'use strict';

const radixSort = require('../model/radix-lsd');

describe('radixSort', () => {
  let testArray = [5, 4, 3, 2, 1, 11, 15, 17, 55, 100, 99];
  let sortedArray = [1, 2, 3, 4, 5, 11, 15, 17, 55, 99, 100];

  test('should return array properly sorted', () => {
    expect(radixSort(testArray, 10)).toEqual(sortedArray);
  });
});
