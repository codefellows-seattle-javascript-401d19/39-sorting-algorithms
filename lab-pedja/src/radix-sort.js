'use strict';
// find the longest num and split arr
const radixSort = items => {
  if(!Array.isArray(items))
    throw new TypeError('input has to be an array');

  for(let value of items){
    if(typeof value !== 'number')
      throw new TypeError('input array has contain only integers');
  } 

  if(items.length < 2)
    return items;

  if(items.length === 2)  
    return items[0] < items[1] ? items : items.reverse();

  let numOfRounds = 0;
  let newArray = items.map(number => {
    if(number.toString().length > numOfRounds){
      numOfRounds = number.toString().length;
    }
    return number.toString().split('');
  });
  
  // add zeros to match the longest num
  newArray.forEach(num => {
    if(num.length < numOfRounds){
      let zerosToAdd = numOfRounds - num.length;
      for(let i=0; i < zerosToAdd; i++){
        num.unshift('0');
      }
    }
  });


  let buckets = [];
  // sort count = biggest number, add number to bucket on every pass
  for(let i=numOfRounds - 1; i > -1; i--){
    newArray.forEach(num => {
      let radix = num[i];
      buckets[radix] = buckets[radix] || [];
      buckets[radix].push(num);
    });
    

    newArray = buckets.reduce((prev, curr) => {
      if(!curr)
        return prev;
      return prev.concat(curr);
    }, []);

    // clear buckets when pass is done
    buckets = [];
  }

  // concat all numbers back together
  newArray = newArray.map(num => {
    return +num.reduce((prev, curr) => {
      return prev.concat(curr);
    }, '');
  });

  return newArray;
}

module.exports = radixSort;

