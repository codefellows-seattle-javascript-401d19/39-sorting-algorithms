'use strict'

const quickSort = items => {
  _duplicateMarker(items)
  _quickSortHelper(items, 0, items.length - 1)
  _markerRemover(items)
}

const _duplicateMarker = (array) => {
  let map = {}
  let mostDuplicates = 0

  for(let i = 0; i < array.length; i++){
    let value = array[i]
    if(!map[value]){
      map[value] = 1
    }else{
      map[value] ++
    }
    array[i] = value + (map[value] / 1000000000000)
  }
}

const _markerRemover = (array) => {
  for(let i  = 0; i < array.length; i++){
    array[i] = Math.floor(array[i])
  }
}

const _findMaxDuplicates = (map) => {

  for(let i = 0; i < array.length; i++){
    if(array[i] > arrayMax)
      arrayMax = array[i]
  }
  placeValue = String(arrayMax).match(/\d/g).length //counts number of digits
  console.log('placeValue: ', placeValue)
  return placeValue
}

const _quickSortHelper = (items, leftIndex, rightIndex) => {
  if(rightIndex > leftIndex){
    let partitionIndex = _partion(items, leftIndex, rightIndex)

    _quickSortHelper(items, leftIndex, partitionIndex - 1)
    _quickSortHelper(items, partitionIndex + 1, rightIndex)
  }
}

const _partion = (items, leftIndex, rightIndex) => {
  // let pivotIndex = Math.floor(rightIndex / 2)
  let pivotIndex = rightIndex
  let firstHighIndex = leftIndex
  

  for(let i = leftIndex; i < rightIndex; i++){
    if(items[i] < items[pivotIndex]){
      _swap(items, i, firstHighIndex)
      firstHighIndex++
    }
  }
  _swap(items, pivotIndex, firstHighIndex)
  return firstHighIndex
}

const _swap = (items, indexA, indexB) => {
  [items[indexA], items[indexB]] = [items[indexB], items[indexA]];
}

module.exports = quickSort
