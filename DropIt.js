function dropElements(arr, func) {
	// Loop through the array and remove any element that doesn't pass the test
	while(arr.length > 0 && !func(arr[0])) {
		arr.shift();
	}
	return arr;
}

dropElements([1, 2, 3, 4], function(n) {return n > 5;});