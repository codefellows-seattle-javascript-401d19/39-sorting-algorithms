'use strict';
const radixSort = require('../src/radix-sort');

const _generateArray = (length, max) => {
  let result = [...new Array(length)].map(() => Math.round(Math.random() * max));
  return result;
}

describe('radix-sort', () => {
  let smallArray = [5,2];
  let stringValue = 'test';
  
  test('Radix-sort should throw an error if input is not an array', () => {
    expect(() => {radixSort(stringValue)}).toThrow();
  });
  
  test('Radix-sort should return empty array if empty array is input', () => {
    let emptyArray = [];
    expect(radixSort(emptyArray)).toEqual([]);
  });

  test('Radix-sort should return an item if input array has only one item', () => {
    let singleItemArr = [5];
    expect(radixSort(singleItemArr)).toEqual([5]);
  });

  test('Radix-sort should return sorted array if input array has only two items', () => {
    let twoItemArray = [5,2];
    expect(radixSort(twoItemArray)).toEqual([2,5]);
  });

  test('Radix-sort should throw an error if input array contains anything else except integers', () => {
    let numAndStringArr = [5, 2, 'test'];
    expect(() => radixSort(numAndStringArr)).toThrow();
  });

  test('Radix-sort should return sorted array if input array has random generated numbers', () => {
    let numberArray = _generateArray(5,200);
    let newArray = radixSort(numberArray);
    expect(radixSort(numberArray)).toEqual(newArray);
  });

  test('Radix-sort should return sorted array if input array has random generated numbers', () => {
    let numberArray = [4,2,12,41,1,23,15,76,123,1000]
    expect(radixSort(numberArray)).toEqual([1,2,4,12,15,23,41,76,123,1000]);
  });
});