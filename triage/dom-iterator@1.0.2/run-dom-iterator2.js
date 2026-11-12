// JALANGI DRIVER
    
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
var PUT = require('/nodetaint/packageData/dom-iterator/node_modules/dom-iterator');
var x0 = "4;n";
__jalangi_set_taint__(x0);
new PUT["prototype"]["compile"](x0);
