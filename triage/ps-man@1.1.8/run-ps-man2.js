// JALANGI DRIVER
    
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
var PUT = require('/nodetaint/packageData/ps-man/node_modules/ps-man');
var x0 = [false, false];
var x1 = [false, false];
__jalangi_set_taint__(x0);
new PUT["kill"](x0,x1);
