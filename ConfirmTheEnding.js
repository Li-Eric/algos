function confirmEnding(str, target) {
	/* Starting from the end of str,
	return the substring with the same length 
	as target and confirm it matches target	*/
	return str.substr(-target.length) === target; 
}

confirmEnding("Dinosaur", "nosaur");