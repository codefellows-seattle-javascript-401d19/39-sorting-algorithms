'use strict';

const mergeSort = items => {

  if (items.length <= 1) {
    return items;
  }

  if (items.length === 2) {
    return items[0] < items[1] ? items : items.reverse();
  }

  let middle = Math.floor(items.length / 2);

  const leftSide = [];
  const rightSide = [];
  
  while (items.length > middle){
    rightSide.unshift(items.pop());
  }

  while (items.length){
    leftSide.unshift(items.pop());
  }

  mergeSort(leftSide);
  mergeSort(rightSide);

  while (leftSide.length || rightSide.length) {


    if (leftSide.length && !rightSide.length) {
      items.push(...leftSide);
      break;
    }
    if (!leftSide.length && rightSide.length) {
      items.push(...rightSide);
      break;
    }
  
    if (leftSide[0] <= rightSide[0]) {
      items.push(leftSide.shift());
    } else {
      items.push(rightSide.shift());
    }
  }
  return items;
};

module.exports = mergeSort;