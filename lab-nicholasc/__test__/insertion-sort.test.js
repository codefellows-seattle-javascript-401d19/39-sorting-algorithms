'use strict';

const insertionSort = require('../model/insertion-sort');

describe('insertionSort', () => {
  let testArray = [9, 8, 5, 6, 3, 1, 4, 7, 2];
  let sortedTestArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];



  test('basic sort', () => {
    expect(insertionSort(testArray)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test('sorted in place', () => {
    expect(insertionSort(sortedTestArray)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test('not an array', () => {
    expect(() => insertionSort('')).toThrow();
  });
});
