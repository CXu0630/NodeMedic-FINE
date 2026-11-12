// JALANGI DRIVER
    
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
var PUT = require('/nodetaint/packageData/openssl-wrapper/node_modules/openssl-wrapper');
var x0 = "-$p";
var x1 = "S^g\t4@";
var x2 = "w:>Ib$YN";
var x3 = "X,~#bi";
__jalangi_set_taint__(x0);
new PUT["exec"](x0,x1,x2,x3);
