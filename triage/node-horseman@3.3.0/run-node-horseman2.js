// JALANGI DRIVER
    
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
var PUT = require('/nodetaint/packageData/node-horseman/node_modules/node-horseman');
var x0 = BigInt("-999999999");
__jalangi_set_taint__(x0);
new PUT(x0);
