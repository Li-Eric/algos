function destroyer(arr) {
	// Get the argument passed to the function
	var args = Array.prototype.slice.call(arguments);
	// Start at index 0 and remove one element from the argument
	args.splice(0, 1);
	// Only leave the element intact if args doesn't contain it
	return arr.filter(function(g){
		return args.indexOf(g) === -1;
	});
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);