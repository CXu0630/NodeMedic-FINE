// JALANGI DRIVER
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/exec-limiter/node_modules/exec-limiter');
try {
	var x0 = {};
var x1 = {};
var x2 = {};
var x3 = " $(touch /tmp/success) # \" || touch /tmp/success # ' || touch /tmp/success";
var put = new PUT();
	put["add"](x0,x1,x2,x3)();
} catch (e) {
	console.log(e);
}