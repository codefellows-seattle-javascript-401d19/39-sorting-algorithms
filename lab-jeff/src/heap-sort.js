'use strict';

let arrayLength;

const _buildHeap = input => {
	arrayLength = input.length;

	for (let i = Math.floor(arrayLength / 2); i >= 0; i--) {
		_heapify(input, i);
	}
};

const _heapify = (input, i) => {
	let left = 2 * i + 1;
	let right = 2 * i + 2;
	let largest = i;

	if (left < arrayLength && input[left] > input[largest]) {
		largest = left;
	}

	if (right < arrayLength && input[right] > input[largest]) {
		largest = right;
	}

	if (largest !== i) {
		_swap(input, i, largest);
		_heapify(input, largest);
	}
};

const _swap = (input, indexA, indexB) => {
	let temp = input[indexA];
	input[indexA] = input[indexB];
	input[indexB] = temp;
};

const heapSort = input => {
	_buildHeap(input);

	for (let i = input.length - 1; i > 0; i--) {
		_swap(input, 0, i);
		arrayLength--;
		_heapify(input, 0);
	}
};

module.exports = heapSort;
