// JALANGI DRIVER
    
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
var PUT = require('/nodetaint/packageData/datalib/node_modules/datalib');
var x0 = "hDfq";
var x1 = "fACPy6U>0T$";
__jalangi_set_taint__(x1);
new PUT["type"](x0,x1);
