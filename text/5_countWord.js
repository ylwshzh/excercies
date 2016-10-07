var fs = require('fs');

var counts = {};
fs.readFile('a.txt', 'utf8', function (err, data) {
    console.log(data);
    countWord(data);
});

function countWord(str) {
    var start = -1;
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (!isAlphaOrNumber(str[i])) {
            if (count === 0) {
                continue;
            }

            var word = str.substr(start, count);
            if (counts[word] === undefined) {
                counts[word] = 1;
            } else {
                counts[word]++;
            }

            count = 0;
        } else {
            start = count === 0 ? i : start;
            count++;
        }
    }

    console.log(counts);
}

function isAlphaOrNumber(c) {
    var res = false;
    res = c.search(/[a-z|A-Z|0-9]/) !== -1;
    return res;
}
