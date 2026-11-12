// JALANGI DRIVER
    
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
var PUT = require('/nodetaint/packageData/safe-eval/node_modules/safe-eval');
var x0 = {};
var x1 = {};
var x2 = {};
__jalangi_set_taint__(x0);
new PUT(x0,x1,x2);
