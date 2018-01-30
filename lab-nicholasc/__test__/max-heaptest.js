'use strict';

const MaxHeap = require('../model/max-heap');

describe('MaxHeap', () => {
  let staticTestHeap = new MaxHeap();
  staticTestHeap.insert(1);
  staticTestHeap.insert(2);
  staticTestHeap.insert(3);
  staticTestHeap.insert(4);
  staticTestHeap.insert(5);
  staticTestHeap.insert(6);
  staticTestHeap.insert(7);
  staticTestHeap.insert(8);
  staticTestHeap.insert(9);

  describe('insert', () => {
    test('inserts values', () =>{
      let testHeap = new MaxHeap();
      testHeap.insert(1);
      testHeap.insert(2);
      testHeap.insert(3);
      expect(testHeap._data).toEqual([3, 1, 2]);
      testHeap.insert(9);
      expect(testHeap._data).toEqual([9, 3, 2, 1]);
      testHeap.insert(8);
      expect(testHeap._data).toEqual([9, 8, 2, 1, 3]);
    });
    test('insert NaN throws', () => {
      let testHeap = new MaxHeap();
      expect(() => testHeap.insert('five')).toThrow();
      expect(() => testHeap.insert([1])).toThrow();
    });
  });

  test('_getParentIndex', () => {
    expect(staticTestHeap._getParentIndex(1)).toEqual(0);
    expect(staticTestHeap._getParentIndex(5)).toEqual(2);
    expect(staticTestHeap._getParentIndex(0)).toEqual(null);
  });

  test('_getLeftIndex', () => {
    expect(staticTestHeap._getLeftIndex(1)).toEqual(3);
    expect(staticTestHeap._getLeftIndex(3)).toEqual(7);
  });

  test('_getRightIndex', () => {
    expect(staticTestHeap._getRightIndex(1)).toEqual(4);
    expect(staticTestHeap._getRightIndex(3)).toEqual(8);
  });

  describe('peek', () => {

    test('peek on valid heap', () => {
      expect(staticTestHeap.peek()).toEqual(9);
    });
    test('peek on empty heap', () => {
      let emptyHeap = new MaxHeap();
      expect(emptyHeap.peek()).toEqual(null);
    });
  });

  describe('extractMaximum', () => {
    test('should extract the minimum if valid heap', () => {
      let testHeap = new MaxHeap();
      testHeap.insert(1);
      testHeap.insert(2);
      testHeap.insert(3);
      testHeap.insert(9);
      testHeap.insert(8);
      testHeap.insert(6);
      testHeap.insert(5);
      testHeap.insert(4);
      testHeap.insert(7);
      expect(testHeap.extractMaximum()).toEqual(9);
      expect(testHeap.extractMaximum()).toEqual(8);
      expect(testHeap.extractMaximum()).toEqual(7);
      expect(testHeap.extractMaximum()).toEqual(6);
      expect(testHeap.extractMaximum()).toEqual(5);
      expect(testHeap.extractMaximum()).toEqual(4);
      expect(testHeap.extractMaximum()).toEqual(3);
      expect(testHeap.extractMaximum()).toEqual(2);
      expect(testHeap.extractMaximum()).toEqual(1);
    });

    test('should return null if empty data', () => {
      let emptyHeap = new MaxHeap();
      expect(emptyHeap.extractMaximum()).toEqual(null);
    });
  });

});
