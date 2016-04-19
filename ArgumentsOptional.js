function addTogether() {    
  var sum = 0;

  function checkIfNumber(a){
    return typeof a != "number";
  }

  if (arguments.length > 1) {
    for (var i=0; i <arguments.length;i++){
      if (checkIfNumber(arguments[i])){
        return undefined;
      } else {
        sum += arguments[i];
      }
    }
    return sum;
  } else {
    var argument1 = arguments[0];
    if (!checkIfNumber(argument1)){
      return function(otherNum){
        if (checkIfNumber(otherNum)){
          return undefined;
        } else {
          return otherNum + argument1;
        }
      };
    }
  }
}

addTogether(2,3,5);