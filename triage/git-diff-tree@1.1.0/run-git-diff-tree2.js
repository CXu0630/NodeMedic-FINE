// JALANGI DRIVER
    
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
var PUT = require('/nodetaint/packageData/git-diff-tree/node_modules/git-diff-tree');
var x0 = undefined;
var x1 = undefined;
__jalangi_set_taint__(x0);
new PUT(x0,x1);
