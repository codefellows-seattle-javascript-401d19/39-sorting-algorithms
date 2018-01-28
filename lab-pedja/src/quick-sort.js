'use-strict';

// class code for quick sort

const quickSort = items => {
  _quickSort(items, 0, items.length - 1);
};

const _quickSort = (items, leftIndex, rightIndex) => {
  if(rightIndex > leftIndex){
    let partitionIndex = _partition(items, leftIndex, rightIndex);
    
  _quickSort(items, leftIndex, partitionIndex - 1);
  _quickSort(items, partitionIndex + 1, rightIndex);
  }
};

const _partition = (items, leftIndex, rightIndex) => {
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
  let temp = items[indexA];
  items[indexA] = items[indexB];
  items[indexB] = temp;
};

module.exports = quickSort;

