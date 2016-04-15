function convert (num) {
  // Create arrays with default conversion with matching indices
  var decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

  var romanized = '';

  // Loop through the indices of the decimalValue array
  for (var i = 0; i < decimalValue.length; i++) {
    // Continue to loop while the value at the current index will fit into num
    while (decimalValue[i] <= num) {
      // Add the Roman numeral & decrease num by the decimal equivalent
      romanized += romanNumeral[i];
      num -= decimalValue[i];
    }
  }
  return romanized;
}

convert(2015);