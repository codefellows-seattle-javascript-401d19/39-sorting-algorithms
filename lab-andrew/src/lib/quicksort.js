'use strict';

const insertionSort = require('./insertion-sort');

const quickSort = items => {
  if (items.length < 13){
    return insertionSort(items);
  }
  return _quickSort(items);
};

const _quickSort = items => {
  
  if (items.length <= 1) return items;

  const pivot = items[items.length - 1];
  let pivotIndex = items.length - 1;

  let firstHighIndex = pivotIndex;

  for (let i = 0; i < pivotIndex; i++){
    if (items[i] < pivot){
      if (i > firstHighIndex){
        _swap(items, i, firstHighIndex);
        firstHighIndex++;
      }
    }
    if (items[i] > pivot){
      if (i < firstHighIndex){
        firstHighIndex = i;
      }
    }
    if (items[i] === pivot){
      items.splice(pivotIndex, 0, ...items.splice(i, 1));
      pivotIndex--;
      i--;
    } 
  }

  if (pivotIndex === 0) return items;

  const leftSide = [];
  if (firstHighIndex > 0){
    leftSide.push(..._quickSort(items.slice(0, firstHighIndex)));
  }

  const rightSide = [];
  if (firstHighIndex !== pivotIndex){
    rightSide.push(..._quickSort(items.slice(firstHighIndex, pivotIndex)));
  }

  return [...leftSide, ...items.slice(pivotIndex, items.length), ...rightSide];
};

const _swap = (items, indexA, indexB) => {
  let helper = items[indexA];
  items[indexA] = items[indexB];
  items[indexB] = helper;
};

module.exports = quickSort;