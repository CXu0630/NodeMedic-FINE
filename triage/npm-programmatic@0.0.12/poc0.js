// JALANGI DRIVER
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/npm-programmatic/node_modules/npm-programmatic');
try {
	var x0 = null;
new PUT["list"](x0)();
} catch (e) {
	console.log(e);
}