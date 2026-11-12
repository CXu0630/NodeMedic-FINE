// JALANGI DRIVER
    
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
var PUT = require('/nodetaint/packageData/child-process-es6-promise/node_modules/child-process-es6-promise');
var x0 = {};
var x1 = {};
__jalangi_set_taint__(x0);
PUT["exec"](x0,x1);
