const selectionSort = require('../model/selection-sort');
const insertionSort = require('../model/insertion-sort');
const bubbleSort = require('../model/bubble-sort');

describe('Selection Sort', () => {
  test('Should sort any array from smallest to largest', () => {

    expect(selectionSort([1, 6, 3, 9, 1, 3, 9, 10, 50])).toEqual([1,1,3,3,6,9,9,10,50])
    expect(selectionSort([50, 49, 33, 99, 1, 6, 7, 8, 51])).toEqual([1,6,7,8,33,49,50,51,99])
  })

  test('Should throw error if data is not an object', () => {
    expect(() => {selectionSort('string');}).toThrow();
  });
});

describe('Insertion Sort', () => {
  test('Should sort any array from smallest to largest', () => {

    expect(insertionSort([1, 6, 3, 9, 1, 3, 9, 10, 50])).toEqual([1, 1, 3, 3, 6, 9, 9, 10, 50])
    expect(insertionSort([50, 49, 33, 99, 1, 6, 7, 8, 51])).toEqual([1, 6, 7, 8, 33, 49, 50, 51, 99])
  })

  test('Should throw error if data is not an object', () => {
    expect(() => { insertionSort('string'); }).toThrow();
  });
});

describe('Bubble Sort', () => {
  test('Should sort any array from smallest to largest', () => {

    expect(bubbleSort([50, 49, 33, 99, 1, 6, 7, 8, 51])).toEqual([1, 6, 7, 8, 33, 49, 50, 51, 99])
    expect(bubbleSort([1, 6, 3, 9, 1, 3, 9, 10, 50])).toEqual([1, 1, 3, 3, 6, 9, 9, 10, 50])
  })

  test('Should throw error if data is not an object', () => {
    expect(() => { bubbleSort('string'); }).toThrow();
  });
});