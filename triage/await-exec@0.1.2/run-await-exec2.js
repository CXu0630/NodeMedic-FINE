// JALANGI DRIVER
    
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
var PUT = require('/nodetaint/packageData/await-exec/node_modules/await-exec');
var x0 = {};
var x1 = {};
__jalangi_set_taint__(x0);
new PUT(x0,x1);
