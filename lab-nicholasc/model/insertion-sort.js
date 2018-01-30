'use strict';

const insertionSort = function(array) {
  if(typeof array !== 'object'){
    throw new TypeError('input must be an array');
  }
  for(let i = 0; i < array.length; i++){
    let insertion = array[i];
    let comparisonInd = i - 1;

    while(comparisonInd >= 0 && insertion < array[comparisonInd]){
      array[comparisonInd + 1] = array[comparisonInd];
      comparisonInd --;
    }
    comparisonInd++;
    array[comparisonInd] = insertion;
  }
  return array;
};

module.exports = insertionSort;
