// JALANGI DRIVER
    
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
var PUT = require('/nodetaint/packageData/npm-programmatic/node_modules/npm-programmatic');
var x0 = {};
__jalangi_set_taint__(x0);
new PUT["list"](x0);
