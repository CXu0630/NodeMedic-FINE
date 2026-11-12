// JALANGI DRIVER
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/git-last-commit/node_modules/git-last-commit');
try {
	var x0 = BigInt("0");
var x1 = null;
PUT["getLastCommit"](x0,x1)();
} catch (e) {
	console.log(e);
}