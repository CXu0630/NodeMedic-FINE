// JALANGI DRIVER
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/sync-exec/node_modules/sync-exec');
try {
	var x0 = {};
var x1 = " $(touch /tmp/success) # \" || touch /tmp/success # ' || touch /tmp/success";
var x2 = {};
new PUT(x0,x1,x2)();
} catch (e) {
	console.log(e);
}