function smallestCommons(arr) {
  for (i = Math.max(...arr); i >= Math.min(...arr); i--) { 
    arr.push(i); 
  }

  return arr.slice(2).reduce(function(x, y) {
    var a = x, b = y, t = 0;
    while (a % b) {
      a = a % b;
      t = a;
      a = b;
      b = t;
    }
    return x / b * y;
  });
}

smallestCommons([1, 25]);