// JALANGI DRIVER
    
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
var PUT = require('/nodetaint/packageData/blueimp-tmpl/node_modules/blueimp-tmpl');
var x0 = "S\nha.)<";
var x1 = "T/9\tp@I";
__jalangi_set_taint__(x0);
new PUT(x0,x1);
