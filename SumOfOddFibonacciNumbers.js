function sumFibs(num) {
  var sum = 0;
  var x = 1;
  var y = 0;
  // Use a while loop to find the Fibonacci numbers
  while (x <= num){
    // Check for odd numbers and add them
    if (x % 2 !== 0){      
      sum += x;
    }
    x += y;
    y = x-y;    
  }
  return sum;
}

sumFibs(1000);