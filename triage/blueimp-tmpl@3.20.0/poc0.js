// JALANGI DRIVER
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/blueimp-tmpl/node_modules/blueimp-tmpl');
global.CTF = function() {console.log("GLOBAL.CTF HIT")}
try {
	var x0 = "L";
var x1 = "T/9\tp@I";
new PUT(x0,x1)();
} catch (e) {
	console.log(e);
}