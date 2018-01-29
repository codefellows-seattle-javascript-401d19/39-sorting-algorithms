'use strict';

// create 2 algorithms : stable quick sort & radix sort

//-------------------------------------------------------------
// QUICK SORT
//-------------------------------------------------------------

const quickSort = items => {
  _quickSortHelper(items, 0, items.length - 1);
};

const _quicksortHelper = (items, leftIndex, rightIndex) => {
  if(rightIndex > leftIndex){
    let partitionIndex = _partition(items, leftIndex, rightIndex);

    _quicksortHelper(items, leftIndex, partitionIndex - 1);
    _quicksortHelper(items, partitionIndex + 1, rightIndx);
  }
};

const _partition = (items, leftIndex, rightIndex) => {
  let pivotIndex = rightIndex;
  let firstHighIndex = leftIndex;

  for (let i = leftIndex; i < rightIndex; i++){
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
