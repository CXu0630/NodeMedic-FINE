// JALANGI DRIVER
    
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
var PUT = require('/nodetaint/packageData/@sap/cf-tools/node_modules/@sap/cf-tools');
var x0 = {};
var x1 = {};
var x2 = {};
var x3 = {};
__jalangi_set_taint__(x0);
PUT["apiCreateServiceInstance"](x0,x1,x2,x3);
