// JALANGI DRIVER
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/@koa/ejs/node_modules/@koa/ejs');
global.CTF = function() {console.log("GLOBAL.CTF HIT")}
try {
	var x0 = "6\\";
var x1 = {"templateText":"A;global.CTF()//"};
new PUT["ejs"]["compile"](x0,x1)();
} catch (e) {
	console.log(e);
}