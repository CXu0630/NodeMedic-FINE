// JALANGI DRIVER
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/std-pour/node_modules/std-pour');
try {
	var x0 = {};
var x1 = {};
var x2 = " $(touch /tmp/success);#";
var x3 = {};
var x4 = {};
PUT["pour"](x0,x1,x2,x3,x4)();
} catch (e) {
	console.log(e);
}