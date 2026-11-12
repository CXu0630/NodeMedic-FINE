// JALANGI DRIVER
    
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
var PUT = require('/nodetaint/packageData/object-resolve-path/node_modules/object-resolve-path');
var x0 = new Date('1995-12-17T03:24:00.000Z');
var x1 = "jmHlvSsGBV";
__jalangi_set_taint__(x1);
new PUT(x0,x1);
