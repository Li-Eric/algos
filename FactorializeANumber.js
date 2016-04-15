function factorialize(num) {
  	// Recursively calculate the factorial of num  	
  	var x=1;
  	if (num > 1){
  		x=num*factorialize(num-1); // x = n * (n-1)!
  	}
  	return x;  	
  }
factorialize(5);