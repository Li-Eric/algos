function mutation(arr) {
	var test = arr[1].toLowerCase();
	var target = arr[0].toLowerCase();

	for (i=0;i<test.length;i++) {
		// Check to see if all of the letters are present
		if (target.indexOf(test[i]) < 0)
			return false;
	}

	return true;
}

mutation(["Mary", "Army"]);