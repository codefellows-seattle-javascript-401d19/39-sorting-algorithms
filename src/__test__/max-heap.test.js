'use strict';

let MaxHeap = require('../max-heap');
let smarterArray = require('../smarter-array');


let Heap = new MaxHeap();


let heapFactory = () => {
	Heap.insert(100);
	Heap.insert(19);
	Heap.insert(36);
	Heap.insert(25);
	Heap.insert(1);
	Heap.insert(17);
	Heap.insert(3);
	Heap.insert(2);
	Heap.insert(7);
	Heap.insert(32);
	Heap.insert(110);
};

describe('Testing MaxHeap \'get\' helper methods', () => {

	describe('MaxHeap _getParentIndex', () => {

		test('MaxHeap _getParentIndex should return null if MaxHeap is empty.', () => {
			Heap._data = []
			expect(Heap._getParentIndex(0)).toBeNull();
		});

		test('MaxHeap _getParentIndex should return index .', () => {
			Heap._data = []
			expect(Heap._getParentIndex(10)).toBe(4);
		});
	});

});

describe('Testing MaxHeap and its public methods', () => {
	beforeEach(() => {
		heapFactory();
	});

	afterEach(() => {
		return Heap._data = []
	});
	
	describe('MaxHeap creation/insertion', () => {
	
		test('MaxHeap should be created and abide by the rules of a MaxHeap.', () => {
			let expected = [110, 100, 36, 19, 32, 17, 3, 2, 7, 1, 25];
			expect(Heap._data).toEqual(expected);
			expect(Heap._data).toBeInstanceOf(Array);
			expect(Heap._data).toHaveLength(11);
		});

		test('Upon insertion of new greatest value, heap should reorganize to abide by the rules of a MaxHeap.', () => {
			Heap.insert(111);
			let expected = [111, 100, 110, 19, 32, 36, 3, 2, 7, 1, 25, 17];
			expect(Heap._data).toEqual(expected);
			expect(Heap._data).toBeInstanceOf(Array);
			expect(Heap._data).toHaveLength(12);
		});

		test('MaxHeap should throw error if no value passed.', () => {
			expect(() => {
				Heap.insert();
			}).toThrow();
		});
	})
});

describe('Testing Heapsort sort method', () => {
	beforeEach(() => {
		heapFactory();
	});

	afterEach(() => {
		return Heap._data = []
	});

	test('Heapsort sort should make valid heap from any array and sort resulting array from smallest to largest.', () => {
		expect(Heap.heapSort()).toEqual([1, 2, 3, 7, 17, 19, 25, 32, 36, 100, 110]);
		expect(Heap._data).toBeInstanceOf(Array);
	});
	test('Heap sort should be throw error if wrong data type passed.', () => {
		Heap._data = '';

		expect(() => {
			Heap.heapSort();
		}).toThrow();
	});
	test('Selection sort should be throw error if wrong null data passed.', () => {
		Heap._data = null;

		expect(() => {
			Heap.heapSort();
		}).toThrow();
	});
});