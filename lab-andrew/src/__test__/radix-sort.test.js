'use strict';

const radixSort = require('../lib/radix-sort');
const validate = require('./validate-sorted');

describe('testing radixSort for correct functionality', () => {

  describe('basic tests', () => {
    test('testing that radixSort returns empty array if passed in', () => {
      expect(radixSort([])).toEqual([]);
    });
    test('testing that radixSort returns one value if passed in', () => {
      expect(radixSort([9])).toEqual([9]);
    });
    test('testing that radixSort returns simple sorted arrays', () => {
      expect(radixSort([9, 1, 8, 2, 7, 3, 6, 4, 5])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
    test('radixSort should sort arrays that have repeat values', () => {
      expect(radixSort([9, 3, 2, 4, 5, 3, 2, 2, 2, 1])).toEqual([1, 2, 2, 2, 2, 3, 3, 4, 5, 9]);
    });
    test('expect radixSort to sort array of only repeating values', () => {
      expect(radixSort([2, 2, 2, 2, 2, 2, 2])).toEqual([2, 2, 2, 2, 2, 2, 2]);
    });
  });

  describe('random tests', () => {
    test('testing tiny length array of a small range of values', () => {
      const testArray = validate.randomArray(10, 3);
      expect(validate.isSorted(radixSort(testArray))).toEqual(true);
    });
    test('testing tiny length array of a medium range of values', () => {
      const testArray = validate.randomArray(10, 10);
      expect(validate.isSorted(radixSort(testArray))).toEqual(true);
    });
    test('testing small length array of a small range of values', () => {
      const testArray = validate.randomArray(20, 3);
      expect(validate.isSorted(radixSort(testArray))).toEqual(true);
    });
    test('testing medium length array of a small range of values', () => {
      const testArray = validate.randomArray(100, 20);
      expect(validate.isSorted(radixSort(testArray))).toEqual(true);
    });
    test('testing medium length array of a large range of values', () => {
      const testArray = validate.randomArray(100, 1000);
      expect(validate.isSorted(radixSort(testArray))).toEqual(true);
    });
    test('testing large length array of a small range of values', () => {
      const testArray = validate.randomArray(10000, 100);
      expect(validate.isSorted(radixSort(testArray))).toEqual(true);
    });
    test('testing large length array of a large range of values', () => {
      const testArray = validate.randomArray(10000, 100000);
      expect(validate.isSorted(radixSort(testArray))).toEqual(true);
    });
  });
});