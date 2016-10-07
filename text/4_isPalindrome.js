var str = process.argv[2];

var left = 0;
var right = str.length - 1;
while (left < right && str[left] == str[right]) {
    left++;
    right--;
}

if (left >= right) {
    console.log(str + ' is palindrome');
} else {
    console.log(str + ' is not palindrome');
}
