// JALANGI DRIVER
    
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
var PUT = require('/nodetaint/packageData/node-run-cmd/node_modules/node-run-cmd');
var x0 = "?Z";
var x1 = "uw-$pe";
__jalangi_set_taint__(x1);
new PUT["run"](x0,x1);
