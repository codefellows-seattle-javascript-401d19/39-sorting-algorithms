
const selectionSort = (array) => {
  if (typeof array !== 'object') throw new TypeError('__ERROR__ Input must be an array')

  for(let i = 0; i < array.length -1; i++){
    let min = i;
    for(let j = i + 1; j < array.length; j++){      
      if(array[j] < array[min]) min = j;
    }
    //swap the data
    [array[i], array[min]] = [array[min], array[i]];
  }
  return array;
}
module.exports = selectionSort;