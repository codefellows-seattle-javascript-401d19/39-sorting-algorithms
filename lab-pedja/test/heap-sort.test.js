'use strict';
const heapSort = require('../src/heap-sort');

const _generateArray = (length, max) => {
  let result = [...new Array(length)].map(() => Math.round(Math.random() * max));
  return result;
}

describe('heap-sort', () => {
  test('Heap-sort should throw an error if input is not an array', () => {
    expect(() => {heapSort(stringValue)}).toThrow();
  });

  test('Heap-sort should return empty array if empty array is input', () => {
    let emptyArray = [];
    expect(heapSort(emptyArray)).toEqual([]);
  });

  test('Heap-sort should return an item if input array has only one item', () => {
    let singleItemArr = [5];
    expect(heapSort(singleItemArr)).toEqual([5]);
  });

  test('heap-sort should throw an error if input array contains anything else except integers', () => {
    let numAndStringArr = [5, 2, 'test'];
    expect(() => heapSort(numAndStringArr)).toThrow();
  });

  test('Heap-sort should return sorted array if input array has random generated numbers', () => {
    let numberArray = _generateArray(5,200);
    console.log('Before heap sorting: ', numberArray);
    
    let numArr = numberArray
    expect(heapSort(numberArray)).toEqual(numArr);
    console.log('Before heap sorting: ', numArr);
  });
});