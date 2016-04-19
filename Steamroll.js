function steamrollArray(arr) {
	var newArr=[];
	function check (element) {		
		if (!Array.isArray(element)) {
			// if the given element isn't an array
			// add it to newArr;
			newArr.push(element);
		} else {
			// otherwise use recursion loop through the 
			// array until you get to a non-array object
			for (var a in element) {
				check(element[a]);
			}
		}
	}
	for (var a in arr){
		// check every element in arr
		check(arr[a]);
	}
	return newArr;
}

steamrollArray([1, [2], [3, [[4]]]]);