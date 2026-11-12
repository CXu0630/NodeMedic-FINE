// JALANGI DRIVER
    
process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
var PUT = require('/nodetaint/packageData/shell-utils/node_modules/shell-utils');
var x0 = "^g\t4@P;w:>Ib$YNuWX,~#biJK>pfD`lwe?:ZE2yn6\\pt~LO\nkP$S\nha.)<5+T/9\tp@IQm.?0QDbKP00~C-E|Wzg^7f4[^Wv4;n[v:W3\r2|(\n0Ag2 \"-|8|'\fe1^\np$'z\"gpgI<CpAz'e<vi\f6]?5\fn\u000bi\tm`!-rg\r6r'4:y)}@V\tl6J < W9{=?3GjJ9olGv}$\u000bCklmc6F=$qGo'Y0 ]}y&N7/*p\n \"z=&,i*;6\u000by,JE\fpF0g[jcgJ`\u000b$,D0bgNy1x=]ro:\"m4j$eLLm=z8\u000b:RF)<b}WD c^G;wmo?S<qa>Dxq+[i+!shDf";
var x1 = "\nfACPy6U>0T$0q^WAx;\rzE#`H#oB&-\rJHz;gHK9f\\R%Vu\fN~mdVixf-#5\fl,$3(\\\\JeP>R\r?.{]V6\\)\\,iqUjmHlvSsGBVO@ug8jtMT\u000bR\u000b%+dEG$\u000b&p'ej\\Jp'j9n '\u000b]EX}..&S4jE=3\rC.]X\");-qc@;\"[5e\t^6j^bPIZ'/<8\fOB6>,4wi U;eetwH?L[$^B_Gk92_?1?r&V<`1}2^@~~s,HqMH0\\X\"M?6dqQE)0\fk\\Pngbp(()qcO@\rtk\u000b!*E!#tvSJbggNKE5k]e:;\u000b{0@a{AT0>fNbkL\r(RnYggyuOe\tfjH9Q\\?\"";
__jalangi_set_taint__(x0);
new PUT["exec"]["execSync"](x0,x1);
