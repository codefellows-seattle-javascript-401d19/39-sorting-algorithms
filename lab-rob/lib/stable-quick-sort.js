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

// add a decimal index to each value, ie [-4, -4, 5] -> [-3.9, -3.8, 2.1]
const _markDuplicates = array => {
  let maxMap = {};
  let currentMap = {};

  // figure out the number of duplicates for each integer
  for(let num of array) {
    if(maxMap[num])
      maxMap[num]++;
    else
      maxMap[num] = 1;
  }

  // actually mark each integer
  for(let i = 0; i < array.length; i++) {
    let value = array[i];

    if(currentMap[value]) {
      currentMap[value]++;
    } else
      currentMap[value] = 1;
    
    // divisor ensures that we modify the integer by less than 1
    let divisor = Math.pow(10, `${maxMap[value]}`.length);
    array[i] += currentMap[value] / divisor;
  }
};

// Remove the decimal marker from each value, ie [-3.9, -3.8, 5.1] -> [-4, -4, 5]
const _removeMarks = array => {
  for(let i = 0; i < array.length; i++)
    array[i] = Math.floor(array[i]);
};

export default (array) => {
  _markDuplicates(array);
  _quickSortHelper(array, 0, array.length - 1);
  _removeMarks(array);
};