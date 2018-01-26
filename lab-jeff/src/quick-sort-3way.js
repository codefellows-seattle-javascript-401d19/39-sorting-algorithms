'use strict';

const quickSort = input => {
	_sort(input, 0, input.length - 1);
};

const _sort = (input, low, high) => {
	if (low >= high) return;

	let lt = low;
	let gt = high;
	let i = low + 1;
	let pivot = low;
	let pivotValue = input[pivot];

	while (i <= gt) {
		if (input[i] < pivotValue) {
			_swap(input, i++, lt++);
		} else if (pivotValue < input[i]) {
			_swap(input, i, gt--);
		} else {
			i++;
		}
	}
	_sort(input, low, lt - 1);
	_sort(input, gt + 1, high);
};

const _swap = (input, indexA, indexB) => {
	let temp = input[indexA];
	input[indexA] = input[indexB];
	input[indexB] = temp;
};
module.exports = quickSort;
