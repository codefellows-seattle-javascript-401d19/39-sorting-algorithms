'use strict';

let smarterArray = int => {
	return Array.from({ length: int }, () => Math.floor(Math.random() * 100));
}

module.exports = smarterArray;