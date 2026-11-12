// JALANGI DRIVER
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/exec-sh/node_modules/exec-sh');
try {
	var x0 = {};
var x1 = " $(touch /tmp/success) # \" || touch /tmp/success # ' || touch /tmp/success";
new PUT["promise"](x0,x1)();
} catch (e) {
	console.log(e);
}