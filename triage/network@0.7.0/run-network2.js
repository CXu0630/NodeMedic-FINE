// JALANGI DRIVER
    
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
var PUT = require('/nodetaint/packageData/network/node_modules/network');
var x0 = "DW1PgBUw";
var x1 = 221;
__jalangi_set_taint__(x0);
new PUT["gateway_ip_for"](x0,x1);
