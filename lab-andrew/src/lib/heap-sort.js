'use strict';

const maxHeap = require('./max-heap');

module.exports = items => {
  const heap = new maxHeap();
  while (items.length){
    heap.insert(items.pop());
  }
  while (heap._data.length){
    items.unshift(heap.extractMaximum());
  }
  return items;
};