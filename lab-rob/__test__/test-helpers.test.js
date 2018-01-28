'use strict';

import * as helpers from './lib/test-helpers';

describe('test-helpers.js', () => {
  describe('randInt(min, max)', () => {
    test('Should return a random integer between 0 and 10 when called without arguments', () => {
      let myInt = helpers.randInt();
      expect(myInt).toBeGreaterThanOrEqual(0);
      expect(myInt).toBeLessThanOrEqual(10);
    });
    
    test('If max is less than min the values will be swapped before calculating the number', () => {
      let myInt = helpers.randInt(10, 0);
      expect(myInt).toBeGreaterThanOrEqual(0);
      expect(myInt).toBeLessThanOrEqual(10);
    });
  });
  
  describe('randIntArray(num, min, max)', () => {
    test('Should return an array of 10 random integers between 0 and 10 when called without arguments', () => {
      let myIntArray = helpers.randIntArray();
      expect(Array.isArray(myIntArray)).toBeTruthy();
      expect(myIntArray.length).toEqual(10);
      myIntArray.forEach(int => {
        expect(int).toBeGreaterThanOrEqual(0);
        expect(int).toBeLessThanOrEqual(10);
      });
    });

    test('should throw if num is less than 0', () => {
      expect(() => helpers.randIntArray(-5)).toThrow();
    });
  });

  describe('assertSorted(arr)', () => {
    test('Should return true if the array is sorted.', () => {
      expect(helpers.assertSorted([1, 2, 3])).toBeTruthy();
    });
    
    test('Should return true if the array is sorted.', () => {
      expect(helpers.assertSorted([1, 2, 3, 1])).toBeFalsy();
    });
  });
});