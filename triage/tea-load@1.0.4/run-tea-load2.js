// JALANGI DRIVER
    
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
var PUT = require('/nodetaint/packageData/tea-load/node_modules/tea-load');
var x0 = {};
var x1 = {};
var x2 = {};
__jalangi_set_taint__(x0);
new PUT["compiler"](x0,x1,x2);
