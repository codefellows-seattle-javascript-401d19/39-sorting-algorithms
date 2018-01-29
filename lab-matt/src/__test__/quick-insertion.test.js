'use strict';
const createArray = require('./lib/create-arrays');
const quickSort = require('../lib/quick-sort');

describe('quick-sort.js', () => {
  test('empty array returns an empty array', () => {
    let empty = createArray.empty();
    expect(empty.length).toEqual(0);

    quickSort(empty);

    expect(empty).toEqual([]);
  });

  test('single element array returns single element array', () => {
    let single = createArray.single();
    expect(single.length).toEqual(1);

    quickSort(single);
    
    expect(single.length).toEqual(1);
  });

  test('SMALL array is sorted from minimum to maximum', () => {
    let small = createArray.small();
    expect(small.length).toEqual(20);

    quickSort(small);

    expect(small.length).toEqual(20);
    small.forEach((each, i, arr) => {
      if (i === arr.length - 1) {
      expect(each >= arr[i - 1]).toBeTruthy();
      } else {
        expect(each <= arr[i + 1]).toBeTruthy();
      }
    });
  });

  test('MEDIUM array is sorted from minimum to maximum', () => {
    let medium = createArray.medium();
    expect(medium.length).toEqual(500);

    quickSort(medium);
    
    expect(medium.length).toEqual(500);
    medium.forEach((each, i, arr) => {
      if (i === arr.length - 1) {
        expect(each >= arr[i - 1]).toBeTruthy();
      } else {
        expect(each <= arr[i + 1]).toBeTruthy();
      }
    });
  });

  test('LARGE array is sorted from minimum to maximum', () => {
    let large = createArray.large();
    expect(large.length).toEqual(10000);

    quickSort(large);
    
    expect(large.length).toEqual(10000);
    large.forEach((each, i, arr) => {
      if (i === arr.length - 1) {
      expect(each >= arr[i - 1]).toBeTruthy();
      } else {
        expect(each <= arr[i + 1]).toBeTruthy();
      }
    });
  });
});