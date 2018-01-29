'use strict';

//-------------------------------------------------------------
// MERGE SORT
//-------------------------------------------------------------

const mergeSort = (array) => {

  if(array.length < 2)
    return array;

  if(array.length === 2)
    return array[0] < array[1] ? array : array.reverse();

  let pivot = Math.floor(array.length / 2);
  let leftSide = mergeSort(array.slice(0, pivot));
  let rightSide = mergeSort(array.slice(pivot));

  while(leftSide.length || rightSide.length){
    if(leftSide.length && !rightSide.length){
      output = output.concat(leftSide);
      break;
    }
    if(!leftSide.length && rightSide.length){
      output = output.concat(rightSide);
      break;
    }
    if(leftSide[0] <= rightSide[0])
      output.push(leftSide.shift());
  }
  return array;
}

module.exports = mergeSort;