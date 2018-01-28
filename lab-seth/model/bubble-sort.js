
const bubbleSort = (array) => {
  if(typeof array !== 'object') throw new TypeError('__ERROR__ Input must be an array')

  for(let i = array.length - 1; i >= 0; i--){
    for(let j = 0; j <= i - 1; j++){
      if(array[j] > array[j + 1]){
        //swap the data
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}

module.exports = bubbleSort;
