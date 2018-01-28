![cf](https://i.imgur.com/7v5ASc8.png) Sorting Algorithms - radix and heap sort
======

* Purpose of this lab is to practice implementation of radix and heap sort algorithm.


## Code Style
* Javascript ES6 and Jest for testing


## Tech / framework used

* [npm package jest](http://facebook.github.io/jest/) used for TDD
* [npm package eslint](https://www.npmjs.com/package/eslint) used as a JS linter


## Installation and How To Use

  * Fork || clone this repo to you computer.

  * Run `npm install`

  * To run tests run `npm test` command.


## Heap sort

> Heap sort is a **comparison** based sorting technique based on Binary Heap data structure. It is similar to selection sort where we first find the maximum element and place the maximum element at the end. We repeat the same process for remaining integers. These are the heap sort steps:

1. Build a max heap from the input data and removing the data from the input array. 
2. At this point, the largest item is stored at the root of the heap. `extractMaximum` value that is on the root node and repopulate input array with that element.
3. Repeat above steps while size of heap is greater than 1.

## Radix sort

> Radix sort is a **non-comparative** integer sorting algorithm that sorts data with integer keys by grouping keys by the individual digits which share the same significant position and value. Each key is first figuratively dropped into one level of buckets corresponding to the value of the rightmost digit. This process is repeats with the next neighbouring more significant digit until there are no more digits to process.


## Licence
MIT © Pedja Josifovic
