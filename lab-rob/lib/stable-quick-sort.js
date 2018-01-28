'use strict';

const _quickSortHelper = (items, leftIndex, rightIndex) => {
  if(rightIndex > leftIndex) {
    let partitionIndex = _partition(items, leftIndex, rightIndex);

    _quickSortHelper(items, leftIndex, partitionIndex - 1);
    _quickSortHelper(items, partitionIndex + 1, rightIndex);
  }
};

const _swap = (items, a, b) => {
  [items[a], items[b]] = [items[b], items[a]];
};

const _partition = (items, leftIndex, rightIndex) => {
  // let pivotIndex = Math.floor(Math.random() * (rightIndex - leftIndex + 1)) + leftIndex;
  let pivotIndex = rightIndex;

  let firstHighIndex = leftIndex;

  for(let i = leftIndex; i < rightIndex; i++) {
    if(items[i] < items[pivotIndex]) {
      _swap(items, i, firstHighIndex);
      firstHighIndex++;
    }
  }

  _swap(items, pivotIndex, firstHighIndex);
  
  return firstHighIndex;
};

export default (array) => {
  _quickSortHelper(array, 0, array.length - 1);
};