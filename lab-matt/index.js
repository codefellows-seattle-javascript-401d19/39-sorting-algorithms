// 'use strict';
// const largeArray = require('./large-array');
// const sortedLargeArray = require('./sorted-large-array');

// let testArray = [5, 1, 8, 3, 9, 230, -1, -53, 2];
// // let testArray = [0, 1];
// let sortedArray = [-53, -1, 1, 2, 3, 5, 8, 9, 230];

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



// quickSort(testArray);


let arr = [2, 3, 5, 2, 1, 6, 2, 5, 5];
persistOrder(arr);

console.log(arr);





function persistOrder(array) {
  array.forEach((each, i, arr) => {
    arr[i] = { value: each, priority: i};
  });
}