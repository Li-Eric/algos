function translatePigLatin(str) {  
  var word = "";

  for (var c in str){
    if (str[c] == 'a' || str[c] == 'e' || str[c] == 'i' || str[c] == 'o' || str[c] == 'u'){
      if (c == '0'){
        return str + 'way';
      }
      break;
    }
    word += str[c];    
  }
  
  return str.slice(word.length) + word + 'ay';  
}

translatePigLatin("consonant");