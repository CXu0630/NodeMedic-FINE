// JALANGI DRIVER
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/koa-logger2/node_modules/koa-logger2');
global.CTF = function() {console.log("GLOBAL.CTF HIT")}
try {
	var x0 = "SUVWX;global.CTF()//";
new PUT(x0)();
} catch (e) {
	console.log(e);
}