// JALANGI DRIVER
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/tea-load/node_modules/tea-load');
global.CTF = function() {console.log("GLOBAL.CTF HIT")}
try {
	var x0 = {};
var x1 = {};
var x2 = "global.CTF();//\"+global.CTF();//'+global.CTF();//${global.CTF()}";
new PUT["compiler"](x0,x1,x2)();
} catch (e) {
	console.log(e);
}