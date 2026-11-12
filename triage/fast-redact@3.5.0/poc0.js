// JALANGI DRIVER
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/fast-redact/node_modules/fast-redact');
global.CTF = function() {console.log("GLOBAL.CTF HIT")}
try {
	var x0 = "";
new PUT(x0)();
} catch (e) {
	console.log(e);
}