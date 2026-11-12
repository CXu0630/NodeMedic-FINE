// JALANGI DRIVER
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/ps-man/node_modules/ps-man');
try {
	var x0 = [false, false];
var x1 = [""];
new PUT["kill"](x0,x1)();
} catch (e) {
	console.log(e);
}