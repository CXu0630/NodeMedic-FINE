// JALANGI DRIVER
    
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
var PUT = require('/nodetaint/packageData/jsrender/node_modules/jsrender');
var x0 = "lwe?:ZE2yn";
__jalangi_set_taint__(x0);
new PUT["templates"](x0);
