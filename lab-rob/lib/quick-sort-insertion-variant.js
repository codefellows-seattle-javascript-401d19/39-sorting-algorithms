'use strict';

const _insertionSort = (items, leftIndex, rightIndex) => {
  for(let i = leftIndex + 1; i < rightIndex + 1; i++) {
    for(let j = i; j > leftIndex; j--) {
      if(items[j] < items[j - 1]) {
        [items[j], items[j - 1]] = [items[j - 1], items[j]];  
      } else
        break;
    }
  }
};

const _quickSortHelper = (items, leftIndex, rightIndex) => {
  if(rightIndex - leftIndex + 1 < 10) {
    _insertionSort(items, leftIndex, rightIndex);
  } else {
    let partitionIndex = _partition(items, leftIndex, rightIndex);

    _quickSortHelper(items, leftIndex, partitionIndex - 1);
    _quickSortHelper(items, partitionIndex + 1, rightIndex);
  }
};

const _swap = (items, a, b) => {
  [items[a], items[b]] = [items[b], items[a]];
};

const _partition = (items, leftIndex, rightIndex) => {
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