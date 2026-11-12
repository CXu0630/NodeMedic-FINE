// JALANGI DRIVER
    
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
var PUT = require('/nodetaint/packageData/cp-sugar/node_modules/cp-sugar');
var x0 = {};
__jalangi_set_taint__(x0);
new PUT["exec"](x0);
