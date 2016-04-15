function pairElement(str) {
  	var masterArray = [];
  	var pairs = ["G", ["G", "C"], "C",["C","G"], "A", ["A", "T"], "T", ["T", "A"]];

  	// Replace every letter in str with its corresponding array
  	for (var a in str){
    	masterArray.push(pairs[pairs.indexOf(str[a]) + 1]);
  	}	

  	return masterArray;  
}

pairElement("GCG");