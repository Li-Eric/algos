function largestOfFour(arr) {
  var array = [];
  
  for (var a in arr){
    var n = 0;    
    for (var k in arr[a]){
      if (arr[a][k] > n){        
        n = arr[a][k];
      }
    }
    array.push(n);
  }

  return array;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);