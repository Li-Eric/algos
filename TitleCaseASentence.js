function titleCase(str) {	
	var wordsArray = str.split(" ");
	var words = [];

	for (var i in wordsArray) {
		// For each word in wordsArray, capitalize the first character and lowercase the rest   
		words.push(wordsArray[i].charAt(0).toUpperCase() + wordsArray[i].substr(1).toLowerCase());
	}

	var final = words.join(" "); 
	return final;
}

titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");