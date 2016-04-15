function truncateString(str, num) {
  // Add ... based on str.length and num
  if (num <= 3) {    
    return str.slice(0, num) + "...";
  } else if (num >= str.length){
    return str.slice(0, num);
  } else {
    return str.slice(0, num-3) + "...";
  }  
}

truncateString("Absolutely Longer", 2);