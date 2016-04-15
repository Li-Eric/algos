function diff(arr1, arr2) {
	// Create an array that combines the inputs
	var temp = arr1.concat(arr2);
  	
  // If an array does not contain an element, remove it
	function filter(item){
    if (arr1.indexOf(item) === -1 || arr2.indexOf(item) === -1) {
      return item;
    }
  }  	

	return temp.filter(filter);  
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);