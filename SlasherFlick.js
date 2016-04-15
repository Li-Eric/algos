function slasher(arr, howMany) {
	// Create a new array from the old one.
	/* The array starts from arr[howMany]
	   and goes to arr[arr.length] */
	var array = arr.slice(howMany, arr.length);
	return array;
}

slasher([1, 2, 3], 2);