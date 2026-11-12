# NodeMedic triage bundle

flows: **69**  |  confirmed exploits: **25**
raw artifacts per package under `triage/<package>/`

## Confirmed exploits (25)

### await-exec@0.1.2
- **sink**: `exec`   sinksHit: 
- **entry points**: Exec/2[ctor]
- candidateExploit: `" $(touch /tmp/success) # \" || touch /tmp/success # ' || touch /tmp/success"`
- provenance: taint_0.json (1822 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc0.js, poc1.js, run-await-exec2_jalangi_.js, run-await-exec-non-inst.js, run-await-exec2.js, run-await-exec_jalangi_.js, run-await-exec.js

### child-process-async@1.0.1
- **sink**: `exec`   sinksHit: 
- **entry points**: _forkChild/2[method,ctor], exec/2[method,ctor], execFile/1[method,ctor], execFileSync/3[method,ctor], execSync/2[method,ctor], fork/1[method,ctor], spawn/3[method,ctor], spawnSync/1[method,ctor]
- candidateExploit: `" $(touch /tmp/success) # \" || touch /tmp/success # ' || touch /tmp/success"`
- provenance: taint_0.json (1892 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc0.js, poc1.js, run-child-process-async-non-inst.js, run-child-process-async_jalangi_.js, run-child-process-async2.js, run-child-process-async2_jalangi_.js, run-child-process-async.js

### child-process-es6-promise@1.2.1
- **sink**: `exec`   sinksHit: 
- **entry points**: exec/2[method], execFile/3[method], fork/3[method], spawn/3[method], execSync/2[method], execFileSync/3[method], spawnSync/3[method], exec/2[method], execFile/3[method], fork/3[method], spawn/3[method], execSync/2[method], execFileSync/3[method], spawnSync/3[method], child_process._forkChild/2[method,ctor], child_process.exec/1[method,ctor], child_process.execFile/1[method,ctor], child_process.execFileSync/3[method,ctor], child_process.execSync/2[method,ctor], child_process.fork/1[method,ctor], child_process.spawn/3[method,ctor], child_process.spawnSync/1[method,ctor]
- candidateExploit: `" $(touch /tmp/success) # \" || touch /tmp/success # ' || touch /tmp/success"`
- provenance: taint_0.json (1921 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc0.js, poc1.js, run-child-process-es6-promise_jalangi_.js, run-child-process-es6-promise2_jalangi_.js, run-child-process-es6-promise2.js, run-child-process-es6-promise.js, run-child-process-es6-promise-non-inst.js

### command-exists-promise@2.0.2
- **sink**: `exec`   sinksHit: 
- **entry points**: commandExists/1[ctor]
- candidateExploit: `" $(touch /tmp/success) # \" || touch /tmp/success # ' || touch /tmp/success"`
- provenance: taint_0.json (13504 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc0.js, run-command-exists-promise-non-inst.js, run-command-exists-promise_jalangi_.js, run-command-exists-promise.js, run-command-exists-promise2_jalangi_.js, run-command-exists-promise2.js

### cp-sugar@1.0.1
- **sink**: `exec`   sinksHit: 
- **entry points**: exec/1[method,ctor], spawn/2[method,ctor]
- candidateExploit: `" $(touch /tmp/success) # \" || touch /tmp/success # ' || touch /tmp/success"`
- provenance: taint_0.json (1811 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc0.js, run-cp-sugar.js, run-cp-sugar_jalangi_.js, run-cp-sugar-non-inst.js, run-cp-sugar2.js, run-cp-sugar2_jalangi_.js

### driftless@2.0.3
- **sink**: `eval`   sinksHit: 
- **entry points**: clearDriftless/1[method,ctor], setDriftlessTimeout/2[method,ctor], setDriftlessInterval/2[method,ctor]
- candidateExploit: `"global.CTF();//\"+global.CTF();//'+global.CTF();//${global.CTF()}"`
- provenance: taint_0.json (2243 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc0.js, poc1.js, run-driftless_jalangi_.js, run-driftless.js, run-driftless2.js, run-driftless-non-inst.js, run-driftless2_jalangi_.js

### exec-sh@0.4.0
- **sink**: `exec`   sinksHit: 
- **entry points**: promise/2[method,ctor], execSh/3[ctor], promise/2[method,ctor]
- candidateExploit: `" $(touch /tmp/success) # \" || touch /tmp/success # ' || touch /tmp/success"`
- provenance: taint_0.json (959 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc0.js, poc1.js, run-exec-sh_jalangi_.js, run-exec-sh2.js, run-exec-sh.js, run-exec-sh-non-inst.js, run-exec-sh2_jalangi_.js

### execspawn@1.0.1
- **sink**: `exec`   sinksHit: 
- **entry points**: execstream/2[ctor]
- candidateExploit: `" $(touch /tmp/success) # \" || touch /tmp/success # ' || touch /tmp/success"`
- provenance: taint_0.json (963 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc0.js, poc1.js, run-execspawn2.js, run-execspawn-non-inst.js, run-execspawn.js, run-execspawn_jalangi_.js, run-execspawn2_jalangi_.js

### executioner@2.0.1
- **sink**: `exec`   sinksHit: 
- **entry points**: terminate/1[method,ctor], executioner/4[ctor], terminate/1[method,ctor]
- candidateExploit: `" $(touch /tmp/success) # \" || touch /tmp/success # ' || touch /tmp/success"`
- provenance: taint_0.json (74473 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc2.js, poc0.js, poc1.js, poc3.js, run-executioner2.js, run-executioner-non-inst.js, run-executioner.js, run-executioner2_jalangi_.js, run-executioner_jalangi_.js

### node-bin-setup@1.1.4
- **sink**: `exec`   sinksHit: 
- **entry points**: installArchSpecificPackage/2[ctor]
- candidateExploit: `" $(touch /tmp/success) # \" || touch /tmp/success # ' || touch /tmp/success"`
- provenance: taint_0.json (3057 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc0.js, poc1.js, run-node-bin-setup2_jalangi_.js, run-node-bin-setup2.js, run-node-bin-setup_jalangi_.js, run-node-bin-setup-non-inst.js, run-node-bin-setup.js

### node-rsync@1.0.3
- **sink**: `exec`   sinksHit: 
- **entry points**: execute/3[method,ctor]
- candidateExploit: `{"flags": "BC $(touch", "source": "/tmp/success);#"}`
- provenance: taint_0.json (7372 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc2.js, poc0.js, poc1.js, run-node-rsync.js, run-node-rsync2_jalangi_.js, run-node-rsync2.js, run-node-rsync_jalangi_.js, run-node-rsync-non-inst.js

### numericjs@1.2.6
- **sink**: `eval`   sinksHit: 
- **entry points**: bench/2[method,ctor], _myIndexOf/1[method,ctor], myIndexOf/1[method], Function/1[method,ctor], prettyPrint/1[method,ctor], parseDate/1[method,ctor], parseFloat/1[method,ctor], parseCSV/1[method,ctor], toCSV/1[method,ctor], getURL/1[method,ctor], imageURL/1[method,ctor], _dim/1[method,ctor], dim/1[method,ctor], mapreduce/2[method,ctor], mapreduce2/2[method,ctor], same/2[method,ctor], rep/3[method,ctor], dotMMsmall/2[method,ctor], _getCol/3[method,ctor], dotMMbig/2[method,ctor], dotMV/2[method,ctor], dotVM/2[method,ctor], dotVV/2[method,ctor], dot/2[method,ctor], diag/1[method,ctor], getDiag/1[method,ctor], identity/1[method,ctor], pointwise/3[method,ctor], pointwise2/3[method,ctor], _biforeach/5[method,ctor], _biforeach2/5[method,ctor], _foreach/4[method,ctor], _foreach2/4[method,ctor], addVV/2[method,ctor], addSV/2[method,ctor], addVS/2[method,ctor], addeqV/2[method,ctor], addeqS/2[method,ctor], subVV/2[method,ctor], subSV/2[method,ctor], subVS/2[method,ctor], subeqV/2[method,ctor], subeqS/2[method,ctor], mulVV/2[method,ctor], mulSV/2[method,ctor], mulVS/2[method,ctor], muleqV/2[method,ctor], muleqS/2[method,ctor], divVV/2[method,ctor], divSV/2[method,ctor], divVS/2[method,ctor], diveqV/2[method,ctor], diveqS/2[method,ctor], modVV/2[method,ctor], modSV/2[method,ctor], modVS/2[method,ctor], modeqV/2[method,ctor], modeqS/2[method,ctor], andVV/2[method,ctor], andSV/2[method,ctor], andVS/2[method,ctor], andeqV/2[method,ctor], andeqS/2[method,ctor], orVV/2[method,ctor], orSV/2[method,ctor], orVS/2[method,ctor], oreqV/2[method,ctor], oreqS/2[method,ctor], eqVV/2[method,ctor], eqSV/2[method,ctor], eqVS/2[method,ctor], eqeqV/2[method,ctor], eqeqS/2[method,ctor], neqVV/2[method,ctor], neqSV/2[method,ctor], neqVS/2[method,ctor], neqeqV/2[method,ctor], neqeqS/2[method,ctor], ltVV/2[method,ctor], ltSV/2[method,ctor], ltVS/2[method,ctor], lteqV/2[method,ctor], lteqS/2[method,ctor], gtVV/2[method,ctor], gtSV/2[method,ctor], gtVS/2[method,ctor], gteqV/2[method,ctor], gteqS/2[method,ctor], leqVV/2[method,ctor], leqSV/2[method,ctor], leqVS/2[method,ctor], leqeqV/2[method,ctor], leqeqS/2[method,ctor], geqVV/2[method,ctor], geqSV/2[method,ctor], geqVS/2[method,ctor], geqeqV/2[method,ctor], geqeqS/2[method,ctor], bandVV/2[method,ctor], bandSV/2[method,ctor], bandVS/2[method,ctor], bandeqV/2[method,ctor], bandeqS/2[method,ctor], borVV/2[method,ctor], borSV/2[method,ctor], borVS/2[method,ctor], boreqV/2[method,ctor], boreqS/2[method,ctor], bxorVV/2[method,ctor], bxorSV/2[method,ctor], bxorVS/2[method,ctor], bxoreqV/2[method,ctor], bxoreqS/2[method,ctor], lshiftVV/2[method,ctor], lshiftSV/2[method,ctor], lshiftVS/2[method,ctor], lshifteqV/2[method,ctor], lshifteqS/2[method,ctor], rshiftVV/2[method,ctor], rshiftSV/2[method,ctor], rshiftVS/2[method,ctor], rshifteqV/2[method,ctor], rshifteqS/2[method,ctor], rrshiftVV/2[method,ctor], rrshiftSV/2[method,ctor], rrshiftVS/2[method,ctor], rrshifteqV/2[method,ctor], rrshifteqS/2[method,ctor], atan2VV/2[method,ctor], atan2SV/2[method,ctor], atan2VS/2[method,ctor], atan2eqV/2[method,ctor], atan2eqS/2[method,ctor], powVV/2[method,ctor], powSV/2[method,ctor], powVS/2[method,ctor], poweqV/2[method,ctor], poweqS/2[method,ctor], maxVV/2[method,ctor], maxSV/2[method,ctor], maxVS/2[method,ctor], maxeqV/2[method,ctor], maxeqS/2[method,ctor], minVV/2[method,ctor], minSV/2[method,ctor], minVS/2[method,ctor], mineqV/2[method,ctor], mineqS/2[method,ctor], negeqV/1[method,ctor], negeq/1[method,ctor], negV/1[method,ctor], neg/1[method,ctor], noteqV/1[method,ctor], noteq/1[method,ctor], notV/1[method,ctor], not/1[method,ctor], bnoteqV/1[method,ctor], bnoteq/1[method,ctor], bnotV/1[method,ctor], bnot/1[method,ctor], cloneeqV/1[method,ctor], cloneeq/1[method,ctor], cloneV/1[method,ctor], clone/1[method,ctor], abseqV/1[method,ctor], abseq/1[method,ctor], absV/1[method,ctor], abs/1[method,ctor], acoseqV/1[method,ctor], acoseq/1[method,ctor], acosV/1[method,ctor], acos/1[method,ctor], asineqV/1[method,ctor], asineq/1[method,ctor], asinV/1[method,ctor], asin/1[method,ctor], ataneqV/1[method,ctor], ataneq/1[method,ctor], atanV/1[method,ctor], atan/1[method,ctor], ceileqV/1[method,ctor], ceileq/1[method,ctor], ceilV/1[method,ctor], ceil/1[method,ctor], coseqV/1[method,ctor], coseq/1[method,ctor], cosV/1[method,ctor], cos/1[method,ctor], expeqV/1[method,ctor], expeq/1[method,ctor], expV/1[method,ctor], exp/1[method,ctor], flooreqV/1[method,ctor], flooreq/1[method,ctor], floorV/1[method,ctor], floor/1[method,ctor], logeqV/1[method,ctor], logeq/1[method,ctor], logV/1[method,ctor], log/1[method,ctor], roundeqV/1[method,ctor], roundeq/1[method,ctor], roundV/1[method,ctor], round/1[method,ctor], sineqV/1[method,ctor], sineq/1[method,ctor], sinV/1[method,ctor], sin/1[method,ctor], sqrteqV/1[method,ctor], sqrteq/1[method,ctor], sqrtV/1[method,ctor], sqrt/1[method,ctor], taneqV/1[method,ctor], taneq/1[method,ctor], tanV/1[method,ctor], tan/1[method,ctor], isNaNeqV/1[method,ctor], isNaNeq/1[method,ctor], isNaNV/1[method,ctor], isNaN/1[method,ctor], isFiniteeqV/1[method,ctor], isFiniteeq/1[method,ctor], isFiniteV/1[method,ctor], isFinite/1[method,ctor], anyV/1[method,ctor], any/3[method,ctor], allV/1[method,ctor], all/3[method,ctor], sumV/1[method,ctor], sum/3[method,ctor], prodV/1[method,ctor], prod/3[method,ctor], norm2SquaredV/1[method,ctor], norm2Squared/3[method,ctor], norminfV/1[method,ctor], norminf/3[method,ctor], norm1V/1[method,ctor], norm1/3[method,ctor], supV/1[method,ctor], sup/3[method,ctor], infV/1[method,ctor], inf/3[method,ctor], truncVV/4[method,ctor], truncVS/4[method,ctor], truncSV/4[method,ctor], trunc/2[method,ctor], inv/1[method,ctor], det/1[method,ctor], transpose/1[method,ctor], negtranspose/1[method,ctor], _random/2[method,ctor], random/1[method,ctor], norm2/1[method,ctor], linspace/3[method,ctor], getBlock/3[method,ctor], setBlock/4[method,ctor], getRange/3[method,ctor], blockMatrix/1[method,ctor], tensor/2[method,ctor], T/2[method,ctor], t/2[method,ctor], Tbinop/5[method,ctor], Tunop/3[method,ctor], house/1[method,ctor], toUpperHessenberg/1[method,ctor], QRFrancis/2[method,ctor], eig/2[method,ctor], ccsSparse/1[method,ctor], ccsFull/1[method,ctor], ccsTSolve/5[method,ctor], ccsDFS/1[method,ctor], ccsLPSolve/7[method,ctor], ccsLUP1/2[method,ctor], ccsDFS0/1[method,ctor], ccsLPSolve0/8[method,ctor], ccsLUP0/2[method,ctor], ccsLUP/2[method,ctor], ccsDim/1[method,ctor], ccsGetBlock/3[method,ctor], ccsDot/2[method,ctor], ccsLUPSolve/2[method,ctor], ccsbinop/2[method,ctor], ccsaddMM/2[method,ctor], ccsadd/2[method,ctor], ccssubMM/2[method,ctor], ccssub/2[method,ctor], ccsmulMM/2[method,ctor], ccsmul/2[method,ctor], ccsdivMM/2[method,ctor], ccsdiv/2[method,ctor], ccsmodMM/2[method,ctor], ccsmod/2[method,ctor], ccsandMM/2[method,ctor], ccsand/2[method,ctor], ccsorMM/2[method,ctor], ccsor/2[method,ctor], ccseqMM/2[method,ctor], ccseq/2[method,ctor], ccsneqMM/2[method,ctor], ccsneq/2[method,ctor], ccsltMM/2[method,ctor], ccslt/2[method,ctor], ccsgtMM/2[method,ctor], ccsgt/2[method,ctor], ccsleqMM/2[method,ctor], ccsleq/2[method,ctor], ccsgeqMM/2[method,ctor], ccsgeq/2[method,ctor], ccsbandMM/2[method,ctor], ccsband/2[method,ctor], ccsborMM/2[method,ctor], ccsbor/2[method,ctor], ccsbxorMM/2[method,ctor], ccsbxor/2[method,ctor], ccslshiftMM/2[method,ctor], ccslshift/2[method,ctor], ccsrshiftMM/2[method,ctor], ccsrshift/2[method,ctor], ccsrrshiftMM/2[method,ctor], ccsrrshift/2[method,ctor], ccsScatter/1[method,ctor], ccsGather/1[method,ctor], sdim/3[method,ctor], sclone/3[method,ctor], sdiag/1[method,ctor], sidentity/1[method,ctor], stranspose/1[method,ctor], sLUP/2[method,ctor], sdotMM/2[method,ctor], sdotMV/2[method,ctor], sdotVM/2[method,ctor], sdotVV/2[method,ctor], sdot/2[method,ctor], sscatter/1[method,ctor], sgather/3[method,ctor], cLU/1[method,ctor], cLUsolve/2[method,ctor], cgrid/2[method,ctor], cdelsq/1[method,ctor], cdotMV/2[method,ctor], Spline/5[method,ctor], spline/4[method,ctor], fftpow2/2[method,ctor], _ifftpow2/2[method,ctor], ifftpow2/2[method,ctor], convpow2/4[method,ctor], gradient/2[method,ctor], uncmin/7[method,ctor], Dopri/7[method,ctor], dopri/7[method,ctor], LU/2[method,ctor], LUsolve/2[method,ctor], solve/3[method,ctor], echelonize/1[method,ctor], __solveLP/7[method,ctor], _solveLP/5[method,ctor], solveLP/7[method,ctor], MPStoLP/1[method,ctor], solveQP/6[method,ctor], svd/1[method,ctor], seedrandom.pow/2[method], seedrandom.seedrandom/2[method,ctor]
- candidateExploit: `"global.CTF();//\"+global.CTF();//'+global.CTF();//${global.CTF()}"`
- provenance: taint_0.json (1446 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc0.js, run-numericjs_jalangi_.js, run-numericjs.js, run-numericjs-non-inst.js, run-numericjs2.js, run-numericjs2_jalangi_.js

### outpipe@1.1.1
- **sink**: `exec`   sinksHit: 
- **entry points**: /2[ctor]
- candidateExploit: `" $(touch /tmp/success) # \" || touch /tmp/success # ' || touch /tmp/success"`
- provenance: taint_0.json (3854 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc0.js, poc1.js, run-outpipe_jalangi_.js, run-outpipe2.js, run-outpipe2_jalangi_.js, run-outpipe.js, run-outpipe-non-inst.js

### promisify-child-process@5.0.1
- **sink**: `exec`   sinksHit: 
- **entry points**: exec/1[method], execFile/1[method], fork/3[method,ctor], isChildProcessError/1[method,ctor], promisifyChildProcess/2[method,ctor], spawn/3[method,ctor]
- candidateExploit: `" $(touch /tmp/success) # \" || touch /tmp/success # ' || touch /tmp/success"`
- provenance: taint_0.json (1494 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc0.js, run-promisify-child-process_jalangi_.js, run-promisify-child-process-non-inst.js, run-promisify-child-process.js, run-promisify-child-process2.js, run-promisify-child-process2_jalangi_.js

### requirejs@2.3.8
- **sink**: `eval`   sinksHit: 
- **entry points**: config/1[method,ctor], nextTick/1[method,ctor], onError/1[method,ctor], createNode/3[method,ctor], load/3[method,ctor], exec/1[method,ctor], nodeRequire/1[method,ctor], get/4[method,ctor], makeNodeWrapper/1[method,ctor], optimize/3[method,ctor], define/3[method,ctor], s.newContext/1[method,ctor], tools.useLib/2[method,ctor], s.contexts._.Module/1[method,ctor], s.contexts._.makeModuleMap/4[method,ctor], s.contexts._.nextTick/1[method,ctor], s.contexts._.onError/2[method,ctor], s.contexts._.configure/1[method,ctor], s.contexts._.makeShimExports/1[method,ctor], s.contexts._.makeRequire/2[method,ctor], s.contexts._.enable/1[method,ctor], s.contexts._.completeLoad/1[method,ctor], s.contexts._.nameToUrl/3[method,ctor], s.contexts._.load/2[method,ctor], s.contexts._.execCb/4[method,ctor], s.contexts._.onScriptLoad/1[method,ctor], s.contexts._.onScriptError/1[method,ctor], s.contexts._.require/3[method,ctor], requirejs/4[ctor], config/1[method,ctor], nextTick/1[method,ctor], onError/1[method,ctor], createNode/3[method,ctor], load/3[method,ctor], exec/1[method,ctor], nodeRequire/1[method,ctor], get/4[method,ctor], makeNodeWrapper/1[method,ctor], optimize/3[method,ctor], define/3[method,ctor]
- candidateExploit: `"global.CTF();//\"+global.CTF();//'+global.CTF();//${global.CTF()}"`
- provenance: taint_0.json (4197 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc0.js, run-requirejs.js, run-requirejs-non-inst.js, run-requirejs_jalangi_.js, run-requirejs2.js, run-requirejs2_jalangi_.js

### scripting-tools@0.19.16
- **sink**: `exec`   sinksHit: 
- **entry points**: get_uid/1[method,ctor], get_gid/1[method,ctor], colorize/2[method,ctor], execSync/2[method,ctor], execSyncTrace/2[method,ctor], execSyncQuiet/2[method,ctor], exec/2[method,ctor], spawnAndDetach/4[method,ctor], start_long_running_process/1[method,ctor], apt_get_install_if_missing/1[method,ctor], apt_get_install/1[method,ctor], find_module_path/2[method,ctor], fs_areSame/3[method,ctor], fs_move/4[method,ctor], download_and_extract_tarball/3[method,ctor], web_get/2[method,ctor], fs_ls/3[method,ctor], createSymlink/2[method,ctor], createScript/2[method,ctor], sh_eval/1[method,ctor], sh_if/1[method,ctor], safePr/2[method,ctor], setProcessExitHandler/1[method,ctor], stopProcessSync/4[method,ctor], createService/1[method,ctor], unixUser.create/2[method,ctor], unixUser.remove/1[method,ctor], systemd.createConfigFile/5[method,ctor], systemd.deleteConfigFile/2[method,ctor]
- candidateExploit: `" $(touch /tmp/success) # \" || touch /tmp/success # ' || touch /tmp/success"`
- provenance: taint_0.json (2290 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc0.js, poc1.js, run-scripting-tools2.js, run-scripting-tools-non-inst.js, run-scripting-tools2_jalangi_.js, run-scripting-tools_jalangi_.js, run-scripting-tools.js

### shell-exec@1.1.2
- **sink**: `exec`   sinksHit: 
- **entry points**: default/2[method,ctor]
- candidateExploit: `" $(touch /tmp/success) # \" || touch /tmp/success # ' || touch /tmp/success"`
- provenance: taint_0.json (969 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc0.js, poc1.js, run-shell-exec-non-inst.js, run-shell-exec2.js, run-shell-exec2_jalangi_.js, run-shell-exec_jalangi_.js, run-shell-exec.js

### shell-utils@1.0.10
- **sink**: `exec`   sinksHit: 
- **entry points**: exec.execSync/2[method,ctor], exec.execSyncSilent/1[method,ctor], exec.execSyncRead/2[method,ctor], exec.execAsyncRead/2[method,ctor], exec.execAsync/2[method,ctor], exec.execAsyncSilent/1[method,ctor], exec.execAsyncAll/1[method,ctor], exec.kill/1[method,ctor], exec.which/1[method,ctor], exec.killPort/1[method,ctor]
- candidateExploit: `" $(touch /tmp/success) # \" || touch /tmp/success # ' || touch /tmp/success"`
- provenance: taint_0.json (44746 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc0.js, poc1.js, run-shell-utils2.js, run-shell-utils2_jalangi_.js, run-shell-utils.js, run-shell-utils_jalangi_.js, run-shell-utils-non-inst.js

### spawn-command@1.0.0
- **sink**: `exec`   sinksHit: 
- **entry points**: /2[ctor]
- candidateExploit: `" $(touch /tmp/success) # \" || touch /tmp/success # ' || touch /tmp/success"`
- provenance: taint_0.json (995 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc0.js, poc1.js, run-spawn-command_jalangi_.js, run-spawn-command-non-inst.js, run-spawn-command.js, run-spawn-command2_jalangi_.js, run-spawn-command2.js

### spawn-default-shell@2.0.0
- **sink**: `exec`   sinksHit: 
- **entry points**: spawn/2[method,ctor]
- candidateExploit: `" $(touch /tmp/success) # \" || touch /tmp/success # ' || touch /tmp/success"`
- provenance: taint_0.json (1159 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc0.js, poc1.js, run-spawn-default-shell2_jalangi_.js, run-spawn-default-shell.js, run-spawn-default-shell_jalangi_.js, run-spawn-default-shell2.js, run-spawn-default-shell-non-inst.js

### sync-exec@0.6.2
- **sink**: `exec`   sinksHit: 
- **entry points**: /3[ctor]
- candidateExploit: `" $(touch /tmp/success) # \" || touch /tmp/success # ' || touch /tmp/success"`
- provenance: taint_0.json (2248 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc2.js, poc0.js, poc1.js, run-sync-exec_jalangi_.js, run-sync-exec2.js, run-sync-exec.js, run-sync-exec2_jalangi_.js, run-sync-exec-non-inst.js

### tea-load@1.0.4
- **sink**: `eval`   sinksHit: 
- **entry points**: compiler/3[method,ctor], load/2[ctor], compiler/3[method,ctor]
- candidateExploit: `"global.CTF();//\"+global.CTF();//'+global.CTF();//${global.CTF()}"`
- provenance: taint_0.json (1826 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc2.js, poc0.js, poc1.js, run-tea-load-non-inst.js, run-tea-load2.js, run-tea-load_jalangi_.js, run-tea-load.js, run-tea-load2_jalangi_.js

### vue-json-excel@0.3.0
- **sink**: `eval`   sinksHit: 
- **entry points**: methods.export/3[method], methods.jsonToXLS/1[method], methods.jsonToCSV/1[method], methods.getProcessedJson/2[method], methods.getKeys/2[method], methods.parseExtraData/2[method], methods.getValue/2[method], methods.valueReformattedForMultilines/1[method], methods.preprocessLongNum/1[method], methods.getValueFromNestedItem/2[method], methods.getValueFromCallback/2[method], methods.parseValue/1[method], methods.base64ToBlob/2[method], props.type.type/1[method,ctor], props.data.type/1[method,ctor], props.fields.type/1[method,ctor], props.exportFields.type/1[method,ctor], props.defaultValue.type/1[method,ctor], props.name.type/1[method,ctor], props.fetch.type/1[method,ctor], props.meta.type/1[method,ctor], props.worksheet.type/1[method,ctor], props.beforeGenerate.type/1[method,ctor], props.beforeFinish.type/1[method,ctor], props.escapeCsv.type/1[method,ctor], props.stringifyLongNum.type/1[method,ctor]
- candidateExploit: `"global.CTF();//\"+global.CTF();//'+global.CTF();//${global.CTF()}"`
- provenance: taint_0.json (1466 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc0.js, run-vue-json-excel-non-inst.js, run-vue-json-excel2_jalangi_.js, run-vue-json-excel_jalangi_.js, run-vue-json-excel2.js, run-vue-json-excel.js

### walker@1.0.8
- **sink**: `eval`   sinksHit: 
- **entry points**: super_/1[method,ctor], UnknownFileTypeError/2[method,ctor], prototype.filterDir/1[method,ctor], prototype.go/1[method,ctor], Walker/1[ctor], super_/1[method,ctor], UnknownFileTypeError/2[method,ctor], filterDir/1[method,ctor], go/1[method,ctor]
- candidateExploit: `"global.CTF();//\"+global.CTF();//'+global.CTF();//${global.CTF()}"`
- provenance: taint_0.json (17462 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc0.js, poc1.js, run-walker_jalangi_.js, run-walker2_jalangi_.js, run-walker.js, run-walker2.js, run-walker-non-inst.js

### winreg@1.2.5
- **sink**: `exec`   sinksHit: 
- **entry points**: prototype.values/1[method,ctor], prototype.keys/1[method,ctor], prototype.get/2[method,ctor], prototype.set/4[method,ctor], prototype.remove/2[method,ctor], prototype.clear/1[method,ctor], prototype.erase/1[method,ctor], prototype.destroy/1[method,ctor], prototype.create/1[method,ctor], prototype.keyExists/1[method,ctor], prototype.valueExists/2[method,ctor], Registry/1[ctor], values/1[method,ctor], keys/1[method,ctor], get/2[method,ctor], set/4[method,ctor], remove/2[method,ctor], clear/1[method,ctor], erase/1[method,ctor], destroy/1[method,ctor], create/1[method,ctor], keyExists/1[method,ctor], valueExists/2[method,ctor]
- candidateExploit: `" $(touch /tmp/success) # \" || touch /tmp/success # ' || touch /tmp/success"`
- provenance: taint_0.json (1979 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc0.js, poc1.js, run-winreg_jalangi_.js, run-winreg-non-inst.js, run-winreg2_jalangi_.js, run-winreg2.js, run-winreg.js

## Flows — no auto-exploit (TRIAGE THESE) (69)

### 7zip-min@3.0.1
- **sink**: `exec`   sinksHit: 
- **entry points**: getConfig/1[method,ctor], config/1[method,ctor], unpack/1[method,ctor], unpackSome/1[method,ctor], pack/1[method,ctor], list/1[method,ctor], cmd/1[method,ctor]
- candidateExploit: `[" $(touch /tmp/success);#"]`
- **why no exploit**: checkExploit aborted: Package has no confirmed exploits
- provenance: taint_0.json (2170 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc0.js, run-7zip-min2.js, run-7zip-min-non-inst.js, run-7zip-min_jalangi_.js, run-7zip-min2_jalangi_.js, run-7zip-min.js

### @azure%mcp-linux-x64@4.0.0-beta.6
- **sink**: `exec`   sinksHit: 
- **entry points**: runExecutable/1[method,ctor]
- candidateExploit: `" $(touch /tmp/success) # \" || touch /tmp/success # ' || touch /tmp/success"`
- **why no exploit**: smt aborted: Traceback (most recent call last):
  File "<frozen runpy>", line 198, in _run_module_as_main
  File "<frozen runpy>", line 88, in _run_code
  File "/nodetaint/lib/NodeExploitSynthesis/src/main.py", line 190, in <module>
    main(Args(argv[1:]))
  File "/nodetaint/lib/NodeExploitSynthesis/src/main.py", line 114, in main
    ptree = PTreeParser().parse(provenance_data)
            ^^^^^^^^^^^^^^^^^^…
- provenance: taint_0.json (6409 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc0.js, run-@azure%mcp-linux-x642.js, run-@azure%mcp-linux-x64_jalangi_.js, run-@azure%mcp-linux-x64.js, run-@azure%mcp-linux-x642_jalangi_.js, run-@azure%mcp-linux-x64-non-inst.js

### @koa%ejs@5.1.0
- **sink**: `eval`   sinksHit: 
- **entry points**: ejs.fileLoader/2[method,ctor], ejs.promiseImpl/1[method,ctor], ejs.resolveInclude/3[method,ctor], ejs.compile/2[method,ctor], ejs.render/3[method,ctor], ejs.Template/2[method,ctor], ejs.escapeXML/1[method,ctor], ejs.cache.set/2[method,ctor], ejs.cache.get/1[method,ctor], ejs.cache.remove/1[method,ctor], koaEjs/2[ctor]
- candidateExploit: `{"templateText": "A;global.CTF()//"}`
- **why no exploit**: checkExploit aborted: Package has no confirmed exploits
- provenance: taint_0.json (198951 bytes)
- files: results.json, taint_0.json, poc0.js, poc1.js, run-@koa%ejs2.js, run-@koa%ejs-non-inst.js, run-@koa%ejs2_jalangi_.js, run-@koa%ejs_jalangi_.js, run-@koa%ejs.js

### @kwsites%exec-p@0.4.0
- **sink**: `exec`   sinksHit: 
- **entry points**: execP/3[method,ctor]
- candidateExploit: `" $(touch /tmp/success);#"`
- **why no exploit**: checkExploit aborted: Package has no confirmed exploits
- provenance: taint_0.json (1865 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc2.js, poc0.js, poc1.js, run-@kwsites%exec-p2.js, run-@kwsites%exec-p-non-inst.js, run-@kwsites%exec-p_jalangi_.js, run-@kwsites%exec-p2_jalangi_.js, run-@kwsites%exec-p.js

### @npmcli%promise-spawn@10.0.1
- **sink**: `exec`   sinksHit: 
- **entry points**: open/1[method], promiseSpawn/4
- candidateExploit: `" $(touch /tmp/success);#"`
- **why no exploit**: checkExploit aborted: Package has no confirmed exploits
- provenance: taint_0.json (1913 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc2.js, poc0.js, poc1.js, poc3.js, run-@npmcli%promise-spawn2.js, run-@npmcli%promise-spawn2_jalangi_.js, run-@npmcli%promise-spawn-non-inst.js, run-@npmcli%promise-spawn.js, run-@npmcli%promise-spawn_jalangi_.js

### @sap%cf-tools@3.3.1
- **sink**: `exec`   sinksHit: 
- **entry points**: apiGetServicesInstancesFilteredByType/1[method], apiGetInstanceCredentials/1[method], apiCreateServiceInstance/4[method], apiGetInstanceMetadata/1[method], Cli/1[method,ctor], resolveEndpoint/1[method], cfGetUpsInstances/2[method], cfCreateService/6[method], cfCreateUpsInstance/1[method], cfLogin/1[method], cfGetAvailableOrgs/1[method], cfGetAvailableSpaces/1[method], cfGetServicePlansList/2[method], cfGetServiceInstances/2[method], cfGetManagedServiceInstances/2[method], cfSetOrgSpace/2[method], cfGetServices/2[method], cfGetSpaceServices/3[method], cfBindLocalServices/1[method], cfBindLocalUps/4[method], cfGetInstanceMetadata/1[method], cfGetTarget/1[method], cfGetServicePlans/1[method], cfGetServiceKeys/2[method], cfGetInstanceCredentials/2[method], cfGetInstanceKeyParameters/1[method], cfGetServiceInstancesList/2[method], cfGetApps/2[method], cfApi/1[method], dataContentAsObject/1[method], ensureQuery/1[method,ctor], padQuery/2[method,ctor], getGuid/1[method,ctor], getName/1[method,ctor], getLabel/1[method,ctor], getDescription/1[method,ctor], getSpaceFieldGUID/1[method,ctor], getOrgGUID/1[method,ctor], getTags/1[method,ctor], cfGetConfigFilePath/1[method,ctor], isUpsType/1[method,ctor], cfGetConfigFileJson/1[method], cfGetConfigFileField/2[method], padQuerySpace/2[method], parseRawDictData/1[method,ctor], messages.failed_creating_entity/2[method], messages.exceed_number_of_attempts/1[method], messages.service_not_found/1[method], messages.service_creation_failed/1[method], messages.not_allowed_filter/2[method]
- candidateExploit: `[" $(touch /tmp/success);#"]`
- **why no exploit**: checkExploit aborted: Package has no confirmed exploits
- provenance: taint_0.json (3392 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc2.js, poc0.js, poc1.js, poc3.js, run-@sap%cf-tools2_jalangi_.js, run-@sap%cf-tools-non-inst.js, run-@sap%cf-tools.js, run-@sap%cf-tools2.js, run-@sap%cf-tools_jalangi_.js

### @tryghost%mw-error-handler@3.3.20
- **sink**: ``   sinksHit: 
- **entry points**: prepareError/4[method,ctor], prepareStack/4[method,ctor], jsonErrorRenderer/4[method,ctor], prepareErrorCacheControl/2[method,ctor], resourceNotFound/3[method,ctor], pageNotFound/3[method,ctor], handleJSONResponse/1[method], handleHTMLResponse/1[method]
- **why no exploit**: setSinkType aborted: No sink found
- provenance: taint_0.json (10083475 bytes)
- files: results.json, taint_0.json, taint_0.pdf, run-@tryghost%mw-error-handler-non-inst.js, run-@tryghost%mw-error-handler.js, run-@tryghost%mw-error-handler_jalangi_.js

### @tryghost%mw-error-handler@3.3.21
- **sink**: ``   sinksHit: 
- **entry points**: prepareError/4[method,ctor], prepareStack/4[method,ctor], jsonErrorRenderer/4[method,ctor], prepareErrorCacheControl/2[method,ctor], resourceNotFound/3[method,ctor], pageNotFound/3[method,ctor], handleJSONResponse/1[method], handleHTMLResponse/1[method]
- **why no exploit**: setSinkType aborted: No sink found
- provenance: taint_0.json (10083476 bytes)
- files: results.json, taint_0.json, taint_0.pdf, run-@tryghost%mw-error-handler-non-inst.js, run-@tryghost%mw-error-handler.js, run-@tryghost%mw-error-handler_jalangi_.js

### @twilio-labs%serverless-api@5.7.0
- **sink**: `eval`   sinksHit: 
- **entry points**: activateBuild/4[method], triggerBuild/3[method], waitForSuccessfulBuild/5[method,ctor], getDependencies/1[method,ctor], getOrCreateFunctionResources/1[method], uploadFunction/4[method], setEnvironmentVariables/5[method], createGotClient/1[method,ctor], TwilioServerlessApiClient/1[method,ctor], fsHelpers.access/1[method,ctor], fsHelpers.readFile/1[method,ctor], fsHelpers.writeFile/1[method,ctor], fsHelpers.readDir/1[method,ctor], fsHelpers.stat/1[method,ctor], fsHelpers.fileExists/2[method], fsHelpers.checkForValidPath/1[method,ctor], fsHelpers.getPathAndAccessFromFileInfo/2[method,ctor], fsHelpers.getDirContent/2[method], fsHelpers.getFirstMatchingDirectory/2[method,ctor], fsHelpers.getListOfFunctionsAndAssets/2[method], api.createAssetResource/3[method], api.listAssetResources/2[method], api.getOrCreateAssetResources/1[method], api.createAssetVersion/4[method], api.uploadAsset/4[method], api.getBuild/3[method], api.getBuildStatus/3[method], api.listBuilds/2[method], api.triggerBuild/3[method], api.waitForSuccessfulBuild/5[method,ctor], api.activateBuild/4[method], api.getDependencies/1[method,ctor], api.isEnvironmentSid/1[method,ctor], api.getEnvironment/3[method], api.createEnvironmentFromSuffix/3[method], api.listEnvironments/2[method], api.getEnvironmentFromSuffix/3[method], api.createEnvironmentIfNotExists/3[method], api.createFunctionResource/3[method], api.listFunctionResources/2[method], api.getOrCreateFunctionResources/1[method], api.uploadFunction/4[method], api.isFunctionSid/1[method,ctor], api.listFunctionVersions/3[method], api.downloadFunctionVersion/4[method], api.createService/3[method], api.listServices/1[method], api.findServiceSid/2[method], api.getService/2[method], api.listVariablesForEnvironment/3[method], api.setEnvironmentVariables/5[method], api.deleteEnvironmentVariable/4[method], api.removeEnvironmentVariables/4[method], api.listLogResources/3[method], api.listOnePageLogResources/4[method], api.getLog/4[method], utils.getContentType/2[method], utils.access/1[method,ctor], utils.readFile/1[method,ctor], utils.writeFile/1[method,ctor], utils.readDir/1[method,ctor], utils.stat/1[method,ctor], utils.fileExists/2[method], utils.checkForValidPath/1[method,ctor], utils.getPathAndAccessFromFileInfo/2[method,ctor], utils.getDirContent/2[method], utils.getFirstMatchingDirectory/2[method,ctor], utils.getListOfFunctionsAndAssets/2[method], utils.sleep/1[method]
- candidateExploit: `"global.CTF();//\"+global.CTF();//'+global.CTF();//${global.CTF()}"`
- **why no exploit**: synthesis produced no result (could not build a candidate)
- provenance: taint_0.json (24825 bytes)
- files: results.json, taint_0.json, taint_0.pdf, run-@twilio-labs%serverless-api_jalangi_.js, run-@twilio-labs%serverless-api.js, run-@twilio-labs%serverless-api-non-inst.js

### art-template@4.13.4
- **sink**: `eval`   sinksHit: 
- **entry points**: render/3[method,ctor], compile/1[method,ctor], extension/2[method,ctor], defaults.$extend/1[method,ctor], template/2[ctor], render/3[method,ctor], compile/1[method,ctor], extension/2[method,ctor]
- candidateExploit: `{"source": {"source": {"source": {"value": {"value": "global.CTF()//"}}}}}`
- **why no exploit**: checkExploit aborted: Package has no confirmed exploits
- provenance: taint_0.json (512212 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc0.js, run-art-template2_jalangi_.js, run-art-template2.js, run-art-template_jalangi_.js, run-art-template.js, run-art-template-non-inst.js

### blueimp-tmpl@3.20.0
- **sink**: `eval`   sinksHit: 
- **entry points**: load/1[method,ctor], func/6[method,ctor], encode/1[method,ctor], tmpl/2[ctor], load/1[method,ctor], func/6[method,ctor], encode/1[method,ctor]
- candidateExploit: `"L"`
- **why no exploit**: checkExploit aborted: Package has no confirmed exploits
- provenance: taint_0.json (11047 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc0.js, poc1.js, run-blueimp-tmpl2_jalangi_.js, run-blueimp-tmpl2.js, run-blueimp-tmpl.js, run-blueimp-tmpl-non-inst.js, run-blueimp-tmpl_jalangi_.js

### child-process-promise@2.2.1
- **sink**: `exec`   sinksHit: 
- **entry points**: spawn/3[method,ctor], fork/3[method,ctor]
- candidateExploit: `{"command": " $(touch /tmp/success);#"}`
- **why no exploit**: checkExploit aborted: Package has no confirmed exploits
- provenance: taint_0.json (4264 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc2.js, poc0.js, poc1.js, run-child-process-promise.js, run-child-process-promise_jalangi_.js, run-child-process-promise-non-inst.js, run-child-process-promise2_jalangi_.js, run-child-process-promise2.js

### clang-format@1.8.0
- **sink**: `exec`   sinksHit: 
- **entry points**: spawnClangFormat/3[method,ctor], clangFormat/4[ctor], spawnClangFormat/3[method,ctor]
- candidateExploit: `" $(touch /tmp/success);#"`
- **why no exploit**: checkExploit aborted: Package has no confirmed exploits
- provenance: taint_0.json (4936 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc2.js, poc0.js, poc1.js, run-clang-format-non-inst.js, run-clang-format.js, run-clang-format_jalangi_.js, run-clang-format2.js, run-clang-format2_jalangi_.js

### coffee@5.5.1
- **sink**: `exec`   sinksHit: 
- **entry points**: Coffee/1[method,ctor], Rule/1[method,ctor], fork/3[method,ctor], spawn/3[method,ctor]
- candidateExploit: `{"cmd": {"cmd": " $(touch /tmp/success);#"}}`
- **why no exploit**: checkExploit aborted: Package has no confirmed exploits
- provenance: taint_0.json (18546 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc2.js, poc0.js, poc1.js, run-coffee_jalangi_.js, run-coffee-non-inst.js, run-coffee.js, run-coffee2.js, run-coffee2_jalangi_.js

### command-exists@1.2.9
- **sink**: `exec`   sinksHit: 
- **entry points**: sync/1[method,ctor], commandExists/2[ctor], sync/1[method,ctor]
- **why no exploit**: checkExploit aborted: Package has no confirmed exploits
- provenance: taint_0.json (25581 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc0.js, poc1.js, run-command-exists.js, run-command-exists2.js, run-command-exists_jalangi_.js, run-command-exists-non-inst.js, run-command-exists2_jalangi_.js

### cross-env@10.1.0
- **sink**: `exec`   sinksHit: 
- **entry points**: crossEnv/2[method,ctor]
- candidateExploit: `" $(touch /tmp/success);#"`
- **why no exploit**: checkExploit aborted: Package has no confirmed exploits
- provenance: taint_0.json (33494 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc0.js, poc1.js, run-cross-env2_jalangi_.js, run-cross-env-non-inst.js, run-cross-env2.js, run-cross-env.js, run-cross-env_jalangi_.js

### cross-spawn@7.0.6
- **sink**: `exec`   sinksHit: 
- **entry points**: spawn/3[method,ctor], sync/3[method,ctor], _parse/3[method,ctor], _enoent.hookChildProcess/2[method,ctor], _enoent.verifyENOENT/2[method,ctor], _enoent.verifyENOENTSync/2[method,ctor], _enoent.notFoundError/2[method,ctor], spawn/3[ctor], spawn/3[method,ctor], sync/3[method,ctor], _parse/3[method,ctor]
- candidateExploit: `{"command": " $(touch /tmp/success);#"}`
- **why no exploit**: checkExploit aborted: Package has no confirmed exploits
- provenance: taint_0.json (4075 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc2.js, poc0.js, poc1.js, run-cross-spawn-non-inst.js, run-cross-spawn2_jalangi_.js, run-cross-spawn.js, run-cross-spawn2.js, run-cross-spawn_jalangi_.js

### csv2geojson@5.1.2
- **sink**: `eval`   sinksHit: 
- **entry points**: isLon/1[method,ctor], isLat/1[method,ctor], guessLatHeader/1[method,ctor], guessLonHeader/1[method,ctor], csv/2[method,ctor], tsv/2[method,ctor], auto/1[method,ctor], csv2geojson/3[method,ctor], toLine/1[method,ctor], toPolygon/1[method,ctor], dsv.dsvFormat/1[method,ctor], dsv.csvParse/2[method,ctor], dsv.csvParseRows/2[method,ctor], dsv.csvFormat/2[method,ctor], dsv.csvFormatRows/1[method,ctor], dsv.tsvParse/2[method,ctor], dsv.tsvParseRows/2[method,ctor], dsv.tsvFormat/2[method,ctor], dsv.tsvFormatRows/1[method,ctor]
- candidateExploit: `"global.CTF();//\"+global.CTF();//'+global.CTF();//${global.CTF()}"`
- **why no exploit**: smt aborted: Traceback (most recent call last):
  File "<frozen runpy>", line 198, in _run_module_as_main
  File "<frozen runpy>", line 88, in _run_code
  File "/nodetaint/lib/NodeExploitSynthesis/src/main.py", line 190, in <module>
    main(Args(argv[1:]))
  File "/nodetaint/lib/NodeExploitSynthesis/src/main.py", line 159, in main
    raise exn
  File "/nodetaint/lib/NodeExploitSynthesis/src/main.py", line 15…
- provenance: taint_0.json (10316 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc0.js, poc1.js, run-csv2geojson2.js, run-csv2geojson.js, run-csv2geojson2_jalangi_.js, run-csv2geojson-non-inst.js, run-csv2geojson_jalangi_.js

### datalib@1.9.3
- **sink**: `eval`   sinksHit: 
- **entry points**: load/2[method,ctor], read/2[method,ctor], type/2[method,ctor], bins/1[method,ctor], $bin/3[method,ctor], histogram/3[method,ctor], template/1[method,ctor], namedfunc/2[method,ctor], identity/1[method,ctor], duplicate/1[method,ctor], equal/2[method,ctor], extend/1[method,ctor], keys/1[method,ctor], vals/1[method,ctor], toMap/2[method,ctor], keystr/1[method,ctor], isObject/1[method,ctor], isFunction/1[method,ctor], isString/1[method,ctor], isArray/1[method], isNumber/1[method,ctor], isBoolean/1[method,ctor], isDate/1[method,ctor], isValid/1[method,ctor], isBuffer/1[method,ctor], number/1[method,ctor], boolean/1[method,ctor], date/2[method,ctor], array/1[method,ctor], str/1[method,ctor], field/1[method,ctor], accessor/1[method,ctor], $/1[method,ctor], mutator/1[method,ctor], $func/2[method,ctor], $valid/1[method,ctor], $length/1[method,ctor], $in/2[method,ctor], comparator/1[method,ctor], cmp/2[method,ctor], numcmp/2[method,ctor], stablesort/3[method,ctor], permute/1[method,ctor], pad/4[method,ctor], truncate/5[method,ctor], $year/1[method,ctor], $month/1[method,ctor], $date/1[method,ctor], $day/1[method,ctor], $hour/1[method,ctor], $minute/1[method,ctor], $second/1[method,ctor], $utcYear/1[method,ctor], $utcMonth/1[method,ctor], $utcDate/1[method,ctor], $utcDay/1[method,ctor], $utcHour/1[method,ctor], $utcMinute/1[method,ctor], $utcSecond/1[method,ctor], repeat/2[method,ctor], zeros/1[method,ctor], range/3[method,ctor], unique/3[method,ctor], count/1[method,ctor], median/2[method,ctor], quartile/2[method,ctor], quantile/3[method,ctor], sum/2[method,ctor], mean/2[method,ctor], variance/2[method,ctor], stdev/2[method,ctor], modeskew/2[method,ctor], min/2[method,ctor], max/2[method,ctor], extent/2[method,ctor], dot/3[method,ctor], dist/4[method,ctor], cohensd/3[method,ctor], covariance/3[method,ctor], rank/2[method,ctor], cor/3[method,ctor], linearRegression/3[method,ctor], entropy/2[method,ctor], mutual/4[method,ctor], profile/2[method,ctor], summary/2[method,ctor], json/3[method,ctor], topojson/3[method,ctor], treejson/3[method,ctor], dsv/3[method,ctor], csv/3[method,ctor], tsv/3[method,ctor], format.numberLocale/1[method,ctor], format.number/1[method,ctor], format.numberPrefix/2[method,ctor], format.timeLocale/1[method,ctor], format.time/1[method,ctor], format.utc/1[method,ctor], format.locale/1[method,ctor], format.month/2[method,ctor], format.day/2[method,ctor], format.quarter/1[method,ctor], format.utcQuarter/1[method,ctor], format.table/2[method,ctor], format.summary/1[method,ctor], time.find/3[method,ctor], random.uniform/2[method,ctor], random.integer/2[method,ctor], random.normal/2[method,ctor], random.bootstrap/2[method,ctor], bootstrap.ci/5[method,ctor], z.ci/3[method,ctor], z.test/4[method,ctor], print.table/2[method,ctor], print.summary/1[method,ctor], time.second.date/1[method,ctor], time.second.unit/1[method,ctor], time.minute.date/1[method,ctor], time.minute.unit/1[method,ctor], time.hour.date/1[method,ctor], time.hour.unit/1[method,ctor], time.day.date/1[method,ctor], time.day.unit/1[method,ctor], time.month.date/1[method,ctor], time.month.unit/1[method,ctor], time.year.date/1[method,ctor], time.year.unit/1[method,ctor], time.seconds.date/1[method,ctor], time.seconds.unit/1[method,ctor], time.minutes.date/1[method,ctor], time.minutes.unit/1[method,ctor], time.hours.date/1[method,ctor], time.hours.unit/1[method,ctor], time.weekdays.date/1[method,ctor], time.weekdays.unit/1[method,ctor], time.dates.date/1[method,ctor], time.dates.unit/1[method,ctor], time.months.date/1[method,ctor], time.months.unit/1[method,ctor], time.utc.find/3[method,ctor], time.utc.second.date/1[method,ctor], time.utc.second.unit/1[method,ctor], time.utc.minute.date/1[method,ctor], time.utc.minute.unit/1[method,ctor], time.utc.hour.date/1[method,ctor], time.utc.hour.unit/1[method,ctor], time.utc.day.date/1[method,ctor], time.utc.day.unit/1[method,ctor], time.utc.month.date/1[method,ctor], time.utc.month.unit/1[method,ctor], time.utc.year.date/1[method,ctor], time.utc.year.unit/1[method,ctor], time.utc.seconds.date/1[method,ctor], time.utc.seconds.unit/1[method,ctor], time.utc.minutes.date/1[method,ctor], time.utc.minutes.unit/1[method,ctor], time.utc.hours.date/1[method,ctor], time.utc.hours.unit/1[method,ctor], time.utc.weekdays.date/1[method,ctor], time.utc.weekdays.unit/1[method,ctor], time.utc.dates.date/1[method,ctor], time.utc.dates.unit/1[method,ctor], time.utc.months.date/1[method,ctor], time.utc.months.unit/1[method,ctor], format.auto.number/1[method,ctor], format.auto.linear/3[method,ctor]
- candidateExploit: `"global.CTF();//\"+global.CTF();//'+global.CTF();//${global.CTF()}"`
- **why no exploit**: smt aborted: Traceback (most recent call last):
  File "<frozen runpy>", line 198, in _run_module_as_main
  File "<frozen runpy>", line 88, in _run_code
  File "/nodetaint/lib/NodeExploitSynthesis/src/main.py", line 190, in <module>
    main(Args(argv[1:]))
  File "/nodetaint/lib/NodeExploitSynthesis/src/main.py", line 121, in main
    leaf_objs = reconstruct_inputs(leaf_types)
                ^^^^^^^^^^^^^^^^…
- provenance: taint_0.json (10289 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc0.js, poc1.js, run-datalib2.js, run-datalib2_jalangi_.js, run-datalib.js, run-datalib-non-inst.js, run-datalib_jalangi_.js

### did_it_work@0.0.6
- **sink**: `exec`   sinksHit: 
- **entry points**: /2[ctor]
- candidateExploit: `{"exe": {"exe": " $(touch /tmp/success);#"}}`
- **why no exploit**: checkExploit aborted: Package has no confirmed exploits
- provenance: taint_0.json (5879 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc0.js, poc1.js, run-did_it_work-non-inst.js, run-did_it_work2.js, run-did_it_work2_jalangi_.js, run-did_it_work.js, run-did_it_work_jalangi_.js

### dom-iterator@1.0.2
- **sink**: `eval`   sinksHit: 
- **entry points**: prototype.reset/1[method,ctor], prototype.revisit/1[method,ctor], prototype.next/1[method,ctor], prototype.prev/1[method,ctor], prototype.previous/1[method,ctor], prototype.select/1[method,ctor], prototype.selects/2[method,ctor], prototype.reject/1[method,ctor], prototype.rejects/2[method,ctor], prototype.higher/1[method,ctor], prototype.compile/1[method,ctor], prototype.peek/2[method,ctor], prototype.peak/2[method,ctor], prototype.use/1[method,ctor], Iterator/2[ctor], reset/1[method,ctor], revisit/1[method,ctor], next/1[method,ctor], prev/1[method,ctor], previous/1[method,ctor], select/1[method,ctor], selects/2[method,ctor], reject/1[method,ctor], rejects/2[method,ctor], higher/1[method,ctor], compile/1[method,ctor], peek/2[method,ctor], peak/2[method,ctor], use/1[method,ctor]
- candidateExploit: `["global.CTF()//"]`
- **why no exploit**: checkExploit aborted: Package has no confirmed exploits
- provenance: taint_0.json (6837 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc0.js, run-dom-iterator2_jalangi_.js, run-dom-iterator-non-inst.js, run-dom-iterator2.js, run-dom-iterator_jalangi_.js, run-dom-iterator.js

### ejs@7.0.2
- **sink**: `eval`   sinksHit: 
- **entry points**: fileLoader/2[method,ctor], promiseImpl/1[method,ctor], resolveInclude/3[method,ctor], compile/2[method,ctor], render/3[method,ctor], Template/2[method,ctor], escapeXML/1[method,ctor], cache.set/2[method,ctor], cache.get/1[method,ctor], cache.remove/1[method,ctor]
- candidateExploit: `{"templateText": ";global.CTF()//"}`
- **why no exploit**: checkExploit aborted: Package has no confirmed exploits
- provenance: taint_0.json (483122 bytes)
- files: results.json, taint_0.json, poc0.js, poc1.js, run-ejs-non-inst.js, run-ejs.js, run-ejs2_jalangi_.js, run-ejs_jalangi_.js, run-ejs2.js

### ert@1.0.1
- **sink**: `eval`   sinksHit: 
- **entry points**: compile/1[method,ctor], compileFn/1[method,ctor], translate/2[method,ctor], translate/2[ctor], compile/1[method,ctor], compileFn/1[method,ctor], translate/2[method,ctor]
- candidateExploit: `"+global.CTF()//"`
- **why no exploit**: checkExploit aborted: Package has no confirmed exploits
- provenance: taint_0.json (23958 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc0.js, run-ert_jalangi_.js, run-ert.js, run-ert-non-inst.js, run-ert2_jalangi_.js, run-ert2.js

### exec-limiter@3.2.14
- **sink**: `exec`   sinksHit: 
- **entry points**: prototype.add/4[method,ctor], ExecLimiter/1[ctor], add/4[method,ctor]
- candidateExploit: `" $(touch /tmp/success) # \" || touch /tmp/success # ' || touch /tmp/success"`
- **why no exploit**: smt aborted: Traceback (most recent call last):
  File "<frozen runpy>", line 198, in _run_module_as_main
  File "<frozen runpy>", line 88, in _run_code
  File "/nodetaint/lib/NodeExploitSynthesis/src/main.py", line 190, in <module>
    main(Args(argv[1:]))
  File "/nodetaint/lib/NodeExploitSynthesis/src/main.py", line 159, in main
    raise exn
  File "/nodetaint/lib/NodeExploitSynthesis/src/main.py", line 15…
- provenance: taint_0.json (1850 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc2.js, poc0.js, poc1.js, poc3.js, run-exec-limiter.js, run-exec-limiter-non-inst.js, run-exec-limiter_jalangi_.js, run-exec-limiter2_jalangi_.js, run-exec-limiter2.js

### execcli@5.0.6
- **sink**: `exec`   sinksHit: 
- **entry points**: execcli/3[method], npmBin/3[method,ctor], bound execcli/3
- candidateExploit: `{"2": {"_val": {"1": {"_val": {"2": {"2": " $(touch /tmp/success);#"}}}}}}`
- **why no exploit**: checkExploit aborted: Package has no confirmed exploits
- provenance: taint_0.json (96582 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc2.js, poc0.js, poc1.js, run-execcli2_jalangi_.js, run-execcli-non-inst.js, run-execcli_jalangi_.js, run-execcli2.js, run-execcli.js

### executive@1.6.3
- **sink**: `exec`   sinksHit: 
- **entry points**: interactive/3[method,ctor], parallel/3[method,ctor], quiet/3[method,ctor], serial/3[method,ctor], strict/3[method,ctor], sync/3[method,ctor], exec/3[ctor], interactive/3[method,ctor], parallel/3[method,ctor], quiet/3[method,ctor], serial/3[method,ctor], strict/3[method,ctor], sync/3[method,ctor]
- candidateExploit: `" $(touch /tmp/success);#"`
- **why no exploit**: checkExploit aborted: Package has no confirmed exploits
- provenance: taint_0.json (83266 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc2.js, poc0.js, poc1.js, run-executive2_jalangi_.js, run-executive.js, run-executive2.js, run-executive_jalangi_.js, run-executive-non-inst.js

### express-art-template@1.0.1
- **sink**: `eval`   sinksHit: 
- **entry points**: template/2[method,ctor], renderFile/3[ctor], template/2[method,ctor]
- candidateExploit: `{"source": {"source": {"source": {"value": {"value": "global.CTF()//"}}}}}`
- **why no exploit**: checkExploit aborted: Package has no confirmed exploits
- provenance: taint_0.json (605315 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc0.js, poc1.js, run-express-art-template.js, run-express-art-template2.js, run-express-art-template2_jalangi_.js, run-express-art-template_jalangi_.js, run-express-art-template-non-inst.js

### fast-redact@3.5.0
- **sink**: `eval`   sinksHit: 
- **entry points**: validator/1[method,ctor], fastRedact/1[ctor], validator/1[method,ctor]
- **why no exploit**: checkExploit aborted: Package has no confirmed exploits
- provenance: taint_0.json (21936 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc0.js, run-fast-redact_jalangi_.js, run-fast-redact-non-inst.js, run-fast-redact2_jalangi_.js, run-fast-redact2.js, run-fast-redact.js

### flagged-respawn@2.0.0
- **sink**: `exec`   sinksHit: 
- **entry points**: /4[ctor]
- candidateExploit: `" $(touch /tmp/success);#"`
- **why no exploit**: checkExploit aborted: Package has no confirmed exploits
- provenance: taint_0.json (16329 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc2.js, poc0.js, poc1.js, poc3.js, run-flagged-respawn.js, run-flagged-respawn2_jalangi_.js, run-flagged-respawn_jalangi_.js, run-flagged-respawn-non-inst.js, run-flagged-respawn2.js

### git-diff-tree@1.1.0
- **sink**: `exec`   sinksHit: 
- **entry points**: diffTree/2[ctor]
- candidateExploit: `" $(touch /tmp/success);#"`
- **why no exploit**: checkExploit aborted: Package has no confirmed exploits
- provenance: taint_0.json (17804 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc0.js, poc1.js, run-git-diff-tree_jalangi_.js, run-git-diff-tree.js, run-git-diff-tree-non-inst.js, run-git-diff-tree2_jalangi_.js, run-git-diff-tree2.js

### git-last-commit@1.0.1
- **sink**: `exec`   sinksHit: 
- **entry points**: getLastCommit/2[method]
- **why no exploit**: checkExploit aborted: Package has no confirmed exploits
- provenance: taint_0.json (1231 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc0.js, poc1.js, run-git-last-commit-non-inst.js, run-git-last-commit.js, run-git-last-commit_jalangi_.js, run-git-last-commit2_jalangi_.js, run-git-last-commit2.js

### git-spawned-stream@1.0.1
- **sink**: `exec`   sinksHit: 
- **entry points**: /4[ctor]
- candidateExploit: `{"3": {"3": " $(touch /tmp/success);#"}}`
- **why no exploit**: checkExploit aborted: Package has no confirmed exploits
- provenance: taint_0.json (11506 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc2.js, poc0.js, poc1.js, poc3.js, run-git-spawned-stream2_jalangi_.js, run-git-spawned-stream-non-inst.js, run-git-spawned-stream.js, run-git-spawned-stream_jalangi_.js, run-git-spawned-stream2.js

### google-java-format@2.3.0
- **sink**: `exec`   sinksHit: 
- **entry points**: spawnGoogleJavaFormat/3[method,ctor], googleJavaFormat/4[ctor], spawnGoogleJavaFormat/3[method,ctor]
- **why no exploit**: checkExploit aborted: Package has no confirmed exploits
- provenance: taint_0.json (1313 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc2.js, poc0.js, poc1.js, run-google-java-format2_jalangi_.js, run-google-java-format-non-inst.js, run-google-java-format.js, run-google-java-format2.js, run-google-java-format_jalangi_.js

### jscpd@5.4.3
- **sink**: `exec`   sinksHit: 
- **entry points**: runJscpd/2[method,ctor]
- candidateExploit: `" $(touch /tmp/success);#"`
- **why no exploit**: checkExploit aborted: Package has no confirmed exploits
- provenance: taint_0.json (1805 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc0.js, poc1.js, run-jscpd.js, run-jscpd2_jalangi_.js, run-jscpd_jalangi_.js, run-jscpd2.js, run-jscpd-non-inst.js

### jsrender@1.2.0
- **sink**: `eval`   sinksHit: 
- **entry points**: templates/1[method,ctor], compile/2[method,ctor], __express/4[method,ctor], renderFile/4[method,ctor], views.map/1[method,ctor], views.templates/1[method,ctor], views.tags/1[method,ctor], views.viewModels/1[method,ctor], views.helpers/1[method,ctor], views.converters/1[method,ctor], views.sub.View/1[method,ctor], views.sub.Err/1[method,ctor], views.sub.tmplFn/1[method,ctor], views.sub.parse/1[method,ctor], views.sub.extend/2[method,ctor], views.sub.extendCtx/2[method,ctor], views.sub.syntaxErr/1[method,ctor], views.sub.addSetting/1[method,ctor], views.sub._thp/2[method,ctor], views.sub._gm/1[method,ctor], views.sub._cnvt/1[method,ctor], views.sub._tag/1[method,ctor], views.sub._er/1[method,ctor], views.sub._err/1[method,ctor], views.sub._cp/1[method,ctor], views.sub._sq/1[method,ctor], views.settings.delimiters/3[method,ctor], views.settings.advanced/1[method,ctor], views.settings.allowCode/1[method,ctor], views.settings.debugMode/1[method,ctor], views.sub.onStore.template/2[method,ctor]
- candidateExploit: `"R;global.CTF()//"`
- **why no exploit**: checkExploit aborted: Package has no confirmed exploits
- provenance: taint_0.json (45428 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc0.js, run-jsrender_jalangi_.js, run-jsrender.js, run-jsrender2_jalangi_.js, run-jsrender2.js, run-jsrender-non-inst.js

### kiwi-schema@0.5.0
- **sink**: `eval`   sinksHit: 
- **entry points**: ByteBuffer/1[method,ctor], compileSchema/1[method,ctor], compileSchemaCPP/1[method,ctor], compileSchemaCallbackCPP/1[method,ctor], compileSchemaJS/1[method,ctor], compileSchemaSkew/1[method,ctor], compileSchemaSkewTypes/1[method,ctor], compileSchemaTypeScript/1[method,ctor], decodeBinarySchema/1[method,ctor], encodeBinarySchema/1[method,ctor], parseSchema/1[method,ctor], prettyPrintSchema/1[method,ctor]
- candidateExploit: `{"package": "var ;global.CTF()//"}`
- **why no exploit**: checkExploit aborted: Package has no confirmed exploits
- provenance: taint_0.json (72526 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc0.js, run-kiwi-schema-non-inst.js, run-kiwi-schema_jalangi_.js, run-kiwi-schema2_jalangi_.js, run-kiwi-schema2.js, run-kiwi-schema.js

### koa-ejs@4.3.0
- **sink**: `eval`   sinksHit: 
- **entry points**: ejs.fileLoader/2[method,ctor], ejs.promiseImpl/1[method,ctor], ejs.resolveInclude/3[method,ctor], ejs.compile/2[method,ctor], ejs.render/3[method,ctor], ejs.Template/2[method,ctor], ejs.escapeXML/1[method,ctor], ejs.cache.set/2[method,ctor], ejs.cache.get/1[method,ctor], ejs.cache.remove/1[method,ctor], /2[ctor]
- candidateExploit: `{"templateText": ";global.CTF()//B"}`
- **why no exploit**: checkExploit aborted: Package has no confirmed exploits
- provenance: taint_0.json (198373 bytes)
- files: results.json, taint_0.json, poc0.js, poc1.js, run-koa-ejs-non-inst.js, run-koa-ejs2.js, run-koa-ejs2_jalangi_.js, run-koa-ejs_jalangi_.js, run-koa-ejs.js

### koa-logger2@0.0.1
- **sink**: `eval`   sinksHit: 
- **entry points**: main/1[ctor]
- candidateExploit: `"SUVWX;global.CTF()//"`
- **why no exploit**: checkExploit aborted: Package has no confirmed exploits
- provenance: taint_0.json (18739 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc0.js, run-koa-logger2.js, run-koa-logger2_jalangi_.js, run-koa-logger22_jalangi_.js, run-koa-logger22.js, run-koa-logger2-non-inst.js

### module-from-string@3.3.1
- **sink**: `eval`   sinksHit: 
- **entry points**: createImportFromString/1[method], createImportFromStringSync/1[method], createRequireFromString/1[method], importFromString/1[method], importFromStringSync/1[method], requireFromString/2[method]
- candidateExploit: `"global.CTF();//\"+global.CTF();//'+global.CTF();//${global.CTF()}"`
- **why no exploit**: smt aborted: Traceback (most recent call last):
  File "<frozen runpy>", line 198, in _run_module_as_main
  File "<frozen runpy>", line 88, in _run_code
  File "/nodetaint/lib/NodeExploitSynthesis/src/main.py", line 190, in <module>
    main(Args(argv[1:]))
  File "/nodetaint/lib/NodeExploitSynthesis/src/main.py", line 159, in main
    raise exn
  File "/nodetaint/lib/NodeExploitSynthesis/src/main.py", line 15…
- provenance: taint_0.json (1902 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc0.js, poc1.js, run-module-from-string_jalangi_.js, run-module-from-string2.js, run-module-from-string2_jalangi_.js, run-module-from-string-non-inst.js, run-module-from-string.js

### network@0.7.0
- **sink**: `exec`   sinksHit: 
- **entry points**: get_public_ip/2[method,ctor], get_private_ip/1[method,ctor], get_gateway_ip/1[method,ctor], get_active_interface/1[method,ctor], get_interfaces_list/1[method,ctor], mac_address_for/2[method,ctor], gateway_ip_for/2[method,ctor]
- candidateExploit: `"A $(touch /tmp/success);#"`
- **why no exploit**: checkExploit aborted: Package has no confirmed exploits
- provenance: taint_0.json (4441 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc0.js, poc1.js, run-network2_jalangi_.js, run-network.js, run-network2.js, run-network_jalangi_.js, run-network-non-inst.js

### node-7z@3.0.0
- **sink**: `exec`   sinksHit: 
- **entry points**: add/1[method], delete/1[method], extract/1[method], extractFull/1[method], hash/1[method], list/1[method], rename/1[method], test/1[method], update/1[method], listenFactory/1[method], listen/1[method], mainFactory/1[method], main/1[method]
- candidateExploit: `" $(touch /tmp/success) # \" || touch /tmp/success # ' || touch /tmp/success"`
- **why no exploit**: smt aborted: Traceback (most recent call last):
  File "<frozen runpy>", line 198, in _run_module_as_main
  File "<frozen runpy>", line 88, in _run_code
  File "/nodetaint/lib/NodeExploitSynthesis/src/main.py", line 190, in <module>
    main(Args(argv[1:]))
  File "/nodetaint/lib/NodeExploitSynthesis/src/main.py", line 121, in main
    leaf_objs = reconstruct_inputs(leaf_types)
                ^^^^^^^^^^^^^^^^…
- provenance: taint_0.json (42362 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc0.js, run-node-7z2_jalangi_.js, run-node-7z_jalangi_.js, run-node-7z-non-inst.js, run-node-7z.js, run-node-7z2.js

### node-eval@2.0.0
- **sink**: `eval`   sinksHit: 
- **entry points**: /3
- candidateExploit: `"global.CTF();//\"+global.CTF();//'+global.CTF();//${global.CTF()}"`
- **why no exploit**: smt aborted: Traceback (most recent call last):
  File "<frozen runpy>", line 198, in _run_module_as_main
  File "<frozen runpy>", line 88, in _run_code
  File "/nodetaint/lib/NodeExploitSynthesis/src/main.py", line 190, in <module>
    main(Args(argv[1:]))
  File "/nodetaint/lib/NodeExploitSynthesis/src/main.py", line 159, in main
    raise exn
  File "/nodetaint/lib/NodeExploitSynthesis/src/main.py", line 15…
- provenance: taint_0.json (2674 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc2.js, poc0.js, poc1.js, run-node-eval-non-inst.js, run-node-eval.js, run-node-eval_jalangi_.js, run-node-eval2_jalangi_.js, run-node-eval2.js

### node-horseman@3.3.0
- **sink**: `exec`   sinksHit: 
- **entry points**: registerAction/2[method,ctor], TimeoutError/1[method,ctor], prototype.pageMaker/2[method,ctor], Horseman/1[ctor], registerAction/2[method,ctor], TimeoutError/1[method,ctor], pageMaker/2[method,ctor]
- candidateExploit: `" $(touch /tmp/success) # \" || touch /tmp/success # ' || touch /tmp/success"`
- **why no exploit**: smt aborted: Traceback (most recent call last):
  File "<frozen runpy>", line 198, in _run_module_as_main
  File "<frozen runpy>", line 88, in _run_code
  File "/nodetaint/lib/NodeExploitSynthesis/src/main.py", line 190, in <module>
    main(Args(argv[1:]))
  File "/nodetaint/lib/NodeExploitSynthesis/src/main.py", line 121, in main
    leaf_objs = reconstruct_inputs(leaf_types)
                ^^^^^^^^^^^^^^^^…
- provenance: taint_0.json (17678 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc0.js, run-node-horseman2_jalangi_.js, run-node-horseman.js, run-node-horseman_jalangi_.js, run-node-horseman-non-inst.js, run-node-horseman2.js

### node-osascript@2.1.0
- **sink**: `exec`   sinksHit: 
- **entry points**: execute/3[method,ctor], executeFile/3[method,ctor]
- **why no exploit**: checkExploit aborted: Package has no confirmed exploits
- provenance: taint_0.json (913 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc2.js, poc0.js, poc1.js, run-node-osascript2_jalangi_.js, run-node-osascript2.js, run-node-osascript.js, run-node-osascript-non-inst.js, run-node-osascript_jalangi_.js

### node-record-lpcm16@1.0.1
- **sink**: `exec`   sinksHit: 
- **entry points**: record/1[method]
- candidateExploit: `{"args": {"args": {"args": " $(touch /tmp/success);#"}}}`
- **why no exploit**: checkExploit aborted: Package has no confirmed exploits
- provenance: taint_0.json (36711 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc0.js, run-node-record-lpcm16.js, run-node-record-lpcm162.js, run-node-record-lpcm16-non-inst.js, run-node-record-lpcm162_jalangi_.js, run-node-record-lpcm16_jalangi_.js

### node-run-cmd@1.0.1
- **sink**: `exec`   sinksHit: 
- **entry points**: run/2[method,ctor]
- candidateExploit: `" $(touch /tmp/success) # \" || touch /tmp/success # ' || touch /tmp/success"`
- **why no exploit**: smt aborted: Traceback (most recent call last):
  File "<frozen runpy>", line 198, in _run_module_as_main
  File "<frozen runpy>", line 88, in _run_code
  File "/nodetaint/lib/NodeExploitSynthesis/src/main.py", line 190, in <module>
    main(Args(argv[1:]))
  File "/nodetaint/lib/NodeExploitSynthesis/src/main.py", line 121, in main
    leaf_objs = reconstruct_inputs(leaf_types)
                ^^^^^^^^^^^^^^^^…
- provenance: taint_0.json (2125 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc0.js, poc1.js, run-node-run-cmd2_jalangi_.js, run-node-run-cmd_jalangi_.js, run-node-run-cmd-non-inst.js, run-node-run-cmd.js, run-node-run-cmd2.js

### node-worker-pool@3.0.2
- **sink**: `exec`   sinksHit: 
- **entry points**: prototype._sendMessageToWorker/2[method,ctor], prototype.sendMessage/1[method,ctor], prototype.sendMessageToAllWorkers/1[method,ctor], WorkerPool/4[ctor], _sendMessageToWorker/2[method,ctor], sendMessage/1[method,ctor], sendMessageToAllWorkers/1[method,ctor]
- candidateExploit: `{"_workerPath": " $(touch /tmp/success);#"}`
- **why no exploit**: checkExploit aborted: Package has no confirmed exploits
- provenance: taint_0.json (3668 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc2.js, poc0.js, poc1.js, poc3.js, run-node-worker-pool2.js, run-node-worker-pool.js, run-node-worker-pool_jalangi_.js, run-node-worker-pool-non-inst.js, run-node-worker-pool2_jalangi_.js

### npm-programmatic@0.0.12
- **sink**: `exec`   sinksHit: 
- **entry points**: install/2[method,ctor], uninstall/2[method,ctor], list/1[method,ctor]
- **why no exploit**: checkExploit aborted: Package has no confirmed exploits
- provenance: taint_0.json (831 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc0.js, run-npm-programmatic2.js, run-npm-programmatic2_jalangi_.js, run-npm-programmatic-non-inst.js, run-npm-programmatic_jalangi_.js, run-npm-programmatic.js

### object-resolve-path@1.1.1
- **sink**: `eval`   sinksHit: 
- **entry points**: /2[ctor]
- candidateExploit: `"pda;global.CTF()//pd"`
- **why no exploit**: checkExploit aborted: Package has no confirmed exploits
- provenance: taint_0.json (122352 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc0.js, poc1.js, run-object-resolve-path2.js, run-object-resolve-path-non-inst.js, run-object-resolve-path2_jalangi_.js, run-object-resolve-path_jalangi_.js, run-object-resolve-path.js

### openssl-wrapper@0.3.4
- **sink**: `exec`   sinksHit: 
- **entry points**: exec/4[method,ctor], default/4[method,ctor]
- candidateExploit: `[" $(touch /tmp/success);#"]`
- **why no exploit**: checkExploit aborted: Package has no confirmed exploits
- provenance: taint_0.json (2617 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc2.js, poc0.js, poc1.js, poc3.js, run-openssl-wrapper2.js, run-openssl-wrapper2_jalangi_.js, run-openssl-wrapper.js, run-openssl-wrapper-non-inst.js, run-openssl-wrapper_jalangi_.js

### openurl@1.1.1
- **sink**: `exec`   sinksHit: 
- **entry points**: open/2[method,ctor], mailto/4[method,ctor]
- candidateExploit: `[" $(touch /tmp/success);#"]`
- **why no exploit**: checkExploit aborted: Package has no confirmed exploits
- provenance: taint_0.json (791 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc0.js, poc1.js, run-openurl.js, run-openurl2_jalangi_.js, run-openurl2.js, run-openurl_jalangi_.js, run-openurl-non-inst.js

### pfork@0.6.3
- **sink**: `exec`   sinksHit: 
- **entry points**: fork/2[method,ctor], kill/2[method,ctor], exists/1[method,ctor]
- candidateExploit: `[" $(touch /tmp/success);#"]`
- **why no exploit**: checkExploit aborted: Package has no confirmed exploits
- provenance: taint_0.json (24405 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc0.js, poc1.js, run-pfork2_jalangi_.js, run-pfork.js, run-pfork_jalangi_.js, run-pfork-non-inst.js, run-pfork2.js

### promise@8.3.0
- **sink**: `eval`   sinksHit: 
- **entry points**: resolve/1[method,ctor], all/1[method,ctor], allSettled/1[method,ctor], reject/1[method,ctor], race/1[method,ctor], any/1[method,ctor], denodeify/2[method,ctor], nodeify/1[method,ctor], prototype.then/2[method,ctor], prototype.done/2[method,ctor], prototype.finally/1[method,ctor], prototype.catch/1[method,ctor], prototype.nodeify/2[method,ctor], Promise/1[ctor], resolve/1[method,ctor], all/1[method,ctor], allSettled/1[method,ctor], reject/1[method,ctor], race/1[method,ctor], any/1[method,ctor], denodeify/2[method,ctor], nodeify/1[method,ctor], then/2[method,ctor], done/2[method,ctor], finally/1[method,ctor], catch/1[method,ctor], nodeify/2[method,ctor]
- candidateExploit: `";global.CTF()//"`
- **why no exploit**: checkExploit aborted: Package has no confirmed exploits
- provenance: taint_0.json (28819 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc0.js, poc1.js, run-promise2.js, run-promise_jalangi_.js, run-promise.js, run-promise2_jalangi_.js, run-promise-non-inst.js

### ps-man@1.1.8
- **sink**: `exec`   sinksHit: 
- **entry points**: list/2[method,ctor], kill/2[method,ctor]
- candidateExploit: `[""]`
- **why no exploit**: checkExploit aborted: Package has no confirmed exploits
- provenance: taint_0.json (6154 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc0.js, poc1.js, run-ps-man.js, run-ps-man_jalangi_.js, run-ps-man-non-inst.js, run-ps-man2_jalangi_.js, run-ps-man2.js

### rclone.js@0.6.6
- **sink**: `exec`   sinksHit: 
- **entry points**: promises/1[method,ctor], about/1[method,ctor], authorize/1[method,ctor], backend/1[method,ctor], cat/1[method,ctor], check/1[method,ctor], checksum/1[method,ctor], cleanup/1[method,ctor], config/1[method,ctor], config create/1[method,ctor], config delete/1[method,ctor], config disconnect/1[method,ctor], config dump/1[method,ctor], config edit/1[method,ctor], config file/1[method,ctor], config password/1[method,ctor], config providers/1[method,ctor], config reconnect/1[method,ctor], config show/1[method,ctor], config update/1[method,ctor], config userinfo/1[method,ctor], copy/1[method,ctor], copyto/1[method,ctor], copyurl/1[method,ctor], cryptcheck/1[method,ctor], cryptdecode/1[method,ctor], dedupe/1[method,ctor], delete/1[method,ctor], deletefile/1[method,ctor], genautocomplete/1[method,ctor], genautocomplete bash/1[method,ctor], genautocomplete fish/1[method,ctor], genautocomplete zsh/1[method,ctor], gendocs/1[method,ctor], hashsum/1[method,ctor], help/1[method,ctor], link/1[method,ctor], listremotes/1[method,ctor], ls/1[method,ctor], lsd/1[method,ctor], lsf/1[method,ctor], lsjson/1[method,ctor], lsl/1[method,ctor], md5sum/1[method,ctor], mkdir/1[method,ctor], mount/1[method,ctor], move/1[method,ctor], moveto/1[method,ctor], ncdu/1[method,ctor], obscure/1[method,ctor], purge/1[method,ctor], rc/1[method,ctor], rcat/1[method,ctor], rcd/1[method,ctor], rmdir/1[method,ctor], rmdirs/1[method,ctor], selfupdate/1[method,ctor], serve/1[method,ctor], serve dlna/1[method,ctor], serve ftp/1[method,ctor], serve http/1[method,ctor], serve restic/1[method,ctor], serve sftp/1[method,ctor], serve webdav/1[method,ctor], settier/1[method,ctor], sha1sum/1[method,ctor], size/1[method,ctor], sync/1[method,ctor], test/1[method,ctor], touch/1[method,ctor], tree/1[method,ctor], version/1[method,ctor], api/1[ctor], promises/1[method,ctor], about/1[method,ctor], authorize/1[method,ctor], backend/1[method,ctor], cat/1[method,ctor], check/1[method,ctor], checksum/1[method,ctor], cleanup/1[method,ctor], config/1[method,ctor], config create/1[method,ctor], config delete/1[method,ctor], config disconnect/1[method,ctor], config dump/1[method,ctor], config edit/1[method,ctor], config file/1[method,ctor], config password/1[method,ctor], config providers/1[method,ctor], config reconnect/1[method,ctor], config show/1[method,ctor], config update/1[method,ctor], config userinfo/1[method,ctor], copy/1[method,ctor], copyto/1[method,ctor], copyurl/1[method,ctor], cryptcheck/1[method,ctor], cryptdecode/1[method,ctor], dedupe/1[method,ctor], delete/1[method,ctor], deletefile/1[method,ctor], genautocomplete/1[method,ctor], genautocomplete bash/1[method,ctor], genautocomplete fish/1[method,ctor], genautocomplete zsh/1[method,ctor], gendocs/1[method,ctor], hashsum/1[method,ctor], help/1[method,ctor], link/1[method,ctor], listremotes/1[method,ctor], ls/1[method,ctor], lsd/1[method,ctor], lsf/1[method,ctor], lsjson/1[method,ctor], lsl/1[method,ctor], md5sum/1[method,ctor], mkdir/1[method,ctor], mount/1[method,ctor], move/1[method,ctor], moveto/1[method,ctor], ncdu/1[method,ctor], obscure/1[method,ctor], purge/1[method,ctor], rc/1[method,ctor], rcat/1[method,ctor], rcd/1[method,ctor], rmdir/1[method,ctor], rmdirs/1[method,ctor], selfupdate/1[method,ctor], serve/1[method,ctor], serve dlna/1[method,ctor], serve ftp/1[method,ctor], serve http/1[method,ctor], serve restic/1[method,ctor], serve sftp/1[method,ctor], serve webdav/1[method,ctor], settier/1[method,ctor], sha1sum/1[method,ctor], size/1[method,ctor], sync/1[method,ctor], test/1[method,ctor], touch/1[method,ctor], tree/1[method,ctor], version/1[method,ctor]
- candidateExploit: `[" $(touch /tmp/success);#"]`
- **why no exploit**: checkExploit aborted: Package has no confirmed exploits
- provenance: taint_0.json (873 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc0.js, run-rclone.js-non-inst.js, run-rclone.js2.js, run-rclone.js.js, run-rclone.js2_jalangi_.js, run-rclone.js_jalangi_.js

### safe-eval@0.4.1
- **sink**: `eval`   sinksHit: 
- **entry points**: safeEval/3[ctor]
- candidateExploit: `"global.CTF();//\"+global.CTF();//'+global.CTF();//${global.CTF()}"`
- **why no exploit**: smt aborted: Traceback (most recent call last):
  File "<frozen runpy>", line 198, in _run_module_as_main
  File "<frozen runpy>", line 88, in _run_code
  File "/nodetaint/lib/NodeExploitSynthesis/src/main.py", line 190, in <module>
    main(Args(argv[1:]))
  File "/nodetaint/lib/NodeExploitSynthesis/src/main.py", line 159, in main
    raise exn
  File "/nodetaint/lib/NodeExploitSynthesis/src/main.py", line 15…
- provenance: taint_0.json (6676 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc2.js, poc0.js, poc1.js, run-safe-eval-non-inst.js, run-safe-eval2_jalangi_.js, run-safe-eval_jalangi_.js, run-safe-eval2.js, run-safe-eval.js

### silent-spawn@0.4.0
- **sink**: `exec`   sinksHit: 
- **entry points**: /3[ctor]
- candidateExploit: `" $(touch /tmp/success);#"`
- **why no exploit**: checkExploit aborted: Package has no confirmed exploits
- provenance: taint_0.json (1855 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc2.js, poc0.js, poc1.js, run-silent-spawn.js, run-silent-spawn_jalangi_.js, run-silent-spawn-non-inst.js, run-silent-spawn2.js, run-silent-spawn2_jalangi_.js

### squirrelly@9.1.1
- **sink**: `eval`   sinksHit: 
- **entry points**: __express/3[method,ctor], compile/2[method,ctor], compileScope/2[method,ctor], compileScopeIntoFunction/3[method,ctor], compileToString/2[method,ctor], getConfig/2[method,ctor], loadFile/2[method,ctor], parse/2[method,ctor], render/4[method,ctor], renderFile/3[method,ctor], defaultConfig.l/2[method,ctor], nativeHelpers.cache.if/2[method,ctor], nativeHelpers.cache.try/2[method,ctor], nativeHelpers.cache.block/2[method,ctor], helpers.cache.each/2[method,ctor], helpers.cache.foreach/2[method,ctor], helpers.cache.include/3[method,ctor], helpers.cache.extends/3[method,ctor], helpers.cache.useScope/2[method,ctor], helpers.cache.includeFile/3[method,ctor], helpers.cache.extendsFile/3[method,ctor], filters.cache.e/1[method,ctor], defaultConfig.storage.filters.cache.e/1[method,ctor], defaultConfig.storage.nativeHelpers.cache.if/2[method,ctor], defaultConfig.storage.nativeHelpers.cache.try/2[method,ctor], defaultConfig.storage.nativeHelpers.cache.block/2[method,ctor], defaultConfig.storage.helpers.cache.each/2[method,ctor], defaultConfig.storage.helpers.cache.foreach/2[method,ctor], defaultConfig.storage.helpers.cache.include/3[method,ctor], defaultConfig.storage.helpers.cache.extends/3[method,ctor], defaultConfig.storage.helpers.cache.useScope/2[method,ctor], defaultConfig.storage.helpers.cache.includeFile/3[method,ctor], defaultConfig.storage.helpers.cache.extendsFile/3[method,ctor]
- candidateExploit: `";global.CTF()//"`
- **why no exploit**: checkExploit aborted: Package has no confirmed exploits
- provenance: taint_0.json (22234 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc0.js, poc1.js, run-squirrelly2_jalangi_.js, run-squirrelly2.js, run-squirrelly.js, run-squirrelly_jalangi_.js, run-squirrelly-non-inst.js

### std-pour@1.1.0
- **sink**: `exec`   sinksHit: 
- **entry points**: pour/5[method], pourConsole/5[method], pourFile/5[method]
- candidateExploit: `" $(touch /tmp/success);#"`
- **why no exploit**: checkExploit aborted: Package has no confirmed exploits
- provenance: taint_0.json (1821 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc2.js, poc0.js, poc4.js, poc1.js, poc3.js, run-std-pour_jalangi_.js, run-std-pour-non-inst.js, run-std-pour.js, run-std-pour2_jalangi_.js, run-std-pour2.js

### svn-spawn@0.1.6
- **sink**: `exec`   sinksHit: 
- **entry points**: super_/1[method,ctor], prototype.cmd/2[method,ctor], prototype.checkout/2[method,ctor], prototype.update/2[method,ctor], prototype.commit/2[method,ctor], prototype.add/2[method,ctor], prototype.del/2[method,ctor], prototype.info/2[method,ctor], prototype.getInfo/2[method,ctor], prototype.status/2[method,ctor], prototype.getStatus/2[method,ctor], prototype.log/2[method,ctor], prototype.getLog/2[method,ctor], prototype.addLocal/2[method,ctor], prototype.addLocalUnversioned/2[method,ctor], Client/1[ctor], super_/1[method,ctor], cmd/2[method,ctor], checkout/2[method,ctor], update/2[method,ctor], commit/2[method,ctor], add/2[method,ctor], del/2[method,ctor], info/2[method,ctor], getInfo/2[method,ctor], status/2[method,ctor], getStatus/2[method,ctor], log/2[method,ctor], getLog/2[method,ctor], addLocal/2[method,ctor], addLocalUnversioned/2[method,ctor]
- candidateExploit: `[" $(touch /tmp/success);#"]`
- **why no exploit**: checkExploit aborted: Package has no confirmed exploits
- provenance: taint_0.json (1661 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc0.js, poc1.js, run-svn-spawn2.js, run-svn-spawn2_jalangi_.js, run-svn-spawn.js, run-svn-spawn_jalangi_.js, run-svn-spawn-non-inst.js

### sync-rpc@1.3.7
- **sink**: `exec`   sinksHit: 
- **entry points**: FUNCTION_PRIORITY.0/2[method,ctor], FUNCTION_PRIORITY.1/2[method,ctor], createClient/2[ctor]
- candidateExploit: `[" $(touch /tmp/success);#"]`
- **why no exploit**: checkExploit aborted: Package has no confirmed exploits
- provenance: taint_0.json (1327 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc0.js, poc1.js, run-sync-rpc.js, run-sync-rpc2_jalangi_.js, run-sync-rpc2.js, run-sync-rpc-non-inst.js, run-sync-rpc_jalangi_.js

### template_js@3.1.4
- **sink**: `eval`   sinksHit: 
- **entry points**: config/1[method,ctor], registerFunction/2[method,ctor], unregisterFunction/1[method,ctor], registerModifier/2[method,ctor], unregisterModifier/1[method,ctor], encodeHTML/1[method,ctor], compress/1[method,ctor], handelError/1[method,ctor], __encodeHTML/1[method,ctor], __compress/1[method,ctor], __handelError/1[method,ctor], __compile/1[method,ctor], modifierMap.h/1[method,ctor], modifierMap.u/1[method,ctor], template/2[ctor], config/1[method,ctor], registerFunction/2[method,ctor], unregisterFunction/1[method,ctor], registerModifier/2[method,ctor], unregisterModifier/1[method,ctor], encodeHTML/1[method,ctor], compress/1[method,ctor], handelError/1[method,ctor], __encodeHTML/1[method,ctor], __compress/1[method,ctor], __handelError/1[method,ctor], __compile/1[method,ctor]
- **why no exploit**: checkExploit aborted: Package has no confirmed exploits
- provenance: taint_0.json (30987 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc0.js, run-template_js2.js, run-template_js2_jalangi_.js, run-template_js.js, run-template_js_jalangi_.js, run-template_js-non-inst.js

### tinyspawn@1.5.12
- **sink**: `exec`   sinksHit: 
- **entry points**: extend/1[method], json/1[method], /3
- candidateExploit: `" $(touch /tmp/success);#"`
- **why no exploit**: checkExploit aborted: Package has no confirmed exploits
- provenance: taint_0.json (6051 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc0.js, run-tinyspawn2_jalangi_.js, run-tinyspawn-non-inst.js, run-tinyspawn2.js, run-tinyspawn.js, run-tinyspawn_jalangi_.js

### tree-kill@1.2.2
- **sink**: `exec`   sinksHit: 
- **entry points**: /3[ctor]
- candidateExploit: `[" $(touch /tmp/success);#"]`
- **why no exploit**: checkExploit aborted: Package has no confirmed exploits
- provenance: taint_0.json (2219 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc2.js, poc0.js, poc1.js, run-tree-kill2_jalangi_.js, run-tree-kill2.js, run-tree-kill_jalangi_.js, run-tree-kill-non-inst.js, run-tree-kill.js

### vm-browserify@1.1.2
- **sink**: `eval`   sinksHit: 
- **entry points**: Script/1[method,ctor], runInContext/1[method,ctor], runInThisContext/1[method,ctor], runInNewContext/1[method,ctor], isContext/1[method,ctor], createScript/1[method,ctor], createContext/1[method,ctor]
- candidateExploit: `{"code": "global.CTF()//"}`
- **why no exploit**: checkExploit aborted: Package has no confirmed exploits
- provenance: taint_0.json (4089 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc0.js, run-vm-browserify-non-inst.js, run-vm-browserify_jalangi_.js, run-vm-browserify.js, run-vm-browserify2_jalangi_.js, run-vm-browserify2.js

### vm@0.1.0
- **sink**: `eval`   sinksHit: 
- **entry points**: Script/1[method,ctor], createContext/2[method,ctor], createScript/2[method,ctor], runInContext/1[method,ctor], runInNewContext/1[method,ctor], runInThisContext/2[method,ctor], isContext/1[method,ctor], compileFunction/3[method,ctor], measureMemory/1[method,ctor]
- candidateExploit: `"global.CTF();//\"+global.CTF();//'+global.CTF();//${global.CTF()}"`
- **why no exploit**: smt aborted: Traceback (most recent call last):
  File "<frozen runpy>", line 198, in _run_module_as_main
  File "<frozen runpy>", line 88, in _run_code
  File "/nodetaint/lib/NodeExploitSynthesis/src/main.py", line 190, in <module>
    main(Args(argv[1:]))
  File "/nodetaint/lib/NodeExploitSynthesis/src/main.py", line 159, in main
    raise exn
  File "/nodetaint/lib/NodeExploitSynthesis/src/main.py", line 15…
- provenance: taint_0.json (1418 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc0.js, run-vm-non-inst.js, run-vm_jalangi_.js, run-vm.js, run-vm2_jalangi_.js, run-vm2.js

### yarn-or-npm@3.0.1
- **sink**: `exec`   sinksHit: 
- **entry points**: spawn/1[method,ctor], yarnOrNpm/0[ctor], spawn/1[method,ctor]
- candidateExploit: `[" $(touch /tmp/success);#"]`
- **why no exploit**: checkExploit aborted: Package has no confirmed exploits
- provenance: taint_0.json (7675 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc0.js, run-yarn-or-npm.js, run-yarn-or-npm2.js, run-yarn-or-npm-non-inst.js, run-yarn-or-npm_jalangi_.js, run-yarn-or-npm2_jalangi_.js

### youtube-dl-exec@3.1.19
- **sink**: `exec`   sinksHit: 
- **entry points**: exec/1[method], youtubeDl/1[method], create/1[method], update/1[method], args/1[method], isJSON/1[method], fn/1
- candidateExploit: `[" $(touch /tmp/success);#"]`
- **why no exploit**: checkExploit aborted: Package has no confirmed exploits
- provenance: taint_0.json (1033 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc0.js, run-youtube-dl-exec.js, run-youtube-dl-exec2_jalangi_.js, run-youtube-dl-exec2.js, run-youtube-dl-exec_jalangi_.js, run-youtube-dl-exec-non-inst.js

### yt-dlp-exec@1.0.2
- **sink**: `exec`   sinksHit: 
- **entry points**: exec/3[method], create/1[method], args/2[method], isJSON/1[method], fn/3
- candidateExploit: `[{"args": " $(touch /tmp/success);#"}]`
- **why no exploit**: checkExploit aborted: Package has no confirmed exploits
- provenance: taint_0.json (23008 bytes)
- files: results.json, taint_0.json, taint_0.pdf, poc2.js, poc0.js, poc1.js, run-yt-dlp-exec2_jalangi_.js, run-yt-dlp-exec-non-inst.js, run-yt-dlp-exec_jalangi_.js, run-yt-dlp-exec.js, run-yt-dlp-exec2.js
