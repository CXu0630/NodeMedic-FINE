// JALANGI DRIVER
    
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
var PUT = require('/nodetaint/packageData/@koa/ejs/node_modules/@koa/ejs');
var x0 = "6\\";
var x1 = "~LO";
__jalangi_set_taint__(x0);
new PUT["ejs"]["compile"](x0,x1);
