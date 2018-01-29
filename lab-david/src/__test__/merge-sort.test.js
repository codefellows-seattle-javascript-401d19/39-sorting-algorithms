'use strict';

const mergeSort = require('../merge-sort');

const _generateArray = (length, max) => {
  let array = [...new Array(length)].map(() => Math.round(Math.random() * max));
  return array; 
}

// test for empty array, single element array, small array, medium array, and array of 1,000 to 10,000 items

describe('merge sort', () => {
  test('merge sort should throw an error if input is not an array', () => {
    expect(() => {mergeSort(stringValue)}).toThrow();
  });

  test('merge sort should return an empty array if array is empty ', () => {
    expect(([]) => {mergeSort(stringValue)}).toEqual([]); 
  });

  test('merge sort should return an empty array if array is empty ', () => {
    expect(([]) => {mergeSort(stringValue)}).toEqual([]); 
  });

  test('merge sort should return single element if array is single element ', () => {
    let testArray = [1];
    mergeSort(testArray);
    expect(testArray).toEqual(testArray); 
  });

  test('merge sort should sort on small sorted array ', () => {
    let testArray = [1, 3];
    mergeSort(testArray);
    expect(testArray).toEqual(testArray); 
  });

  test('merge sort should sort on medium sorted array ', () => {
    let testArray = _generateArray(3, 10);
    mergeSort(testArray);
    expect(testArray).toEqual(testArray); 
  });

  test('merge sort should sort on huge sorted array ', () => {
    let testArray = _generateArray(1000, 5000);
    mergeSort(testArray);
    expect(testArray).toEqual(testArray); 
  });

  
});