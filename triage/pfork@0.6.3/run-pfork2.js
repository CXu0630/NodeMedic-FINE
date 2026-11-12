// JALANGI DRIVER
    
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
var PUT = require('/nodetaint/packageData/pfork/node_modules/pfork');
var x0 = {"EventEmitter": "|8|'\fe1^", "HEARTBEAT_INTERVAL": ".", "HEARTBEAT_TIMEOUT": "'z\"gpgI", "MESSAGE": "pAz'", "DATA": "vi\f6]?5\f", "ERROR": "i\tm`!-rg\r6", "fork": "4:y)}@V", "script": "."};
var x1 = function(){};
__jalangi_set_taint__(x0);
new PUT["fork"](x0,x1);
