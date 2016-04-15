function whereAreYou(collection, source) {
	var srcKeys = Object.keys(source);
  	// filter the collection
  	return collection.filter(function (obj) {
    	// return a Boolean value for `filter` method
    	return srcKeys.every(function (key) {
      	// reduce to Boolean value to be returned for `every` method
      	return obj.hasOwnProperty(key) && obj[key] === source[key];
  		});
	});
}

whereAreYou([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });