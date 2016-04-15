function chunkArrayInGroups(arr, size) {
  // Split arr to a size amount of arrays
  var newArr = [];
  var i = 0;

  while (i < arr.length) {
    newArr.push(arr.slice(i, i+size)); // Add elements from i to i+size to newArr
    i += size; // Increase the index so it will skip over the elements previously added
  }
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);