'use strict';

const insertionSort = array => {
  let temp = null;
  for (let index in array){
    for (let i = index; i > 0; i--){
      if (array[i] < array[i - 1]){
        temp = array[i];
        array[i] = array[i - 1];
        array[i - 1] = temp;
      } else {
        break;
      }
    }
  }
  return array;
};

module.exports = insertionSort;