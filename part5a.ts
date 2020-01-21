function wordCount (word:string):number{
    let count: number = word.replace(/\s/g,"").length;//word.length if normal
    return count;
}


let myCount:number = wordCount("test 1");
console.log(myCount);






