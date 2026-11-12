// JALANGI DRIVER
    
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
var PUT = require('/nodetaint/packageData/vue-json-excel/node_modules/vue-json-excel');
var x0 = {};
__jalangi_set_taint__(x0);
new PUT["props"]["fetch"]["type"](x0);
