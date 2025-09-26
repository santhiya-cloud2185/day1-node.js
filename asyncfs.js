const fs=require("fs");
//write file (asynchronys)
fs.writeFile("asynctest.txt","hello santhiya....",(err)=>{
    if(err)
    {
        console.log("file written has err");
    }
    else{
        console.log("file written completed");
    }
});


//read file(asynchronus)
fs.readFile("asynctest.txt",{encoding:"utf-8"},(err,data)=>{
console.log("read file async",data);
});

console.log("file written processing");