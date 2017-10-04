function countingChars(str){

var charCount = {};
  for (var i = 0; i < str.length; i++) {
    //charCount[str[i]] = 1;

    if (charCount[str[i]] === undefined ) {
      charCount[str[i]] = 1;
    }
    else {
      charCount[str[i]]++;
    }
  }
return charCount;

}

console.log(countingChars("This t is a string"));