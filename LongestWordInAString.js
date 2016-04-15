function findLongestWord(str) {
	// create an array that contains each word
	var array = str.split(" ");

	var biggest = 0;

	// iterate through each word in the array
	for (var i = 0; i<array.length; i++){
		if (array[i].length > biggest){
			// save the length of the longest word
			biggest = array[i].length;
		}
	}

	return biggest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");