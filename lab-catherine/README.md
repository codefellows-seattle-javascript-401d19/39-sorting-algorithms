# Code Fellows: Seattle 401 JavaScript - 401d19

## Lab 39: Sorting Algorithms

### Author: 
Catherine Looper

### Motivation

### Build

#### Mutate Merge Sort's Input Array

The Merge Sort method accepts an array of items to be sorted. In this implementation, the input array is mutated and returned as a sorted array using a divide and conquer approach. The input array is divided into two arrays (split at the middle point). The values in each array are compared and sorted and ultimately pushed back together into the final sorted array. The Big O of time for this sort method is O(n log(n)) and Big O of space is O(log(n)).

```
  test('testing that mergeSort returns a sorted array', () => {
      let arrayToSort = [8, 1, 5, 7, 4, 9, 2, 3, 6];
      expect(mergeSort(arrayToSort)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
```

#### Heap Sort

The Heap Sort method accepts an array of items to be sorted. This method also relies on a Max Heap to perform `insert()` and `extractMaximum()` functions. The Heap Sort inserts all of the values into the maximumHeap while removing them from the array. Once all items in the array have been inserted, then each value is removed from the heap using the `extractMaximum()` method and using, `unshift`, are re-inserted back into the beginning of the array. The Big O of time for this sort method is O(n log(n)) and Big O of space is O(log(n)) where n is the height of the heap.

```
   test('testing that heapSort returns a sorted array', () => {
      let arrayToSort = [8, 1, 5, 7, 4, 9, 2, 3, 6];
      expect(heapSort(arrayToSort)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
```

#### Test Functions

In this project, I implemented a test helper function that allows the project to be tested using a random array generator and a validate array method. To use the test helper function, it simply must be required in at the top of the test file:

```const testFunction = require('./test-function');```

The test function:

```
'use strict';

const testFunction = module.exports = {};

testFunction.generateRandomArray = (length, max) => {
  return [...new Array(length)]
    .map(() => Math.round(Math.random() * max));
};

testFunction.validateArray = (array) => {
  for(let i = 0; i < array.length - 1; i++) {
    if(array[i] < array[i + 1])
      return true;
  }
};
```

An example of a test:

```
 test('testing that large array will be sorted', () => {
      let arrayToSort = testFunction.generateRandomArray(10000, 10000);
      let arrayToValidate = testFunction.validateArray(heapSort(arrayToSort));
      expect(arrayToValidate).toEqual(true);
    });
  });
```

### Limitations

To use this app - it is assumed that the user has familiarity with the tech and frameworks listed below.

### Code Style

Standard JavaScript with ES6.

### Tech/Framework Used

* eslint
* jest

### How to use?

* Step 1. Fork and Clone the Repository.
* Step 2. `npm install`
* Step 3. To test this application: `npm run test`


### Credits

* Code Fellows

### License

MIT © Catherine Looper

