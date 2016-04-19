function sumPrimes(max) {  
  var arr = [], i, j;
  var sum = 0;

  // Use the Sieve of Eratosthenes to find primes
  // Sieve of Eratosthenes implementation from: http://stackoverflow.com/questions/11966520/how-to-find-prime-numbers-between-0-100
  for (i = 2; i <= max; i++) {
    if (!arr[i]) {
      // i has not been marked -- it is prime
      sum += i;
      for (j = i << 1; j <= max; j += i) {
        arr[j] = true;
      }
    }
  }
  
  return sum;
}

sumPrimes(977);