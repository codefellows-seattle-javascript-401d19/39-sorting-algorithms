'use strict';

let quickSort = require('../quicksort');
let smarterArray = require('../smarter-array');



describe('Generate an array of N random integers', () => {
	test('Generate an empty array', () => {
		// console.log(quickSort(smarterArray(0)));
	});
	test('Generate a single element array', () => {
		expect(smarterArray(1)).toHaveLength(1);
		
	});
	test('Generate a small array', () => {
		expect(smarterArray(10)).toHaveLength(10);
	});
	test('Generate a medium array', () => {
		expect(smarterArray(100)).toHaveLength(100);
	});
	test('Generate a large array array', () => {
		expect(smarterArray(1000)).toHaveLength(1000);
	});
});


describe('QuickSort with Insertion', () => {
	test('Quicksort takes in array and toggles between insertion and quicksort helper function', () => {
		let emptyArray = smarterArray();
		expect(quickSort(emptyArray)).toHaveLength(0);
		expect(quickSort(emptyArray)).toEqual([]);
	});
	test('Quicksort takes in array and toggles between insertion and quicksort helper function', () => {
		let singularArray = smarterArray(1);
		expect(quickSort(singularArray)).toHaveLength(1);
		expect(quickSort(singularArray)).toEqual(expect.arrayContaining(singularArray));
	});
		test('Quicksort takes in array and toggles between insertion and quicksort helper function', () => {
			let smallArray = smarterArray(9);
			expect(quickSort(smallArray)).toHaveLength(9);
			expect(quickSort(smallArray)).toEqual(expect.arrayContaining(smallArray));
		});
	test('Quicksort takes in array and toggles between insertion and quicksort helper function', () => {
		let mediumArray = smarterArray(40);
		expect(quickSort(mediumArray)).toHaveLength(40);
		expect(quickSort(mediumArray)).toEqual(expect.arrayContaining(mediumArray));
	});
	// test('Quicksort takes in array and toggles between insertion and quicksort helper function', () => {
	// 	let largeArray = smarterArray(10000);
	// 	expect(quickSort(largeArray)).toHaveLength(10000);
	// 	expect(quickSort(largeArray)).toEqual(expect.arrayContaining(largeArray));
	// });
});