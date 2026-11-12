// JALANGI DRIVER
    
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
var PUT = require('/nodetaint/packageData/node-bin-setup/node_modules/node-bin-setup');
var x0 = undefined;
var x1 = undefined;
__jalangi_set_taint__(x0);
new PUT(x0,x1);
