// JALANGI DRIVER
    
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
var PUT = require('/nodetaint/packageData/node-7z/node_modules/node-7z');
var x0 = {};
__jalangi_set_taint__(x0);
PUT["add"](x0);
