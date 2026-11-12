// JALANGI DRIVER
    
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
var PUT = require('/nodetaint/packageData/7zip-min/node_modules/7zip-min');
var x0 = {};
__jalangi_set_taint__(x0);
new PUT["unpack"](x0);
