'use strict';

const testFunction = module.exports = {};

testFunction.generateRandomArray = (length, max) => {
  return [...new Array(length)]
    .map(() => Math.round(Math.random() * max));
};

testFunction.validateArray = (array) => {
  for(let i = 0; i < array.length - 1; i++) {
    if(array[i] < array[i + 1])
      return true;
  }
};