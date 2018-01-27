'use strict';

const radixSort = items => {
  return _radixSort(items, 1);
};

const _radixSort = (items, divisor, largestItem = Math.max(...items)) => {
  // if (largestItem === undefined){
  //   largestItem = Math.max(...items);
  // }
  if (divisor < largestItem){
    const buckets = Array(10).fill(null).map(() => []);
    for (let num of items){
      const significantDigit = (num % (divisor * 10));
      const bucketIndex = Math.floor(significantDigit / (divisor));
      buckets[bucketIndex].push(num);
    }

    items = [];

    for (let bucket of buckets){
      items.push(...bucket);
    }

    return _radixSort(items, divisor * 10, largestItem);
  }
  return items;
};

module.exports = radixSort;