// JALANGI DRIVER
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/safe-eval/node_modules/safe-eval');
global.CTF = function() {console.log("GLOBAL.CTF HIT")}
try {
	var x0 = "global.CTF();//\"+global.CTF();//'+global.CTF();//${global.CTF()}";
var x1 = {};
var x2 = {};
new PUT(x0,x1,x2)();
} catch (e) {
	console.log(e);
}