'use strict';
const createArray = require('./lib/create-arrays');
const mergeSort = require('../lib/merge-sort');

describe('merge-sort.js', () => {
  test('empty array returns an empty array', () => {
    let empty = createArray.empty();
    expect(empty.length).toEqual(0);

    mergeSort(empty);
    expect(empty).toEqual([]);

    createArray.testMinToMax(empty);
  });

  test('single element array returns single element array', () => {
    let single = createArray.single();
    expect(single.length).toEqual(1);

    mergeSort(single);
    expect(single.length).toEqual(1);

    createArray.testMinToMax(single);
  });

  test('SMALL array is sorted from minimum to maximum', () => {
    let small = createArray.small();
    expect(small.length).toEqual(20);

    expect(() => {
      createArray.testMinToMax(small);
    }).toThrow();
    
    mergeSort(small);
    expect(small.length).toEqual(20);
    
    createArray.testMinToMax(small);
  });

  test('MEDIUM array is sorted from minimum to maximum', () => {
    let medium = createArray.medium();
    expect(medium.length).toEqual(500);

    expect(() => {
      createArray.testMinToMax(medium);
    }).toThrow();

    mergeSort(medium);
    expect(medium.length).toEqual(500);

    createArray.testMinToMax(medium);
  });

  test('LARGE array is sorted from minimum to maximum', () => {
    let large = createArray.large();
    expect(large.length).toEqual(10000);

    expect(() => {
      createArray.testMinToMax(large);
    }).toThrow();

    mergeSort(large);
    expect(large.length).toEqual(10000);

    createArray.testMinToMax(large);
  });

  test('EXTRA-LARGE array is sorted from minimum to maximum', () => {
    let extraLarge = createArray.extraLarge();
    expect(extraLarge.length).toEqual(100000);

    expect(() => {
      createArray.testMinToMax(extraLarge);
    }).toThrow();

    mergeSort(extraLarge);
    expect(extraLarge.length).toEqual(100000);

    createArray.testMinToMax(extraLarge);
  });
});