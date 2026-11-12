// JALANGI DRIVER
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/object-resolve-path/node_modules/object-resolve-path');
global.CTF = function() {console.log("GLOBAL.CTF HIT")}
try {
	var x0 = "pda;global.CTF()//pd";
var x1 = "jmHlvSsGBV";
new PUT(x0,x1)();
} catch (e) {
	console.log(e);
}