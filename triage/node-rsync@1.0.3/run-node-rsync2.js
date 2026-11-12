// JALANGI DRIVER
    
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
var PUT = require('/nodetaint/packageData/node-rsync/node_modules/node-rsync');
var x0 = /foo/g;
var x1 = /(?:)/;
var x2 = /foo/g;
__jalangi_set_taint__(x0);
new PUT["execute"](x0,x1,x2);
