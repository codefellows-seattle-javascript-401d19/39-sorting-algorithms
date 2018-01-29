'use strict';

const inPlaceMergeSort = items => {

};

left = first; right = mid + 1;
// One extra check:  can we SKIP the merge?
if (x[mid].compareTo(x[right]) <= 0)
	return;

while (left <= mid && right <= last) {  // Select from left:  no change, just advance left
	if (x[left].compareTo(x[right]) <= 0)
		left++;
	// Select from right:  rotate [left..right] and correct
	else {
		tmp = x[right];     // Will move to [left]
		System.arraycopy(x, left, x, left + 1, right - left);
		x[left] = tmp;
		// EVERYTHING has moved up by one
		left++; mid++; right++;
	}
}

// //naive sort

// const mergeSort = items => {

// 	if (items.length < 2)
// 		return items;

// 	if (items.length === 2)
// 		return items[0] < items[1] ? items : items.reverse();

// 	let middle = Math.floor(items.length / 2);

// 	let leftSide = mergeSort(items.slice(0, middle));
// 	let rightSide = mergeSort(items.slice(middle));

// 	return schmerge(leftSide, rightSide);
// }

// const schmerge = (left, right) => {
// 	let output = [];
// 	while (left.length && right.length)

// 	if (left[0] < right[0]) {
// 			items.push(left.shift());
// 		} else {
// 			items.push(right.shift());
// 		}
	
// 	if (left.length) {
// 		return items.concat(left)
// 	} else {
// 		return items.concat(right)
// 	}
// }

// module.exports = mergeSort;

'use strict';
// naive implementation

const mergeSort = items => {
	

	if (items.length < 2)
		return items;

	if (items.length === 2)
		return items[0] < items[1] ? items : items.reverse();

	let middle = Math.floor(items.length / 2);

	let leftSide = mergeSort(items.slice(0, middle));
	let rightSide = mergeSort(items.slice(middle));

	while (leftSide.length || rightSide.length) {

		if (leftSide.length && !rightSide.length) {
			items = items.concat(leftSide);
			break;
		}
		
		if (!leftSide.length && rightSide.length) {
			items = items.concat(rightSide);
			break;
		}
		
		if (leftSide[0] <= rightSide[0])
			items.push(leftSide.shift());
		else
			items.push(rightSide.shift());
	}
	return items;
}

module.exports = mergeSort;