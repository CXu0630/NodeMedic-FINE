// JALANGI DRIVER
    
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
var PUT = require('/nodetaint/packageData/tinyspawn/node_modules/tinyspawn');
var x0 = "e!";
__jalangi_set_taint__(x0);
PUT["json"](x0);
