// JALANGI DRIVER
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/node-osascript/node_modules/node-osascript');
try {
	var x0 = null;
var x1 = "e?:";
var x2 = "2yn6";
new PUT["executeFile"](x0,x1,x2)();
} catch (e) {
	console.log(e);
}