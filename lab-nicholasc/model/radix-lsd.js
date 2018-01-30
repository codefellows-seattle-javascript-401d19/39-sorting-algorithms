'use strict';

let testArray = [5, 4, 3, 2, 1, 11, 15, 17, 55, 100, 99];

const radixSort = (arr, base) => {
  let buckets = [...Array(base)];
  for( let i = 0; i < base; i++){
    buckets[i]= [];
  }
  let maxDigits = 3;
  let count = 0;

  while (count < maxDigits) {
    _copyToArray();
    for (let i = 0; i <   ; i++) {
      var tenIndex = Math.pow(10, count);
      var remNumber = parseInt(numbers[i] / tenIndex, 10);
      var bucketIndex = remNumber % 10;
      buckets[bucketIndex].push(numbers[i]);
    }
    count ++;
  }
};


module.exports = radixSort;
