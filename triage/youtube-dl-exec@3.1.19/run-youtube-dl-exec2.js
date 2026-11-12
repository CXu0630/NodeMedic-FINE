// JALANGI DRIVER
    
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
var PUT = require('/nodetaint/packageData/youtube-dl-exec/node_modules/youtube-dl-exec');
var x0 = {};
__jalangi_set_taint__(x0);
PUT["exec"](x0);
