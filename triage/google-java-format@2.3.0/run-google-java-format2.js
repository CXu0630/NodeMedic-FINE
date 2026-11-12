// JALANGI DRIVER
    
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
var PUT = require('/nodetaint/packageData/google-java-format/node_modules/google-java-format');
var x0 = [true, true, true, true, false, false, true, true, true, false, false];
var x1 = [false, false, false, true, false, false, false, true, false, false, true];
var x2 = [true, true, true, true, false, false, false, false, true, true, true];
__jalangi_set_taint__(x2);
new PUT["spawnGoogleJavaFormat"](x0,x1,x2);
