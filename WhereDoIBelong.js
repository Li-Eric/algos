function getIndexToIns(arr, num) {
	// Add num to arr if it isn't already there
	if (arr.indexOf(num) === -1){
		arr.push(num);  
	}

	// Sort the array and then return the index of num
	arr.sort(function(a, b){
		return a-b;
	});

	return arr.indexOf(num);
}

getIndexToIns([2, 20, 10], 19);