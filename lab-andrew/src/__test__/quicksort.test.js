'use strict';

const quickSort = require('../lib/quicksort');
const validate = require('./validate-sorted');

describe('testing validator works correctly', () => {
  test('testing that unsorted array returns false', () => {
    expect(validate.isSorted([1,0,3,2])).toEqual(false);
  });
  test('testing that sorted array returns true', () => {
    expect(validate.isSorted([0,1,2,3])).toEqual(true);
  });
});

describe('testing quickSort for correct functionality', () => {

  describe('basic tests', () => {
    test('testing that quicksort returns empty array if passed in', () => {
      expect(quickSort([])).toEqual([]);
    });
    test('testing that quicksort returns one value if passed in', () => {
      expect(quickSort([9])).toEqual([9]);
    });
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

  describe('random tests', () => {
    test('testing tiny length array of a small range of values', () => {
      const testArray = validate.randomArray(10, 3);
      expect(validate.isSorted(quickSort(testArray))).toEqual(true);
    });
    test('testing tiny length array of a medium range of values', () => {
      const testArray = validate.randomArray(10, 10);
      expect(validate.isSorted(quickSort(testArray))).toEqual(true);
    });
    test('testing small length array of a small range of values', () => {
      const testArray = validate.randomArray(20, 3);
      expect(validate.isSorted(quickSort(testArray))).toEqual(true);
    });
    test('testing medium length array of a small range of values', () => {
      const testArray = validate.randomArray(100, 20);
      expect(validate.isSorted(quickSort(testArray))).toEqual(true);
    });
    test('testing medium length array of a large range of values', () => {
      const testArray = validate.randomArray(100, 1000);
      expect(validate.isSorted(quickSort(testArray))).toEqual(true);
    });
    test('testing large length array of a small range of values', () => {
      const testArray = validate.randomArray(10000, 100);
      expect(validate.isSorted(quickSort(testArray))).toEqual(true);
    });
    test('testing large length array of a large range of values', () => {
      const testArray = validate.randomArray(10000, 100000);
      expect(validate.isSorted(quickSort(testArray))).toEqual(true);
    });
  });
});