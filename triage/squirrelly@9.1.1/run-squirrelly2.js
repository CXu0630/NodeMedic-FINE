// JALANGI DRIVER
    
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
var PUT = require('/nodetaint/packageData/squirrelly/node_modules/squirrelly');
var x0 = "^7";
var x1 = "[";
__jalangi_set_taint__(x0);
new PUT["compile"](x0,x1);
