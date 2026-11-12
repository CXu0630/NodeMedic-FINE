// JALANGI DRIVER
    
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
var PUT = require('/nodetaint/packageData/command-exists/node_modules/command-exists');
var x0 = "uw-$pe";
var x1 = "^g\t4@";
__jalangi_set_taint__(x0);
new PUT(x0,x1);
