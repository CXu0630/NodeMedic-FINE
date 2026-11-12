// JALANGI DRIVER
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/datalib/node_modules/datalib');
global.CTF = function() {console.log("GLOBAL.CTF HIT")}
try {
	var x0 = "global.CTF();//\"+global.CTF();//'+global.CTF();//${global.CTF()}";
var x1 = "fACPy6U>0T$";
new PUT["type"](x0,x1)();
} catch (e) {
	console.log(e);
}