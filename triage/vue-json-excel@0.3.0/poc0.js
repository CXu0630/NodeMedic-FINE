// JALANGI DRIVER
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/vue-json-excel/node_modules/vue-json-excel');
global.CTF = function() {console.log("GLOBAL.CTF HIT")}
try {
	var x0 = "global.CTF();//\"+global.CTF();//'+global.CTF();//${global.CTF()}";
new PUT["props"]["fetch"]["type"](x0)();
} catch (e) {
	console.log(e);
}