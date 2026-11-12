// JALANGI DRIVER
    
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
var PUT = require('/nodetaint/packageData/promisify-child-process/node_modules/promisify-child-process');
var x0 = {};
__jalangi_set_taint__(x0);
PUT["exec"](x0);
