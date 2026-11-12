// JALANGI DRIVER
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/ejs/node_modules/ejs');
global.CTF = function() {console.log("GLOBAL.CTF HIT")}
try {
	var x0 = "/tmp";
var x1 = {"templateText":";global.CTF()//"};
new PUT["compile"](x0,x1)();
} catch (e) {
	console.log(e);
}