'use strict';

import * as helpers from './lib/test-helpers';
import quickSortInsertionVariant from '../lib/quick-sort-insertion-variant';

describe('stable-quick-sort.js', () => {
  let min = null, max = null;

  beforeEach(() => {
    min = helpers.randInt(-1000, 1000);
    max = helpers.randInt(min, min + 10);
  });

  test('Should return an empty array if an empty array is provided', () => {
    let myArry = [];
    quickSortInsertionVariant(myArry);

    expect(myArry).toEqual([]);
  });
  
  test('Should return the same array if the array is provided', () => {
    let myArry = helpers.randIntArray(1);
    quickSortInsertionVariant(myArry);

    expect(myArry).toEqual(myArry);
  });
  
  test('Should return a sorted array for a small array', () => {
    let size = helpers.randInt(5, 15);
    
    let myArry = helpers.randIntArray(size, min, max);
    
    quickSortInsertionVariant(myArry);
    
    expect(helpers.assertSorted(myArry)).toBeTruthy();
  });
  
  test('Should return a sorted array for a medium array', () => {
    let size = helpers.randInt(100, 999);
    
    let myArry = helpers.randIntArray(size, min, max);

    quickSortInsertionVariant(myArry);
    
    expect(helpers.assertSorted(myArry)).toBeTruthy();
  });
  
  test('Should return a sorted array for a large array', () => {
    let size = helpers.randInt(1000, 9999);
    
    let myArry = helpers.randIntArray(size, min, max);
    
    quickSortInsertionVariant(myArry);
    
    expect(helpers.assertSorted(myArry)).toBeTruthy();
  });
});