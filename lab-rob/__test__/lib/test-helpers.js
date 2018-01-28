'use strict';

export const randInt = (min = 0, max = min + 10) => {
  if(min > max)
    [min, max] = [max, min];
  
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const randIntArray = (num = 10, min = 0, max = min + 10) => {
  if(num < 0)
    throw new Error('<num> must be greater than or equal to 0');
  
  return new Array(num)
    .fill(0)
    .map(() => randInt(min, max));
};

export const assertSorted = arr => {
  for(let i = 0; i < arr.length - 1; i++) {
    if(arr[i] > arr[i + 1])
      return false;
  }

  return true;
};