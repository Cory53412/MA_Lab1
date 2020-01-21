function wordCount(word) {
    var count = word.replace(/\s/g, "").length; //word.length if normal
    return count;
}
var myCount = wordCount("test 1");
console.log(myCount);
