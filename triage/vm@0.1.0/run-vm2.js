// JALANGI DRIVER
    
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
var PUT = require('/nodetaint/packageData/vm/node_modules/vm');
var x0 = {};
__jalangi_set_taint__(x0);
new PUT["runInContext"](x0);
