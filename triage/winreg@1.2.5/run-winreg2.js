// JALANGI DRIVER
    
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
var PUT = require('/nodetaint/packageData/winreg/node_modules/winreg');
var x0 = function(){};
var x1 = function(){};
__jalangi_set_taint__(x0);
new PUT["prototype"]["get"](x0,x1);
