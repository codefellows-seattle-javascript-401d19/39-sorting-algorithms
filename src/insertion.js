const insertionSort = items => {
	for (let i = 0; i < items.length; i++) {
		let tempVal = items[i]
		let j = i - 1
		while (j >= 0 && items[j] > tempVal) {
			items[j + 1] = items[j];
			j--
		}
		items[j + 1] = tempVal
	}
	// console.log('Using insertion sort if <= 10 items', items);
	return items;
}

module.exports = insertionSort;
