function reverseString(str) {  
  var array = str.split("");
  array.reverse();
  return array.join("");  
}

reverseString("Programming");