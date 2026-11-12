// JALANGI DRIVER
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/child-process-promise/node_modules/child-process-promise');
try {
	var x0 = {};
var x1 = {};
var x2 = {"command":" $(touch /tmp/success);#"};
new PUT["spawn"](x0,x1,x2)();
} catch (e) {
	console.log(e);
}