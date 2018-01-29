'use strict';

const mergeSort = require('../lib/merge-sort');
const validate = require('./validate-sorted');

describe('testing mergeSort for correct functionality', () => {

  describe('basic tests', () => {
    test('testing that mergeSort returns empty array if passed in', () => {
      expect(mergeSort([])).toEqual([]);
    });
    test('testing that mergeSort returns one value if passed in', () => {
      expect(mergeSort([9])).toEqual([9]);
    });
    test('testing that mergeSort returns simple sorted arrays', () => {
      expect(mergeSort([9, 1, 8, 2, 7, 3, 6, 4, 5])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
    test('mergeSort should sort arrays that have repeat values', () => {
      expect(mergeSort([9, 3, 2, 4, 5, 3, 2, 2, 2, 1])).toEqual([1, 2, 2, 2, 2, 3, 3, 4, 5, 9]);
    });
    test('expect mergeSort to sort array of only repeating values', () => {
      expect(mergeSort([2, 2, 2, 2, 2, 2, 2])).toEqual([2, 2, 2, 2, 2, 2, 2]);
    });
  });

  describe('random tests', () => {
    test('testing tiny length array of a small range of values', () => {
      const testArray = validate.randomArray(10, 3);
      expect(validate.isSorted(mergeSort(testArray))).toEqual(true);
    });
    test('testing tiny length array of a medium range of values', () => {
      const testArray = validate.randomArray(10, 10);
      expect(validate.isSorted(mergeSort(testArray))).toEqual(true);
    });
    test('testing small length array of a small range of values', () => {
      const testArray = validate.randomArray(20, 3);
      expect(validate.isSorted(mergeSort(testArray))).toEqual(true);
    });
    test('testing medium length array of a small range of values', () => {
      const testArray = validate.randomArray(100, 20);
      expect(validate.isSorted(mergeSort(testArray))).toEqual(true);
    });
    test('testing medium length array of a large range of values', () => {
      const testArray = validate.randomArray(100, 1000);
      expect(validate.isSorted(mergeSort(testArray))).toEqual(true);
    });
    test('testing large length array of a small range of values', () => {
      const testArray = validate.randomArray(10000, 100);
      expect(validate.isSorted(mergeSort(testArray))).toEqual(true);
    });
    test('testing large length array of a large range of values', () => {
      const testArray = validate.randomArray(10000, 100000);
      expect(validate.isSorted(mergeSort(testArray))).toEqual(true);
    });
  });
});