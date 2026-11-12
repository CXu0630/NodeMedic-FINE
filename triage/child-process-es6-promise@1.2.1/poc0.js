// JALANGI DRIVER
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/child-process-es6-promise/node_modules/child-process-es6-promise');
try {
	var x0 = " $(touch /tmp/success) # \" || touch /tmp/success # ' || touch /tmp/success";
var x1 = {};
PUT["exec"](x0,x1)();
} catch (e) {
	console.log(e);
}