// JALANGI DRIVER
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/@koa/ejs/node_modules/@koa/ejs');
global.CTF = function() {console.log("GLOBAL.CTF HIT")}
try {
	var x0 = {"templateText":"A;global.CTF()//"};
var x1 = "~LO";
new PUT["ejs"]["compile"](x0,x1)();
} catch (e) {
	console.log(e);
}