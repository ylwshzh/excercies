var str = process.argv[2];
var counts = {};
for (var i in str) {
    if (str[i].search(/[aeiouAEIOU]/) !== -1) {
        if (counts[str[i]] === undefined) {
            counts[str[i]] = 1;
        } else {
            counts[str[i]]++;
        }
    }
}

for (var j in counts) {
    console.log(j + ':' + counts[j]);
}
