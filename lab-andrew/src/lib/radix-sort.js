'use strict';

const radixSort = items => {
  const largestItem = Math.max(...items);
  let divisor = 1;
  while (divisor < largestItem){
    const buckets = Array(10).fill(null).map(() => []);
    for (let num of items){
      const significantDigit = num % (divisor * 10);
      const bucketIndex = Math.floor(significantDigit / divisor);
      buckets[bucketIndex].push(num);
    }
    items = buckets.reduce(((acc, e) => acc.concat(e)), []);
    divisor *= 10;
  }
  return items;
};

module.exports = radixSort;