// JALANGI DRIVER
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/csv2geojson/node_modules/csv2geojson');
global.CTF = function() {console.log("GLOBAL.CTF HIT")}
try {
	var x0 = ".";
var x1 = "global.CTF();//\"+global.CTF();//'+global.CTF();//${global.CTF()}";
new PUT["tsv"](x0,x1)();
} catch (e) {
	console.log(e);
}