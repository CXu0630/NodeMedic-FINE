// JALANGI DRIVER
    
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
var PUT = require('/nodetaint/packageData/walker/node_modules/walker');
var x0 = "~/";
var x1 = "4@P;w:>Ib$";
__jalangi_set_taint__(x0);
new PUT["UnknownFileTypeError"](x0,x1);
