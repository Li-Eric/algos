function fearNotLetter(str) {

	for (var i = 0; i < str.length-1; i++){
		/* If the next letter in the string does not 
		match the actual next letter, return the 
		missing letter*/
		if (str.charCodeAt(i+1) !== str.charCodeAt(i) +1){
			return String.fromCharCode(str.charCodeAt(i) +1);
		}		
	}

	return undefined;
}

fearNotLetter("abce");