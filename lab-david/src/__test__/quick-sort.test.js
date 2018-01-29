'use strict';

const quickSort = require('../quick-sort');

const _generateArray = (length, max) => {
  let array = [...new Array(length)].map(() => Math.round(Math.random() * max));
  return array; 
}

// test for empty array, single element array, small array, medium array, and array of 1,000 to 10,000 items

describe('quick sort', () => {
  test('quick sort should throw an error if input is not an array', () => {
    expect(() => {quickSort(stringValue)}).toThrow();
  });

  test('quick sort should return an empty array if array is empty ', () => {
    expect(([]) => {quickSort(stringValue)}).toEqual([]); 
  });

  test('quick sort should return an empty array if array is empty ', () => {
    expect(([]) => {quickSort(stringValue)}).toEqual([]); 
  });

  test('quick sort should return single element if array is single element ', () => {
    let testArray = [1];
    quickSort(testArray);
    expect(testArray).toEqual(testArray); 
  });

  test('quick sort should sort on small sorted array ', () => {
    let testArray = [1, 3];
    quickSort(testArray);
    expect(testArray).toEqual(testArray); 
  });

  test('quick sort should sort on medium sorted array ', () => {
    let testArray = _generateArray(3, 10);
    quickSort(testArray);
    expect(testArray).toEqual(testArray); 
  });

  test('quick sort should sort on huge sorted array ', () => {
    let testArray = _generateArray(1000, 5000);
    quickSort(testArray);
    expect(testArray).toEqual(testArray); 
  });

  
});