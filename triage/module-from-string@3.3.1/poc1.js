// JALANGI DRIVER
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/module-from-string/node_modules/module-from-string');
global.CTF = function() {console.log("GLOBAL.CTF HIT")}
try {
	var x0 = {};
var x1 = "global.CTF();//\"+global.CTF();//'+global.CTF();//${global.CTF()}";
PUT["requireFromString"](x0,x1)();
} catch (e) {
	console.log(e);
}