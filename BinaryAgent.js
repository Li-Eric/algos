function binaryAgent(str) {
	// Create an array out of the binary input
	str = str.split(" ");
	var message = "";
	for (var a in str){
		// Convert each binary number to text
		message += String.fromCharCode(parseInt(str[a], 2)); 
	}
	return message;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");