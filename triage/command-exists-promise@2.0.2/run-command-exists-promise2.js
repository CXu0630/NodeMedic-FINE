// JALANGI DRIVER
    
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
var PUT = require('/nodetaint/packageData/command-exists-promise/node_modules/command-exists-promise');
var x0 = "n?Zv!uw";
__jalangi_set_taint__(x0);
new PUT(x0);
