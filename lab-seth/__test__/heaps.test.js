const MaxHeap = require('../model/max-heap');
const MinHeap = require('../model/min-heap');

const mockMaxHeapFactory = () => {
  let mockMaxHeap = new MaxHeap();
  mockMaxHeap.insert(10);
  mockMaxHeap.insert(1);
  mockMaxHeap.insert(90);
  mockMaxHeap.insert(50);
  mockMaxHeap.insert(13);
  mockMaxHeap.insert(7);

  return mockMaxHeap;
}

const mockMinHeapFactory = () => {
  let mockMinHeap = new MinHeap();
  mockMinHeap.insert(10);
  mockMinHeap.insert(1);
  mockMinHeap.insert(90);
  mockMinHeap.insert(50);
  mockMinHeap.insert(13);
  mockMinHeap.insert(7);

  return mockMinHeap;
}

describe('Max Heap', () => {
  test('Proper creation of Max Heap class and one insertion()', () => {
    const mockMaxHeap = new MaxHeap();
    expect(mockMaxHeap._data).toEqual([]);

    mockMaxHeap.insert(4);
    expect(mockMaxHeap._data).toEqual([4]);
  });

  test('Proper insertion of a single value, multiple times', () => {
    const mockMaxHeap = new MaxHeap();

    mockMaxHeap.insert(4);
    mockMaxHeap.insert(10);
    mockMaxHeap.insert(3);
    mockMaxHeap.insert(15);
    mockMaxHeap.insert(20);
    mockMaxHeap.insert(0);

    expect(mockMaxHeap._data).toEqual([20,15,3,4,10,0]);
  });

  test('Method Insert() should throw error if value is not numeric', () => {
    const mockMaxHeap = new MaxHeap();

    expect(() => {
      mockMaxHeap.insert('4');
    }).toThrow();
  });

  test('extractMax should return the maximum value of the max-heap and modify the array so it is still a max-heap', () => {
    let mockMaxHeap = mockMaxHeapFactory();
    expect(mockMaxHeap._data).toEqual([90,50,10,1,13,7]);

    expect(mockMaxHeap.extractMaximum()).toEqual(90);
    expect(mockMaxHeap._data).toEqual([50,13,10,1,7])
  });

  test('Method extractMaximum() should return null if heap is empty', () => {
    const mockMaxHeap = new MaxHeap();

    expect(mockMaxHeap.extractMaximum()).toEqual(null);
  });

  test('Method Peek() should return Maximum value which is also the root value', () => {
    let mockMaxHeap = mockMaxHeapFactory();
    expect(mockMaxHeap._data).toEqual([90, 50, 10, 1, 13, 7]);

    expect(mockMaxHeap.peek()).toEqual(90);
  });

  test('Method Peek() should return null if heap is empty', () => {
    const mockMaxHeap = new MaxHeap();

    expect(mockMaxHeap.peek()).toEqual(null);
  });
});

describe('Min Heap', () => {
  test('Proper creation of Min Heap class and one insertion()', () => {
    const mockMinHeap = new MinHeap();
    expect(mockMinHeap._data).toEqual([]);

    mockMinHeap.insert(4);
    expect(mockMinHeap._data).toEqual([4]);
  });

  test('Proper insertion of a single value, multiple times', () => {
    const mockMinHeap = new MinHeap();

    mockMinHeap.insert(4);
    mockMinHeap.insert(10);
    mockMinHeap.insert(3);
    mockMinHeap.insert(15);
    mockMinHeap.insert(20);
    mockMinHeap.insert(0);

    expect(mockMinHeap._data).toEqual([0,10,3,15,20,4]);
  });

  test('Method Insert() should throw error if value is not numeric', () => {
    const mockMinHeap = new MinHeap();

    expect(() => {
      mockMinHeap.insert('4');
    }).toThrow();
  });

  test('Method extractMinimum() should return the minimum value of the max-heap and modify the array so it is still a min-heap', () => {
    let mockMinHeap = mockMinHeapFactory();
    expect(mockMinHeap._data).toEqual([1,10,7,50,13,90]);

    expect(mockMinHeap.extractMinimum()).toEqual(1);
    expect(mockMinHeap._data).toEqual([7,10,90,50,13])
  });

  test('Method extractMinimum() should return null if heap is empty', () => {
    const mockMinHeap = new MinHeap();

    expect(mockMinHeap.extractMinimum()).toEqual(null);
  });

  test('Method Peek() should return Minimum value which is also the root value', () => {
    let mockMinHeap = mockMinHeapFactory();
    expect(mockMinHeap._data).toEqual([1, 10, 7, 50, 13, 90]);

    expect(mockMinHeap.peek()).toEqual(1);
  });

  test('Method Peek() should return null if heap is empty', () => {
    const mockMinHeap = new MinHeap();

    expect(mockMinHeap.peek()).toEqual(null);
  });
});
