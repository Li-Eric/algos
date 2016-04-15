function bouncer(arr) {
  // Removes all false-y values from an array;
  return arr.filter(Boolean);
}

bouncer([1, null, NaN, 2, undefined]);