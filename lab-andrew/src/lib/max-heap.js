'use strict';

class maxHeap {
  constructor(){
    this._data = [];
  }

  insert(value){
    this._data.push(value);
    this._bubbleUp(this._data.length - 1);
  }

  _bubbleUp(index) {
    if (!index)
      return;

    let parentIndex = this._parentIndex(index);

    if (this._data[parentIndex] < this._data[index]) {
      this._swap(parentIndex, index);
      this._bubbleUp(parentIndex);
    }
  }

  _parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  _swap(i, j) {
    let temp = this._data[i];

    this._data[i] = this._data[j];
    this._data[j] = temp;
  }

  extractMaximum() {
    let max = this._data[0];
    let lastValue = this._data.pop();
    if (this._data.length){
      this._data[0] = lastValue;
      this._bubbleDown(0);
    }
    return max;
  }

  _leftChildIndex(index) {
    return (2 * index) + 1;
  }

  _rightChildIndex(index) {
    return (2 * index) + 2;
  }

  _bubbleDown(index) {
    let maxIndex = index;
    let leftIndex = this._leftChildIndex(index);
    let rightIndex = this._rightChildIndex(index);

    if (leftIndex <= this._data.length - 1) {
      if (this._data[maxIndex] < this._data[leftIndex])
        maxIndex = leftIndex;
    }
    if (rightIndex <= this._data.length - 1) {
      if (this._data[maxIndex] < this._data[rightIndex])
        maxIndex = rightIndex;
    }

    if (maxIndex !== index) {
      this._swap(index, maxIndex);
      this._bubbleDown(maxIndex);
    }
  }
}

module.exports = maxHeap;