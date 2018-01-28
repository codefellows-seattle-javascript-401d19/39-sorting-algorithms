'use strict';

import * as helpers from './lib/test-helpers';
import stableQuickSort from '../lib/stable-quick-sort';

describe('stable-quick-sort.js', () => {
  let min = null, max = null;

  beforeEach(() => {
    min = helpers.randInt(-1000, 1000);
    max = helpers.randInt(-1000, 1000);
  });

  test('Should return an empty array if an empty array is provided', () => {
    let myArry = [];
    stableQuickSort(myArry);

    expect(myArry).toEqual([]);
  });
  
  test('Should return the same array if the array is provided', () => {
    let myArry = helpers.randIntArray(1);
    stableQuickSort(myArry);

    expect(myArry).toEqual(myArry);
  });
  
  test('Should return a sorted array for a small array', () => {
    let size = helpers.randInt(5, 15);
    
    let myArry = helpers.randIntArray(size, min, max);

    expect(helpers.assertSorted(myArry)).toBeFalsy();
    
    stableQuickSort(myArry);

    expect(helpers.assertSorted(myArry)).toBeTruthy();
  });
});