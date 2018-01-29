'use strict';

const mergeSort = items => {
  if(items.length < 2)
    return items;

  if(items.length === 2)  
    return items[0] < items[1] ? items : items.reverse();

  let pivot = Math.floor(items.length / 2);
  let leftSide = items.slice(0, pivot);
  let rightSide = items.slice(pivot);

  const _merge = (rightSide, leftSide) => {
    let output = [];
    while (leftSide.length && rightSide.length) {
      leftSide[0] < rightSide[0] ? output.push(leftSide.shift()) : output.push(rightSide.shift());
    }
    return output.concat(leftSide).concat(rightSide);
  }

  return _merge(mergeSort(leftSide), mergeSort(rightSide));
}

module.exports = mergeSort;