'use strict';

const quickSort = items => {
  return _quickSortHelper(items, 0, items.length - 1);
};


const _quickSortHelper = (items, leftIndex, rightIndex) => {
  if(rightIndex > leftIndex){
    let partitionIndex = _partition(items, leftIndex, rightIndex);

    _quickSortHelper(items, leftIndex, partitionIndex - 1);
    _quickSortHelper(items, partitionIndex + 1, rightIndex);
  }

  return items;
};

const _partition= (items, leftIndex, rightIndex) => {
  let pivotIndex = rightIndex;
  let firstHighIndex = leftIndex;

  for(let i = leftIndex; i < rightIndex; i++){
    if(items[i] < items[pivotIndex]){
      _swap(items, i, firstHighIndex);
      firstHighIndex++;
    }
  }

  _swap(items, pivotIndex, firstHighIndex);
  return firstHighIndex;
};

const _swap = (items, indexA, indexB) => {
  let helper = items[indexA];
  items[indexA] = items[indexB];
  items[indexB] = helper;
};

module.exports = quickSort;
