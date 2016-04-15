function rot13(str) {

  // Creates an array with the letters from str	
  var array = str.split("");
  var string = "";

  // Loop through the array
  for (var i=0;i<str.length;i++){
  	// If the element at array[i] is an upppercase letter, continue
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
   	  /* If the letter is between convert it to its
   	  corresponding letter and add it to string */
      if (str.charCodeAt(i) >= 78){
        string += String.fromCharCode(str.charCodeAt(i)-13);
      } else if (str.charCodeAt(i) < 78){
        string += String.fromCharCode(str.charCodeAt(i)+13);
      }
      //Otherwise, add the space to string
    } else {
      string += str[i];
    }
  }

  return string;  
}

rot13("SERR PBQR PNZC");