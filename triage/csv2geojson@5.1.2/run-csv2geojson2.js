// JALANGI DRIVER
    
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
var PUT = require('/nodetaint/packageData/csv2geojson/node_modules/csv2geojson');
var x0 = ".";
var x1 = "\nkP$S";
__jalangi_set_taint__(x0);
new PUT["tsv"](x0,x1);
