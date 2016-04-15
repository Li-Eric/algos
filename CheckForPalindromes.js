function palindrome(str) {  
	return str // return a boolean
	.replace(/[\W_]/g, "") // remove all non-letters
	.toLowerCase() === // and make every letter lowercase
	str
    .replace(/[\W_]/g, "")
    .toLowerCase()
    .split("") // convert the string to an array
    .reverse() // reverse the array
    .join(""); // join the array elements into a string 
}

palindrome("race  CaR");