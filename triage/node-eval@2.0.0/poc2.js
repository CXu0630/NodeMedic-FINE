// JALANGI DRIVER
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/node-eval/node_modules/node-eval');
global.CTF = function() {console.log("GLOBAL.CTF HIT")}
try {
	var x0 = "Zv!uw-$pe";
var x1 = "^g\t4@";
var x2 = "global.CTF();//\"+global.CTF();//'+global.CTF();//${global.CTF()}";
PUT(x0,x1,x2)();
} catch (e) {
	console.log(e);
}