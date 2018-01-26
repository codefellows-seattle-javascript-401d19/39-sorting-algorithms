'use strict';

const heapSort = require('./heap-sort');
const quickSort = require('./quick-sort-3way');
let array = [5, 10, 6, 12, 14, 18, 7];

quickSort(array);
console.log(array);
