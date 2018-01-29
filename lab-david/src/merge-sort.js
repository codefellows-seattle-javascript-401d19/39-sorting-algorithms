'use strict';

//-------------------------------------------------------------
// MERGE SORT
//-------------------------------------------------------------

const mergeSort = items => {
  let output = [];

  if(items.length < 2)
    return items;

  if(items.length === 2)
    return items[0] < items[1] ? items : items.reverse();

  let pivot = Math.floor(items.length / 2);

  let leftSide = mergeSort(items.slice(0, pivot));
  let rightSide = mergeSort(items.slice(pivot));

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
  return output;
}

module.exports = mergeSort;