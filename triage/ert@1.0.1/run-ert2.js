// JALANGI DRIVER
    
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
var PUT = require('/nodetaint/packageData/ert/node_modules/ert');
var x0 = "/tmp";
__jalangi_set_taint__(x0);
new PUT["compileFn"](x0);
