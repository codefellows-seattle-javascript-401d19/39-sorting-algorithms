module.exports = function quickSort(items) {
  _quickSort(items, 0, items.length-1);
};

const _quickSort = (items, leftIndex, rightIndex) => {
  if (rightIndex - leftIndex + 1 < 10) {
    _insertionSort(items, leftIndex, rightIndex);
  } else {
    let partitionIndex = _partition(items, leftIndex, rightIndex);
    
    _quickSort(items, leftIndex, partitionIndex - 1);
    _quickSort(items, partitionIndex + 1, rightIndex);
  }
};

const _partition = (items, leftIndex, rightIndex) => {
  let pivotIndex = rightIndex;
  let firstHighIndex = leftIndex;

  for (let i = leftIndex; i < rightIndex; i ++) {
    if (items[i] < items[pivotIndex]) {
      _swap(items, i, firstHighIndex);
      firstHighIndex ++;
    }
  }

  _swap(items, pivotIndex, firstHighIndex);
  return firstHighIndex;
};

const _swap = (items, indexA, indexB) => {
  let helper = items[indexA];
  items[indexA] = items[indexB];
  items[indexB] = helper;
};

const _insertionSort = (array, leftIndex, rightIndex) => {
  for (let i = leftIndex + 1; i < rightIndex + 1; i ++) {
    let temp = array[i];
    let j = i - 1;

    while (j >= leftIndex && array[j] > temp) {
      array[j + 1] = array[j];
      j --;
    }
    array[j + 1] = temp;
  }
  return array;
};