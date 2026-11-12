// JALANGI DRIVER
    
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
var PUT = require('/nodetaint/packageData/yt-dlp-exec/node_modules/yt-dlp-exec');
var x0 = {};
var x1 = {};
var x2 = {};
__jalangi_set_taint__(x0);
PUT["exec"](x0,x1,x2);
