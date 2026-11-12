// JALANGI DRIVER
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/walker/node_modules/walker');
global.CTF = function() {console.log("GLOBAL.CTF HIT")}
try {
	var x0 = "~/";
var x1 = "global.CTF();//\"+global.CTF();//'+global.CTF();//${global.CTF()}";
new PUT["UnknownFileTypeError"](x0,x1)();
} catch (e) {
	console.log(e);
}