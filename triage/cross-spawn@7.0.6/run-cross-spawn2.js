// JALANGI DRIVER
    
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
var PUT = require('/nodetaint/packageData/cross-spawn/node_modules/cross-spawn');
var x0 = {};
var x1 = {};
var x2 = {};
__jalangi_set_taint__(x0);
new PUT["spawn"](x0,x1,x2);
