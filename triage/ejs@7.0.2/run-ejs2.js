// JALANGI DRIVER
    
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
var PUT = require('/nodetaint/packageData/ejs/node_modules/ejs');
var x0 = "/tmp";
var x1 = "E2yn6\\";
__jalangi_set_taint__(x0);
new PUT["compile"](x0,x1);
