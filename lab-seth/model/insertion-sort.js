'use strict';

const insertionSort = (array) => {
  if (typeof array !== 'object') throw new TypeError('__ERROR__ Input must be an array')

  for (let i = 1; i < array.length; i++){
    let temp = array[i];
    let j;
    for(j = i; j > 0; j--){
      if(array[j - 1] < temp) break;
      array[j] = array[j - 1];
    }
    array[j] = temp;
  }
  return array;
}

module.exports = insertionSort;