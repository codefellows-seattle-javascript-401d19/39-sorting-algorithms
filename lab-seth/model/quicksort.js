'use strict'

const quickSort = items => {
  _quickSortHelper(items, 0, items.length - 1)
}

const _quickSortHelper = (items, leftIndex, rightIndex) => {
  if(rightIndex > leftIndex){
    let partitionIndex = _partion(items, leftIndex, rightIndex)

    _quickSortHelper(items, leftIndex, partitionIndex - 1)
    _quickSortHelper(items, partitionIndex + 1, rightIndex)
  }
}

const _partion = (items, leftIndex, rightIndex) => {
  let pivotIndex = rightIndex
  let firstHighIndex = leftIndex
  

  for(let i = leftIndex; i < rightIndex; i++){
    // compare Arr[1] with the pivot
    if(items[i] < items[pivotIndex]){
      // we must swap
      _swap(items, i, firstHighIndex)
      firstHighIndex++
    }
  }
  _swap(items, pivotIndex, firstHighIndex)
  return firstHighIndex
}

const _swap = (items, indexA, indexB) => {
  // let helper = items[indexA]
  // items[indexA] = items[indexB]
  // items[indexB] = helper
  // [items[j], items[j + 1]] = [items[j + 1], items[j]];
  [items[indexA], items[indexB]] = [items[indexB], items[indexA]];
}

module.exports = quickSort