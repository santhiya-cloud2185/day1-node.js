const os=require("os");

console.log("platform :",os.platform());

console.log("architecture: ",os.arch());

console.log("total memory:",Math.round(os.totalmem()/1024**3),'GB');

console.log("free memory",Math.round(os.freemem()/1024**3),'GB');

console.log("CPU core ",os.cpus().length);

console.log("cpu uptime ",os.uptime());