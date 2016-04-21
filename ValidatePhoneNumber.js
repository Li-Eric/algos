function telephoneCheck(str) {
    /* Valid phone numbers
    555-555-5555
    (555)555-5555
    (555) 555-5555
    555 555 5555
    5555555555
    1 555 555 5555 */

    /* Invalid phone numbers
    10 (757) 622-7382
    27576227382
    555)-555-5555
    1 555)555-5555
    123**&!!asdf#
    55555555 
    b434 467 5412h*/
    	
    // ^ - The phone number must start with a number or a bracket
    // (1\s?)?  - Match an optional "1" at the beginning followed by an optional space
    // (\(\d{3}\)|\d{3}) - Match 3 numbers enclosed or not enclosed by brackets
    // [\s\-]? - Match an optional space or dash
    // \d{3} - Match 3 numbers
    // [\s\-]? - Match an optional space or dash
    // \d{4} - Match 4 numbers
    // $ - The 4 numbers must end the phone number
    var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return regex.test(str);
}

telephoneCheck("555-555-5555");
