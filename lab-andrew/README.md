# Lab 39 Sorting Algorithms

## Overview

This is a model of of a stable quicksort algorithm.
***
## Getting Started

Basic understanding of git and npm is assumed. Clone down the repo and navigate to the directory. Install by running `npm i`. If you wish to use these modules, simply copy the desired module's file into your project and require it into the script in which you would like to use it. For example:

```const quicksort = require('./lib/priority-queue')```

To run tests to check functionality, do an

```npm run test```

The quicksort method can be called on any array of numbers `quicksort(`<`array`>`)`. 
***
## Modules

The modules being exported are the quicksort method and the mergesort. Each of these modules takes an array of numbers as input, and return that array in sorted order.
***
### Quicksort:

The quicksort method will take an array of numbers and return the sorted array using a divide and conquer scheme, resulting in an average runtime of O(n*log(n)). The worst case will be 0(n^2), which will occur when the array is already in order or ordereded in reverse (i.e. [5, 4, 3, 2, 1]). The big O of space will be O(n), as the array is being copied with the slice method. 

The quicksort works by comparing each value to a reference (in this case the last value in the array) and swapping all the values smaller than this value to the left side of the first value found that is larger than the reference. If a value is equal, it is moved next to the reference value. The quicksort method is then recursively called on each of the subsections of the array, and the resulting sorted segments are reassembled according to order from lowest to highest.

### Mergesort:

The mergesort method will take an array of numbers and return the sorted array, it also uses a divide and conquer scheme. The runtime will always be O(n*log(n)). It works by splitting the array into two smaller arrays down the middle, recursively performs mergesort on each of those smaller arrays, and then compares each of the values in the two sorted arrays and merges them back into one sorted array. The space complexity will be O(log(n)), which is the size of the recursive call stack.

### Heapsort:

The heapsort method takes an array of numbers and returns the sorted array, however, it does not use the divide and conquer scheme, although it does keep a O(n*log(n)) runtime. It works by inserting each of the values in an array into a heap. Then it extracts each of the values from that heap. Based on how a heap works, the values will be extracted in order. The sort algorithm itself has a constant space big O, however, the space complexity ultimately depends on the implementation of the heap that it depends on. The heap in this case has a space complexity of O(log(n)) which corresponds to the height of the heap, as this will be the max number of recursive calls in the call stack.


***
## Code Examples:

```javascript
const quickSort = require('./lib/quicksort');

quickSort([3, 4, 6, 3, 2]); // [2, 3, 3, 4, 6];
quickSort([1, 2, 3, 3, 2, 3, 2, 1, 2, 2]); // [1, 1, 2, 2, 2, 2, 2, 3, 3, 3]
quickSort([2]); // [2]
quickSort([]); // []
```
***
## Technology/Credits

By Andrew Bloom. Using jest to test functionality.