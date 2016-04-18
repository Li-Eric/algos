function findElement(arr, func) {
	for (var a in arr){
		if (func(arr[a]) === true){
			return arr[a];
		}
	}
}

findElement([1, 3, 5, 8, 9, 10], function(num){ return num % 2 === 0; });