function spinalCase(str) {
	// Regex to detect all spaces and underscores.
	var regex = /\s+|_+/g;
	/* If a capital letter is next to a lowercase letter
	put a space between them. */
	str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
	// Add in the dashes.
	return str.replace(regex, '-').toLowerCase();  
}

spinalCase('thisIsSpinalTap');