// JALANGI DRIVER
    
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
var PUT = require('/nodetaint/packageData/art-template/node_modules/art-template');
var x0 = ".";
__jalangi_set_taint__(x0);
new PUT["compile"](x0);
