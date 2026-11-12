// JALANGI DRIVER
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/git-last-commit/node_modules/git-last-commit');
try {
	var x0 = null;
var x1 = {"getLastCommit": "$S\nha", "dst": "<5+T/9\t"};
PUT["getLastCommit"](x0,x1)();
} catch (e) {
	console.log(e);
}