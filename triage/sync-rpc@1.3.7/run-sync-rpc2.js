// JALANGI DRIVER
    
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
var PUT = require('/nodetaint/packageData/sync-rpc/node_modules/sync-rpc');
var x0 = {};
var x1 = {};
__jalangi_set_taint__(x0);
new PUT["FUNCTION_PRIORITY"]["0"](x0,x1);
