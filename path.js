const path=require("path");

const filepath="c/user/appdata/nodejs/app.js";
console.log("base name:",path.basename(filepath));
console.log("directry name:",path.dirname(filepath));
console.log("xtension name:",path.extname(filepath));

//test.txt
console.log("joined path ",__dirname+'\\test.txt');
console.log(path.join(__dirname,"text.txt"));

