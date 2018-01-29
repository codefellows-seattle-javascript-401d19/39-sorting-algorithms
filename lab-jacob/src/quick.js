'use strict';

const quickSort = (items) => {
  _quicksortHelper(items,0,items.length - 1);
};

const _quicksortHelper = (items,leftIndex,rightIndex) => {
  if(rightIndex > leftIndex){
    let partitionIndex = _partition(items,leftIndex,rightIndex);

    _quicksortHelper(items,leftIndex,partitionIndex - 1);
    _quicksortHelper(items,partitionIndex + 1,rightIndex);
  }
};

const _partition = (items,leftIndex,rightIndex) => {
  let pivotIndex = rightIndex; 
  let firstHighIndex = leftIndex; 


  //TODO: Swap needs a conditional that prevents the swapping of duplicates 
  for (let i = leftIndex; i < rightIndex; i++){
    if(items[i] < items[pivotIndex]){
      _swap(items,i,firstHighIndex);
      firstHighIndex++;
    }
  }
  _swap(items,pivotIndex,firstHighIndex);
  return firstHighIndex;
};

const _swap = (items,indexA,indexB) => {
  let helper = items[indexA];
  items[indexA] = items[indexB];
  items[indexB] = helper;
};
let arr = [22,33,3,6,6,9,13];
console.log(quickSort(arr));
module.exports = quickSort;