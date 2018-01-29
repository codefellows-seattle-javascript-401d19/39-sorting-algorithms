'use strict'
//naive implementation
const mergeSort = items => {
  let output = [] //not ideal here...

  if( items.length < 2) return items

  if(items.length === 2)
    return items[0] < items[1] ? items : items.reverse()

  let middle = Math.floor(items.length / 2)
  
  let leftSide = mergeSort(items.slice(0, middle))
  let rightSide = mergeSort(items.slice(middle))

  while(leftSide.length || rightSide.length){
    //if only elements on left side 
    if(leftSide.length && !rightSide.length){
      output.push(...leftSide)
      // output = output.concat(leftSide)
      break  
    }

    //if only elements on right side
    if(!leftSide.length && rightSide.length) {
      output.push(...rightSide)
      // output = output.concat(rightSide)
      break  
    }

    //elements on both sides
    if(leftSide[0] <= rightSide[0])
      output.push(leftSide.shift())
    else
      output.push(rightSide.shift())
  }

  return output
}

module.exports = mergeSort