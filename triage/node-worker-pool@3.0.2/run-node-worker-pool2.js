// JALANGI DRIVER
    
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
var PUT = require('/nodetaint/packageData/node-worker-pool/node_modules/node-worker-pool');
var x0 = true;
var x1 = false;
var x2 = true;
var x3 = true;
__jalangi_set_taint__(x1);
new PUT(x0,x1,x2,x3);
