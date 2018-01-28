'use strict'
const makeRandomArray = () => {

  const sign = () =>{
    return Math.random() > .5 ? -1: 1
  }

  let array = [];
  let arrayLength = Math.floor(Math.random() * 100)
  let elementLength = Math.floor((Math.random() * 10))
  
  for(let i = 0; i < arrayLength; i++){
    array.push(sign()*(Math.floor(Math.pow(Math.random()*10, elementLength))))
  }

  console.log(sign)
  console.log(arrayLength)
  console.log(elementLength)
  console.log(array)
  return array
}

module.exports = makeRandomArray