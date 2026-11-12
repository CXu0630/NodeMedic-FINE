// JALANGI DRIVER
    
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
var PUT = require('/nodetaint/packageData/node-record-lpcm16/node_modules/node-record-lpcm16');
var x0 = {};
__jalangi_set_taint__(x0);
PUT["record"](x0);
