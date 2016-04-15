function sumAll(arr) {
	var a = 0;
	var max = Math.max(arr[0], arr[1]);
	var min = Math.min(arr[0], arr[1]);

	// Iteratively sum every number between min and max
	for (var i=min; i <= max; i++){
		a += i;
	}

	return a;
}

sumAll([4, 1]);