'use strict';

const maxHeap = require('./max-heap');

const heapSort = array => {
  const maximumHeap = new maxHeap();

  while(array.length) {
    maximumHeap.insert(array.pop());
  }
  while(maximumHeap._data.length) {
    array.unshift(maximumHeap.extractMaximum());
  }

  return array;
};

module.exports = heapSort;