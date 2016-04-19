function truthCheck(collection, pre) {
	// Iterate through every object in collection
	for (var i=0;i<collection.length;i++){
		// If an object doesn't contain pre or pre is correlated with a falsy object, return false
		if (!Object.keys(collection[i]).includes(pre) || !Boolean(collection[i][pre])){
			return false;
		}
	}
	// If every object in collection passes the test, return true
	return true;
}

truthCheck([{"user": "", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");