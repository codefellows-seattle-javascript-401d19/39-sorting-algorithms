const mergeSort = items => {

  if(items.length < 2)
    return items;
  if(items.length === 2)
    return items[0] < items[1] ? items : items.reverse();

  let middle = Math.floor(items.length / 2);

  let leftSide = mergeSort(items.slice(0, middle));
  let rightSide = mergeSort(items.splice(middle));

  while(leftSide.length || rightSide.length){
    if(leftSide.length && !rightSide.length){
      items.push(...leftSide);
      break;
    }
    if(rightSide.length && !leftSide.length){
      items.push(...rightSide);
      break;
    }
    if(rightSide[0] < leftSide[0])
      items.push(rightSide.shift());
    else
      items.push(leftSide.shift());
  }

  return items;
};


module.exports = mergeSort;
