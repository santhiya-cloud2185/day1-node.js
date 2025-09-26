const fs=require("fs");

//write file
fs.writeFileSync("../1.intro/test.txt","helllo platinum 2025!!");
console.log("file written!!!");

//read file
const data0=fs.readFileSync("test.txt",{encoding:"utf-8"});
console.log("data in core folder",data0);

const data1=fs.readFileSync("../1.intro/test.txt");
console.log("data in intro folder",data1);