// const mergeSort = require('./mergesort');
const quickSort = require('./quicksort');
const MaxHeap = require('./max-heap');
// const mergeSort = require('./mergesort');

let numericArray = [3,4,6,8,3,8,10,23,29,12,5,9];
let moBiggaArray = [3, 9, 10, 18, 13, 18, 10, 23, 29, 15, 100, 124, 543, 79];
// console.log('prior to sort', numericArray);
quickSort(numericArray);
// console.log(quickSort(moBiggaArray));

// console.log(numericArray);
// console.log(mergeSort(numericArray));
// console.log(numericArray);

// console.log('merge sort', mergeSortArray);
// console.log('quick sort', numericArray);

let smarterArray = (int) => {
	return Array.from({length: int}, () => Math.floor(Math.random() * 100));
}
// console.log(smarterArray(4));

let Heap = new MaxHeap();
let array = smarterArray(10);

console.log(Heap.heapSort());




