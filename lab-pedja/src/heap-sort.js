'use strict'

const heapSort = items => {
  if(!Array.isArray(items))
    throw new TypeError('input has to be an array');

  for(let value of items){
    if(typeof value !== 'number')
      throw new TypeError('input array has contain only integers');
  } 

  if(items.length < 2)
    return items;

  _buildHeap(items);
  for(let i = items.length - 1; i >= 1; i--){
    _swap(items, 0, i)
    _heapify(items, 0, i)
  }
  return items;
};

const _buildHeap = items => {
  let middle = Math.floor(items.length / 2) - 1;
  for(let i = middle; i >= 0; i--){
    _heapify(items, i, items.length)
  };
};

const _heapify = (items,idx,max) => {
  let left = 2 * idx + 1,
      right = 2 * idx + 2,
      largest;
  largest = left < max && items[left] > items[idx] ? left : idx;
  largest = right < max && items[right] > items[largest] ? right : largest;
  if(largest !== idx){
    _swap(items, largest, idx)
    _heapify(items, largest, max)
  }
}

const _swap = (items, first, second) => {
  let temp = items[first];
  items[first] = items[second];
  items[second] = temp;
};

module.exports = heapSort;