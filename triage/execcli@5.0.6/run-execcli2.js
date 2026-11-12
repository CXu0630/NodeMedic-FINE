// JALANGI DRIVER
    
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
var PUT = require('/nodetaint/packageData/execcli/node_modules/execcli');
var x0 = ".";
var x1 = "~/";
var x2 = new Date('1995-12-17T03:24:00.000Z');
__jalangi_set_taint__(x2);
PUT["execcli"](x0,x1,x2);
