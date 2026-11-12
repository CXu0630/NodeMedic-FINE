// JALANGI DRIVER
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/cross-spawn/node_modules/cross-spawn');
try {
	var x0 = {"command":" $(touch /tmp/success);#"};
var x1 = {};
var x2 = {};
new PUT["spawn"](x0,x1,x2)();
} catch (e) {
	console.log(e);
}