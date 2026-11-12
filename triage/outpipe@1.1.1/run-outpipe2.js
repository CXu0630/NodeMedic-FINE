// JALANGI DRIVER
    
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
var PUT = require('/nodetaint/packageData/outpipe/node_modules/outpipe');
var x0 = "?Zv";
var x1 = "w-$p";
__jalangi_set_taint__(x0);
new PUT(x0,x1);
