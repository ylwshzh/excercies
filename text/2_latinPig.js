var vowel = 'aeiou';
var str = process.argv[2];

// find first consonant
var index = str.search(/[^aeiou]/);
var consonant = str[index];
str = str.substr(index+1);
// make substr
consonant += 'ay';
// concat
str += '-' + consonant;

console.log(str);
