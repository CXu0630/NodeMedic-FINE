// JALANGI DRIVER
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/ert/node_modules/ert');
global.CTF = function() {console.log("GLOBAL.CTF HIT")}
try {
	var x0 = "+global.CTF()//";
new PUT["compileFn"](x0)();
} catch (e) {
	console.log(e);
}