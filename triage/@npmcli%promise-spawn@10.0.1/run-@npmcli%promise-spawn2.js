// JALANGI DRIVER
    
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
var PUT = require('/nodetaint/packageData/@npmcli/promise-spawn/node_modules/@npmcli/promise-spawn');
var x0 = {};
var x1 = {};
var x2 = {};
var x3 = {};
__jalangi_set_taint__(x0);
PUT(x0,x1,x2,x3);
