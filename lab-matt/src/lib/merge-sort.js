module.exports = function mergeSort(items) {
  if (items.length < 2) {
    return items;
  }

  if (items.length === 2) {
    return items[0] < items[1] ? items : items.reverse();
  }

  let middle = Math.floor(items.length / 2);
  let leftSide = mergeSort(items.splice(0, middle));
  let rightSide = mergeSort(items.splice(0));


  while (leftSide.length || rightSide.length) {
    if (leftSide.length && !rightSide.length) {
      items.push(...leftSide);
      break;
    }
    if (!leftSide.length && rightSide.length) {
      items.push(...rightSide);
      break;
    }
    if (leftSide[0] <= rightSide[0]) {
      items.push(leftSide.shift());
    } else {
      items.push(rightSide.shift());
    }
  }
  return items;
};