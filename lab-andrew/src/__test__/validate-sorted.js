'use strict';

const validate = module.exports = {};

validate.isSorted = array => {
  for (let i = 0; i < array.length - 1; i++){
    if (array[i] > array[i + 1]){
      return false;
    }
  }
  return true;
};

validate.randomArray = (length, max) => {
  return Array.from({length}, () => Math.floor(Math.random() * max));
};