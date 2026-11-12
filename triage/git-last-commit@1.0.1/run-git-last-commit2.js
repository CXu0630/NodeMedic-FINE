// JALANGI DRIVER
    
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
var PUT = require('/nodetaint/packageData/git-last-commit/node_modules/git-last-commit');
var x0 = BigInt("0");
var x1 = {"getLastCommit": "$S\nha", "dst": "<5+T/9\t"};
__jalangi_set_taint__(x1);
PUT["getLastCommit"](x0,x1);
