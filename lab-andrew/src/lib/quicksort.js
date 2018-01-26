'use strict';

// 9, 1, 5, 8, 2, 7, 3, 6, 4, 5
const quickSort = items => {
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
      items.push(...items.splice(i, 1));
      pivotIndex--;
      // firstHighIndex--;
      i--;
    } 
  }
  if (pivotIndex === 0) return items;
  const leftSide = [];
  if (firstHighIndex > 0){
    leftSide.push(...quickSort(items.slice(0, firstHighIndex)));
  }
  const rightSide = [];
  if (firstHighIndex !== pivotIndex){
    rightSide.push(...quickSort(items.slice(firstHighIndex, pivotIndex)));
  }
  return [...leftSide, ...items.slice(pivotIndex, items.length), ...rightSide];
};

// const quickSort = items => {
//   _quickSortHelper(items, 0, items.length - 1);
// };

// const _quickSortHelper = (items, leftIndex, rightIndex) => {
//   if (rightIndex > leftIndex) {
//     let partitionIndex = _partition(items, leftIndex, rightIndex);

//     _quickSortHelper(items, leftIndex, partitionIndex - 1);
//     _quickSortHelper(items, partitionIndex + 1, rightIndex);
//   }
// };

// const _partition = (items, leftIndex, rightIndex) => {
//   let pivotIndex = rightIndex;
//   let firstHighIndex = leftIndex;

//   for (let i = leftIndex; i < rightIndex; i++) {
//     if (items[i] < items[pivotIndex]) {
//       _swap(items, i, firstHighIndex);
//       firstHighIndex++;
//     }
//   }
//   _swap(items, pivotIndex, firstHighIndex);
//   return firstHighIndex;
// };

const _swap = (items, indexA, indexB) => {
  let helper = items[indexA];
  items[indexA] = items[indexB];
  items[indexB] = helper;
};

module.exports = quickSort;