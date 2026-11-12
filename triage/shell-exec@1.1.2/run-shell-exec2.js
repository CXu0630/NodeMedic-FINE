// JALANGI DRIVER
    
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
var PUT = require('/nodetaint/packageData/shell-exec/node_modules/shell-exec');
var x0 = {};
var x1 = {};
__jalangi_set_taint__(x0);
new PUT["default"](x0,x1);
