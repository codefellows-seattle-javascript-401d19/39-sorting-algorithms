'use strict';

const maxHeap = require('./max-heap');

const heapSort = list => {
  if(!Array.isArray(list))
    throw new TypeError('input has to be an array');

  for(let value of list){
    if(typeof value !== 'number')
      throw new TypeError('input array has contain only integers');
  } 

  if(list.length < 2)
    return list;
    
  const maximumHeap = new maxHeap();

  while(list.length) {
    maximumHeap.insert(list.pop());
  }
  while(maximumHeap._data.length) {
    list.unshift(maximumHeap.extractMaximum());
  }

  return list;
};

module.exports = heapSort;