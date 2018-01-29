'use strict';

const MaxHeap = require('../lib/max-heap');

describe('max-heap.js', () => {
  test('insert method should throw an error if value is not a number', () => {
    const testMaxHeap = new MaxHeap();
    expect(() => {
      testMaxHeap.insert('invalidValue');
    }).toThrow();
  });

  test('testing that insert method is functioning properly and that peek returns max value', () => {
    const testMaxHeap = new MaxHeap();

    testMaxHeap.insert(6);
    expect(testMaxHeap.peek()).toEqual(6);
    testMaxHeap.insert(10);
    expect(testMaxHeap.peek()).toEqual(10);
    testMaxHeap.insert(15);
    expect(testMaxHeap.peek()).toEqual(15);
  });

  test('testing that extractMaximum method is functioning properly', () => {
    const testMaxHeap = new MaxHeap();

    testMaxHeap.insert(10);
    testMaxHeap.insert(7);
    testMaxHeap.insert(8);
    testMaxHeap.insert(5);
    testMaxHeap.insert(9);
    expect(testMaxHeap.extractMaximum()).toEqual(10);
    expect(testMaxHeap.extractMaximum()).toEqual(9);
    expect(testMaxHeap.extractMaximum()).toEqual(8);
    expect(testMaxHeap.extractMaximum()).toEqual(7);
    expect(testMaxHeap.extractMaximum()).toEqual(5);
  });
});