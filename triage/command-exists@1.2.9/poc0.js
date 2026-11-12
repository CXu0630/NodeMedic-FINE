// JALANGI DRIVER
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/command-exists/node_modules/command-exists');
try {
	var x0 = "";
var x1 = "^g\t4@";
new PUT(x0,x1)();
} catch (e) {
	console.log(e);
}