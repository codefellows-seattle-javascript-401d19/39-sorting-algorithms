'use strict';
const largeArray = require('./large-array');
const sortedLargeArray = require('./sorted-large-array');
const quickSort = require('./quick-sort');

let testArray = [5, 1, 8, 3, 9, 230, -1, -53, 2];
let sortedArray = [-53, -1, 1, 2, 3, 5, 8, 9, 230];

// // console.log(sortedLargeArray);

// // ===========================================================
// const quickSort = (array) => {
//   if (array.length < 2) {
//     return;
//   }
//   let half = Math.floor((array.length - 1) / 2);
//   let pivot;
  


//   // if ()

// };

// // ===========================================================





// let arr = [2, 3, 5, 2, 1, 6, 2, 5, 5];
// persistOrder(arr);

// console.log(arr);





// function persistOrder(array) {
  //   array.forEach((each, i, arr) => {
    //     arr[i] = { value: each, priority: i};
    //   });
    // }
    
    // ===========================================================
quickSort(testArray);
console.log(testArray);
    
quickSort(largeArray);
// console.log(largeArray);
    
largeArray.forEach((each, i, arr) => {
  if (each > arr[i + 1]) throw new Error('bad mojo');
});