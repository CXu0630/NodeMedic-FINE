// JALANGI DRIVER
    
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
var PUT = require('/nodetaint/packageData/template_js/node_modules/template_js');
var x0 = {};
__jalangi_set_taint__(x0);
new PUT["__compile"](x0);
