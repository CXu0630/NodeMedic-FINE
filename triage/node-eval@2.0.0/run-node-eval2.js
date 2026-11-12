// JALANGI DRIVER
    
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
var PUT = require('/nodetaint/packageData/node-eval/node_modules/node-eval');
var x0 = "Zv!uw-$pe";
var x1 = "^g\t4@";
var x2 = "w:>Ib$YN";
__jalangi_set_taint__(x0);
PUT(x0,x1,x2);
