/*
 * Reverse a string
 * Author: George
 */

var str = process.argv[2];

// 1.反向遍历，存储到另一个变量中
var result = '';
for (var i = str.length - 1; i >= 0; i--) {
    result = result.concat(str[i]);
}

// 2.头尾互换
//var left = 0;
//var right = str.length - 1;
//while (left < right) {
//    var temp = str[left];
//    str = str.replace(str[left], str[right]);
//    str = str.replace(str[right], temp);
//
//    left++;
//    right--;
//}

console.log(result);
//console.log(str);
