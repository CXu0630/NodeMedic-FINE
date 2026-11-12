// JALANGI DRIVER
    
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
var PUT = require('/nodetaint/packageData/@azure/mcp-linux-x64/node_modules/@azure/mcp-linux-x64');
var x0 = ["P;w:>Ib$Y"];
__jalangi_set_taint__(x0);
new PUT["runExecutable"](x0);
