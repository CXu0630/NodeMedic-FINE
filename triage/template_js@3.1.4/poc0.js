// JALANGI DRIVER
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/template_js/node_modules/template_js');
global.CTF = function() {console.log("GLOBAL.CTF HIT")}
try {
	var x0 = "";
new PUT["__compile"](x0)();
} catch (e) {
	console.log(e);
}