function repeat(str, num) {
	var word = "";
	for (var i = 0; i < num; i++){
		word += str;
	}  
	return word;
}

repeat("abc", 3);