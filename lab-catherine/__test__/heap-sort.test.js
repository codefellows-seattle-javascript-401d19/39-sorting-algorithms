'use strict';

const heapSort = require('../src/heap-sort');
const testFunction = require('./test-function');


describe('testing heap-sort.js', () => {

  describe('testing that heapSort is functioning properly', () => {
    test('testing that heapSort returns a sorted array', () => {
      let arrayToSort = [8, 1, 5, 7, 4, 9, 2, 3, 6];
      expect(heapSort(arrayToSort)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    test('testing that heapSort returns a sorted array even when there are duplicate values in the array', () => {
      let arrayToSort = [8, 8, 1, 5, 5, 7, 4, 9, 2, 3, 6];
      expect(heapSort(arrayToSort)).toEqual([1, 2, 3, 4, 5, 5, 6, 7, 8, 8, 9]);
    });

    test('testing that heapSort will return an array with one value if one value is passed in', () => {
      let arrayToSort = [8];
      expect(heapSort(arrayToSort)).toEqual([8]);
    });

    test('testing that heapSort will return an empty array if the array is empty', () => {
      let arrayToSort = [];
      expect(heapSort(arrayToSort)).toEqual([]);
    });

    test('testing that heapSort will return the correct order with multi-digit integers', () => {
      let arrayToSort = [8, 1, 25, 7, 11, 9, 2, 3, 6, 10];
      expect(heapSort(arrayToSort)).toEqual([1, 2, 3, 6, 7, 8, 9, 10, 11, 25]);
    });
  });

  describe('testing random arrays', () => {
    test('testing that small array will be sorted', () => {
      let arrayToSort = testFunction.generateRandomArray(8, 3);
      let arrayToValidate = testFunction.validateArray(heapSort(arrayToSort));
      expect(arrayToValidate).toEqual(true);
    });

    test('testing that medium array will be sorted', () => {
      let arrayToSort = testFunction.generateRandomArray(100, 100);
      let arrayToValidate = testFunction.validateArray(heapSort(arrayToSort));
      expect(arrayToValidate).toEqual(true);
    });
    
    test('testing that large array will be sorted', () => {
      let arrayToSort = testFunction.generateRandomArray(10000, 10000);
      let arrayToValidate = testFunction.validateArray(heapSort(arrayToSort));
      expect(arrayToValidate).toEqual(true);
    });
 
  });
});