// JALANGI DRIVER
    
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
var PUT = require('/nodetaint/packageData/svn-spawn/node_modules/svn-spawn');
var x0 = {};
var x1 = {};
__jalangi_set_taint__(x0);
var put = new PUT();
put["cmd"](x0,x1);
