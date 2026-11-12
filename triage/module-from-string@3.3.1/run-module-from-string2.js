// JALANGI DRIVER
    
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
var PUT = require('/nodetaint/packageData/module-from-string/node_modules/module-from-string');
var x0 = {};
var x1 = {};
__jalangi_set_taint__(x0);
PUT["requireFromString"](x0,x1);
