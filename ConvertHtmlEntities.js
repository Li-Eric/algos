function convertHTML(str) {
	  // Replace all symbols in str with their HTML counterparts
	  str = str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&apos;');
	  return str;
}

convertHTML("Dolce & Gabbana");