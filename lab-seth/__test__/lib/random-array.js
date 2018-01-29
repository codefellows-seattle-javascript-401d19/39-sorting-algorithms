'use strict'
const makeRandomArray = (arrayLength) => {

  const plusOrMinus = () =>{
    return Math.random() < .5 ? -1: 1
  }

  let array = [];
  let elementLength = Math.floor((Math.random() * 10))

  for(let i = 0; i < arrayLength; i++){
    array.push(plusOrMinus()*(Math.floor(Math.pow(Math.random()*10, elementLength))))
  }
  return array
}

module.exports = makeRandomArray