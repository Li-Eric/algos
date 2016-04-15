function uniteUnique(arr1, arr2, arr3) {
	var array = Array.prototype.slice.call(arguments);
	return array.reduce(function(arrA,arrB){
  // Apply filter to remove the duplicate elements in the array
  return arrA.concat(arrB.filter(function(i){
  	return arrA.indexOf(i) === -1;
  }));
});
}

uniteUnique([1, 2, 3], [5, 2, 1]);