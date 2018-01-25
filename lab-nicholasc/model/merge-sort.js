const mergeSort = items => {
  let output = [];

  if(items.length < 2)
    return items;
  if(items.length === 2)
    return items[0] < items[1] ? items : items.reverse();

  let middle = Math.floor(items.length / 2);

  let leftSide = mergeSort(items.slice(0, middle));
  let rightSide = mergeSort(items.splice(middle));

  while(leftSide.length || rightSide.length){
    if(leftSide.length && !rightSide.length){
      output.push(...leftSide);
      break;
    }
    if(rightSide.length && !leftSide.length){
      output.push(...rightSide);
      break;
    }
    if(rightSide[0] < leftSide[0])
      output.push(rightSide.shift());
    else
      output.push(leftSide.shift());
  }

  return output;
};


module.exports = mergeSort;
