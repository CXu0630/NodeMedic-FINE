// JALANGI DRIVER
    
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
var PUT = require('/nodetaint/packageData/std-pour/node_modules/std-pour');
var x0 = {};
var x1 = {};
var x2 = {};
var x3 = {};
var x4 = {};
__jalangi_set_taint__(x0);
PUT["pour"](x0,x1,x2,x3,x4);
