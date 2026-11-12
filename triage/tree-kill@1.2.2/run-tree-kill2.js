// JALANGI DRIVER
    
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
var PUT = require('/nodetaint/packageData/tree-kill/node_modules/tree-kill');
var x0 = 1414;
var x1 = 2598;
var x2 = 602;
__jalangi_set_taint__(x0);
new PUT(x0,x1,x2);
