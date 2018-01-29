'use strict';

let smarterArray = require('./smarter-array');

class MaxHeap {
	constructor() { 
		this._data = [ 
			[smarterArray()], 
			[smarterArray(1)], 
			[smarterArray(Math.floor(Math.random() * 10))], 
			[smarterArray(Math.floor(Math.random() * 100))], 
			[smarterArray(Math.floor(Math.random() * 1000))]
	];
	}

	_getParentIndex(index) {
		if (index === 0)
			return null;

		return Math.floor((index - 1) / 2);
	}

	_getLeftIndex(index) {
		return (2 * index) + 1;
	}

	_getRightIndex(index) {
		return (2 * index) + 2;
	}

	insert(value) {
		if (typeof value !== 'number')
			throw new TypeError('__ERROR__ value should be integer');

		this._data.push(value);
		this._bubbleUp(this._data.length - 1);
	}

	_swapValues(indexA, indexB) {
		let tempSwapValue = this._data[indexA];

		this._data[indexA] = this._data[indexB];
		this._data[indexB] = tempSwapValue;
	}

	_bubbleUp(index) {
		if (this._getParentIndex(index) === null)
			return;

		let parentIndex = this._getParentIndex(index);

		if (this._data[parentIndex] < this._data[index]) {
			this._swapValues(parentIndex, index);
			this._bubbleUp(parentIndex);
		}
	}

	heapSort() {

		if (this._data.length <= 0) {
			throw 'Array must contain at least one number';
		}

		if (this._data === null) {
			throw 'Array must not be null';
		}

		this._generateHeap();

		for (let i = this._data.length - 1; i > 0; i--) {
			this._swapValues(i, 0);
			this._generateMaxHeap(0, i);
		}
		return this._data;
	}

	_generateMaxHeap(index, length) {

		while (this._data) {

			let leftIndex = this._getLeftIndex(index);
			let rightIndex = this._getRightIndex(index);
			let largest = index;

			if (leftIndex < length && this._data[leftIndex] > this._data[largest]) {
				largest = leftIndex;
			}
			if (rightIndex < length && this._data[rightIndex] > this._data[largest]) {
				largest = rightIndex;
			}
			if (index === largest) {
				break;
			}
			this._swapValues(index, largest);
			index = largest;
		}
	}

	_generateHeap() {
		for (let i = Math.floor(this._data.length / 2 - 1); i >= 0; i--) {
			this._generateMaxHeap(i, this._data.length);
		}
		
	}
};

module.exports = MaxHeap;