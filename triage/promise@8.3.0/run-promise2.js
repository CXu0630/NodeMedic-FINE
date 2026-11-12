// JALANGI DRIVER
    
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
var PUT = require('/nodetaint/packageData/promise/node_modules/promise');
var x0 = {};
var x1 = {};
__jalangi_set_taint__(x0);
new PUT["denodeify"](x0,x1);
