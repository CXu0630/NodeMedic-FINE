// JALANGI DRIVER

process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/squirrelly/node_modules/squirrelly');
var fuzzer = require('exp-conf-fuzzer');

var last_tried_input = undefined; //Array of inputs
var last_tried_entrypoint = undefined; //Index of last tried entrypoint
var last_num_args = undefined;
var last_functionName = undefined; //String
var last_from_constructor = undefined; //Boolean
var last_is_method = undefined; //Boolean
var last_is_constructor = undefined; //Boolean


var rounds = 0;
const max_rounds = -1;

// Dummy functions. Real implementation is in our taint infra
function __fuzzer_reset_get_fields__(){
	return [];
}

function __fuzzer_get_fields__(e){
	return e;
}

function __fuzzer_get_branches__(e){
	return e;
}

function __fuzzer_get_global_coverage__(e){
	return e;
}

function __fuzzer__reset_branches__(){
	return [];
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var start_time = new Date().getTime();
var current_time = new Date().getTime();
var elapsed = current_time - start_time;
const TIMEOUT = 90000; // ms

var mode = 'normal';
var num_entryPoints = 33;

function get_fuzzer(obj_rec, gen_strings_only){

    var res = new fuzzer.Fuzzer(num_entryPoints, obj_rec, gen_strings_only);
    res.set_seed(`[{"id":"","types":["Bot"],"structure":{},"constraints":[],"concrete":null}]`);	res.set_args("3___express_true_true_false", 3);
	res.set_args("2_compile_true_true_false", 2);
	res.set_args("2_compileScope_true_true_false", 2);
	res.set_args("3_compileScopeIntoFunction_true_true_false", 3);
	res.set_args("2_compileToString_true_true_false", 2);
	res.set_args("2_getConfig_true_true_false", 2);
	res.set_args("2_loadFile_true_true_false", 2);
	res.set_args("2_parse_true_true_false", 2);
	res.set_args("4_render_true_true_false", 4);
	res.set_args("3_renderFile_true_true_false", 3);
	res.set_args("2_defaultConfig.l_true_true_false", 2);
	res.set_args("2_nativeHelpers.cache.if_true_true_false", 2);
	res.set_args("2_nativeHelpers.cache.try_true_true_false", 2);
	res.set_args("2_nativeHelpers.cache.block_true_true_false", 2);
	res.set_args("2_helpers.cache.each_true_true_false", 2);
	res.set_args("2_helpers.cache.foreach_true_true_false", 2);
	res.set_args("3_helpers.cache.include_true_true_false", 3);
	res.set_args("3_helpers.cache.extends_true_true_false", 3);
	res.set_args("2_helpers.cache.useScope_true_true_false", 2);
	res.set_args("3_helpers.cache.includeFile_true_true_false", 3);
	res.set_args("3_helpers.cache.extendsFile_true_true_false", 3);
	res.set_args("1_filters.cache.e_true_true_false", 1);
	res.set_args("1_defaultConfig.storage.filters.cache.e_true_true_false", 1);
	res.set_args("2_defaultConfig.storage.nativeHelpers.cache.if_true_true_false", 2);
	res.set_args("2_defaultConfig.storage.nativeHelpers.cache.try_true_true_false", 2);
	res.set_args("2_defaultConfig.storage.nativeHelpers.cache.block_true_true_false", 2);
	res.set_args("2_defaultConfig.storage.helpers.cache.each_true_true_false", 2);
	res.set_args("2_defaultConfig.storage.helpers.cache.foreach_true_true_false", 2);
	res.set_args("3_defaultConfig.storage.helpers.cache.include_true_true_false", 3);
	res.set_args("3_defaultConfig.storage.helpers.cache.extends_true_true_false", 3);
	res.set_args("2_defaultConfig.storage.helpers.cache.useScope_true_true_false", 2);
	res.set_args("3_defaultConfig.storage.helpers.cache.includeFile_true_true_false", 3);
	res.set_args("3_defaultConfig.storage.helpers.cache.extendsFile_true_true_false", 3);
    return res;
};

var fuzz = get_fuzzer(true, false);

function report_vuln(functionName, isMethod, isConstructor, fromConstructor){
    var entrypoint = last_num_args+"_"+functionName+"_"+isMethod+"_"+isConstructor+"_"+fromConstructor;
    // spawned process stdout has max buffer size, so we write this to a file now
    //console.log("FUZZ - Last tried entrypoint:", last_tried_entrypoint);
    //console.log("FUZZ - Last tried input:", fuzzer.get_representation(last_tried_input));
    //console.log("FUZZ - Fuzzer specs used: [", fuzz.get_specs(entrypoint).join(","), "]");
    fuzz.save_results("/nodetaint/analysisArtifacts/fuzzer_progress.json", "/nodetaint/analysisArtifacts/fuzzer_results.json", last_tried_entrypoint, last_tried_input, entrypoint, mode);
}

async function driver(){
    console.log("Analysis started");
    while (rounds != max_rounds && elapsed < TIMEOUT){
	rounds += 1;
		try {
			last_tried_input = [];
			last_tried_entrypoint = 0;
			last_functionName = "__express";
			last_num_args = 3;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("3___express_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("3___express_true_true_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("3___express_true_true_false", 2);
			last_tried_input.push(x2);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__fuzzer__reset_branches__();
			new PUT["__express"](x0,x1,x2);
			await sleep(1);
		}
		catch (e) {
                    console.log(e);
                    if (e.message){
                        if (e.message.toString().includes("reached with tainted argument")){
                            report_vuln(last_functionName, last_is_method, last_is_constructor, last_from_constructor);
                            break;
                        }
                    }
            }
                finally {
			var cov = __fuzzer_get_branches__([]);
			var globalcov = __fuzzer_get_global_coverage__([]);
			var getfields = __fuzzer_get_fields__([]);
			__fuzzer__reset_branches__();
			fuzz.feed_cov("3___express_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("3___express_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("3___express_true_true_false", 2, getfields, cov, globalcov, x2);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
			__jalangi_clear_taint__(x2);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 1;
			last_functionName = "compile";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_compile_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_compile_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["compile"](x0,x1);
			await sleep(1);
		}
		catch (e) {
                    console.log(e);
                    if (e.message){
                        if (e.message.toString().includes("reached with tainted argument")){
                            report_vuln(last_functionName, last_is_method, last_is_constructor, last_from_constructor);
                            break;
                        }
                    }
            }
                finally {
			var cov = __fuzzer_get_branches__([]);
			var globalcov = __fuzzer_get_global_coverage__([]);
			var getfields = __fuzzer_get_fields__([]);
			__fuzzer__reset_branches__();
			fuzz.feed_cov("2_compile_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_compile_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 2;
			last_functionName = "compileScope";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_compileScope_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_compileScope_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["compileScope"](x0,x1);
			await sleep(1);
		}
		catch (e) {
                    console.log(e);
                    if (e.message){
                        if (e.message.toString().includes("reached with tainted argument")){
                            report_vuln(last_functionName, last_is_method, last_is_constructor, last_from_constructor);
                            break;
                        }
                    }
            }
                finally {
			var cov = __fuzzer_get_branches__([]);
			var globalcov = __fuzzer_get_global_coverage__([]);
			var getfields = __fuzzer_get_fields__([]);
			__fuzzer__reset_branches__();
			fuzz.feed_cov("2_compileScope_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_compileScope_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 3;
			last_functionName = "compileScopeIntoFunction";
			last_num_args = 3;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("3_compileScopeIntoFunction_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("3_compileScopeIntoFunction_true_true_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("3_compileScopeIntoFunction_true_true_false", 2);
			last_tried_input.push(x2);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__fuzzer__reset_branches__();
			new PUT["compileScopeIntoFunction"](x0,x1,x2);
			await sleep(1);
		}
		catch (e) {
                    console.log(e);
                    if (e.message){
                        if (e.message.toString().includes("reached with tainted argument")){
                            report_vuln(last_functionName, last_is_method, last_is_constructor, last_from_constructor);
                            break;
                        }
                    }
            }
                finally {
			var cov = __fuzzer_get_branches__([]);
			var globalcov = __fuzzer_get_global_coverage__([]);
			var getfields = __fuzzer_get_fields__([]);
			__fuzzer__reset_branches__();
			fuzz.feed_cov("3_compileScopeIntoFunction_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("3_compileScopeIntoFunction_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("3_compileScopeIntoFunction_true_true_false", 2, getfields, cov, globalcov, x2);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
			__jalangi_clear_taint__(x2);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 4;
			last_functionName = "compileToString";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_compileToString_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_compileToString_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["compileToString"](x0,x1);
			await sleep(1);
		}
		catch (e) {
                    console.log(e);
                    if (e.message){
                        if (e.message.toString().includes("reached with tainted argument")){
                            report_vuln(last_functionName, last_is_method, last_is_constructor, last_from_constructor);
                            break;
                        }
                    }
            }
                finally {
			var cov = __fuzzer_get_branches__([]);
			var globalcov = __fuzzer_get_global_coverage__([]);
			var getfields = __fuzzer_get_fields__([]);
			__fuzzer__reset_branches__();
			fuzz.feed_cov("2_compileToString_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_compileToString_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 5;
			last_functionName = "getConfig";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_getConfig_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_getConfig_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["getConfig"](x0,x1);
			await sleep(1);
		}
		catch (e) {
                    console.log(e);
                    if (e.message){
                        if (e.message.toString().includes("reached with tainted argument")){
                            report_vuln(last_functionName, last_is_method, last_is_constructor, last_from_constructor);
                            break;
                        }
                    }
            }
                finally {
			var cov = __fuzzer_get_branches__([]);
			var globalcov = __fuzzer_get_global_coverage__([]);
			var getfields = __fuzzer_get_fields__([]);
			__fuzzer__reset_branches__();
			fuzz.feed_cov("2_getConfig_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_getConfig_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 6;
			last_functionName = "loadFile";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_loadFile_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_loadFile_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["loadFile"](x0,x1);
			await sleep(1);
		}
		catch (e) {
                    console.log(e);
                    if (e.message){
                        if (e.message.toString().includes("reached with tainted argument")){
                            report_vuln(last_functionName, last_is_method, last_is_constructor, last_from_constructor);
                            break;
                        }
                    }
            }
                finally {
			var cov = __fuzzer_get_branches__([]);
			var globalcov = __fuzzer_get_global_coverage__([]);
			var getfields = __fuzzer_get_fields__([]);
			__fuzzer__reset_branches__();
			fuzz.feed_cov("2_loadFile_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_loadFile_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 7;
			last_functionName = "parse";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_parse_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_parse_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["parse"](x0,x1);
			await sleep(1);
		}
		catch (e) {
                    console.log(e);
                    if (e.message){
                        if (e.message.toString().includes("reached with tainted argument")){
                            report_vuln(last_functionName, last_is_method, last_is_constructor, last_from_constructor);
                            break;
                        }
                    }
            }
                finally {
			var cov = __fuzzer_get_branches__([]);
			var globalcov = __fuzzer_get_global_coverage__([]);
			var getfields = __fuzzer_get_fields__([]);
			__fuzzer__reset_branches__();
			fuzz.feed_cov("2_parse_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_parse_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 8;
			last_functionName = "render";
			last_num_args = 4;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("4_render_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("4_render_true_true_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("4_render_true_true_false", 2);
			last_tried_input.push(x2);
			var x3 = fuzz.get_input("4_render_true_true_false", 3);
			last_tried_input.push(x3);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__jalangi_set_taint__(x3);
			__fuzzer__reset_branches__();
			new PUT["render"](x0,x1,x2,x3);
			await sleep(1);
		}
		catch (e) {
                    console.log(e);
                    if (e.message){
                        if (e.message.toString().includes("reached with tainted argument")){
                            report_vuln(last_functionName, last_is_method, last_is_constructor, last_from_constructor);
                            break;
                        }
                    }
            }
                finally {
			var cov = __fuzzer_get_branches__([]);
			var globalcov = __fuzzer_get_global_coverage__([]);
			var getfields = __fuzzer_get_fields__([]);
			__fuzzer__reset_branches__();
			fuzz.feed_cov("4_render_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("4_render_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("4_render_true_true_false", 2, getfields, cov, globalcov, x2);
			fuzz.feed_cov("4_render_true_true_false", 3, getfields, cov, globalcov, x3);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
			__jalangi_clear_taint__(x2);
			__jalangi_clear_taint__(x3);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 9;
			last_functionName = "renderFile";
			last_num_args = 3;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("3_renderFile_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("3_renderFile_true_true_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("3_renderFile_true_true_false", 2);
			last_tried_input.push(x2);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__fuzzer__reset_branches__();
			new PUT["renderFile"](x0,x1,x2);
			await sleep(1);
		}
		catch (e) {
                    console.log(e);
                    if (e.message){
                        if (e.message.toString().includes("reached with tainted argument")){
                            report_vuln(last_functionName, last_is_method, last_is_constructor, last_from_constructor);
                            break;
                        }
                    }
            }
                finally {
			var cov = __fuzzer_get_branches__([]);
			var globalcov = __fuzzer_get_global_coverage__([]);
			var getfields = __fuzzer_get_fields__([]);
			__fuzzer__reset_branches__();
			fuzz.feed_cov("3_renderFile_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("3_renderFile_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("3_renderFile_true_true_false", 2, getfields, cov, globalcov, x2);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
			__jalangi_clear_taint__(x2);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 10;
			last_functionName = "defaultConfig.l";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_defaultConfig.l_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_defaultConfig.l_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["defaultConfig"]["l"](x0,x1);
			await sleep(1);
		}
		catch (e) {
                    console.log(e);
                    if (e.message){
                        if (e.message.toString().includes("reached with tainted argument")){
                            report_vuln(last_functionName, last_is_method, last_is_constructor, last_from_constructor);
                            break;
                        }
                    }
            }
                finally {
			var cov = __fuzzer_get_branches__([]);
			var globalcov = __fuzzer_get_global_coverage__([]);
			var getfields = __fuzzer_get_fields__([]);
			__fuzzer__reset_branches__();
			fuzz.feed_cov("2_defaultConfig.l_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_defaultConfig.l_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 11;
			last_functionName = "nativeHelpers.cache.if";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_nativeHelpers.cache.if_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_nativeHelpers.cache.if_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["nativeHelpers"]["cache"]["if"](x0,x1);
			await sleep(1);
		}
		catch (e) {
                    console.log(e);
                    if (e.message){
                        if (e.message.toString().includes("reached with tainted argument")){
                            report_vuln(last_functionName, last_is_method, last_is_constructor, last_from_constructor);
                            break;
                        }
                    }
            }
                finally {
			var cov = __fuzzer_get_branches__([]);
			var globalcov = __fuzzer_get_global_coverage__([]);
			var getfields = __fuzzer_get_fields__([]);
			__fuzzer__reset_branches__();
			fuzz.feed_cov("2_nativeHelpers.cache.if_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_nativeHelpers.cache.if_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 12;
			last_functionName = "nativeHelpers.cache.try";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_nativeHelpers.cache.try_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_nativeHelpers.cache.try_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["nativeHelpers"]["cache"]["try"](x0,x1);
			await sleep(1);
		}
		catch (e) {
                    console.log(e);
                    if (e.message){
                        if (e.message.toString().includes("reached with tainted argument")){
                            report_vuln(last_functionName, last_is_method, last_is_constructor, last_from_constructor);
                            break;
                        }
                    }
            }
                finally {
			var cov = __fuzzer_get_branches__([]);
			var globalcov = __fuzzer_get_global_coverage__([]);
			var getfields = __fuzzer_get_fields__([]);
			__fuzzer__reset_branches__();
			fuzz.feed_cov("2_nativeHelpers.cache.try_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_nativeHelpers.cache.try_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 13;
			last_functionName = "nativeHelpers.cache.block";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_nativeHelpers.cache.block_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_nativeHelpers.cache.block_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["nativeHelpers"]["cache"]["block"](x0,x1);
			await sleep(1);
		}
		catch (e) {
                    console.log(e);
                    if (e.message){
                        if (e.message.toString().includes("reached with tainted argument")){
                            report_vuln(last_functionName, last_is_method, last_is_constructor, last_from_constructor);
                            break;
                        }
                    }
            }
                finally {
			var cov = __fuzzer_get_branches__([]);
			var globalcov = __fuzzer_get_global_coverage__([]);
			var getfields = __fuzzer_get_fields__([]);
			__fuzzer__reset_branches__();
			fuzz.feed_cov("2_nativeHelpers.cache.block_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_nativeHelpers.cache.block_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 14;
			last_functionName = "helpers.cache.each";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_helpers.cache.each_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_helpers.cache.each_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["helpers"]["cache"]["each"](x0,x1);
			await sleep(1);
		}
		catch (e) {
                    console.log(e);
                    if (e.message){
                        if (e.message.toString().includes("reached with tainted argument")){
                            report_vuln(last_functionName, last_is_method, last_is_constructor, last_from_constructor);
                            break;
                        }
                    }
            }
                finally {
			var cov = __fuzzer_get_branches__([]);
			var globalcov = __fuzzer_get_global_coverage__([]);
			var getfields = __fuzzer_get_fields__([]);
			__fuzzer__reset_branches__();
			fuzz.feed_cov("2_helpers.cache.each_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_helpers.cache.each_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 15;
			last_functionName = "helpers.cache.foreach";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_helpers.cache.foreach_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_helpers.cache.foreach_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["helpers"]["cache"]["foreach"](x0,x1);
			await sleep(1);
		}
		catch (e) {
                    console.log(e);
                    if (e.message){
                        if (e.message.toString().includes("reached with tainted argument")){
                            report_vuln(last_functionName, last_is_method, last_is_constructor, last_from_constructor);
                            break;
                        }
                    }
            }
                finally {
			var cov = __fuzzer_get_branches__([]);
			var globalcov = __fuzzer_get_global_coverage__([]);
			var getfields = __fuzzer_get_fields__([]);
			__fuzzer__reset_branches__();
			fuzz.feed_cov("2_helpers.cache.foreach_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_helpers.cache.foreach_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 16;
			last_functionName = "helpers.cache.include";
			last_num_args = 3;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("3_helpers.cache.include_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("3_helpers.cache.include_true_true_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("3_helpers.cache.include_true_true_false", 2);
			last_tried_input.push(x2);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__fuzzer__reset_branches__();
			new PUT["helpers"]["cache"]["include"](x0,x1,x2);
			await sleep(1);
		}
		catch (e) {
                    console.log(e);
                    if (e.message){
                        if (e.message.toString().includes("reached with tainted argument")){
                            report_vuln(last_functionName, last_is_method, last_is_constructor, last_from_constructor);
                            break;
                        }
                    }
            }
                finally {
			var cov = __fuzzer_get_branches__([]);
			var globalcov = __fuzzer_get_global_coverage__([]);
			var getfields = __fuzzer_get_fields__([]);
			__fuzzer__reset_branches__();
			fuzz.feed_cov("3_helpers.cache.include_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("3_helpers.cache.include_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("3_helpers.cache.include_true_true_false", 2, getfields, cov, globalcov, x2);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
			__jalangi_clear_taint__(x2);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 17;
			last_functionName = "helpers.cache.extends";
			last_num_args = 3;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("3_helpers.cache.extends_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("3_helpers.cache.extends_true_true_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("3_helpers.cache.extends_true_true_false", 2);
			last_tried_input.push(x2);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__fuzzer__reset_branches__();
			new PUT["helpers"]["cache"]["extends"](x0,x1,x2);
			await sleep(1);
		}
		catch (e) {
                    console.log(e);
                    if (e.message){
                        if (e.message.toString().includes("reached with tainted argument")){
                            report_vuln(last_functionName, last_is_method, last_is_constructor, last_from_constructor);
                            break;
                        }
                    }
            }
                finally {
			var cov = __fuzzer_get_branches__([]);
			var globalcov = __fuzzer_get_global_coverage__([]);
			var getfields = __fuzzer_get_fields__([]);
			__fuzzer__reset_branches__();
			fuzz.feed_cov("3_helpers.cache.extends_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("3_helpers.cache.extends_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("3_helpers.cache.extends_true_true_false", 2, getfields, cov, globalcov, x2);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
			__jalangi_clear_taint__(x2);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 18;
			last_functionName = "helpers.cache.useScope";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_helpers.cache.useScope_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_helpers.cache.useScope_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["helpers"]["cache"]["useScope"](x0,x1);
			await sleep(1);
		}
		catch (e) {
                    console.log(e);
                    if (e.message){
                        if (e.message.toString().includes("reached with tainted argument")){
                            report_vuln(last_functionName, last_is_method, last_is_constructor, last_from_constructor);
                            break;
                        }
                    }
            }
                finally {
			var cov = __fuzzer_get_branches__([]);
			var globalcov = __fuzzer_get_global_coverage__([]);
			var getfields = __fuzzer_get_fields__([]);
			__fuzzer__reset_branches__();
			fuzz.feed_cov("2_helpers.cache.useScope_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_helpers.cache.useScope_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 19;
			last_functionName = "helpers.cache.includeFile";
			last_num_args = 3;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("3_helpers.cache.includeFile_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("3_helpers.cache.includeFile_true_true_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("3_helpers.cache.includeFile_true_true_false", 2);
			last_tried_input.push(x2);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__fuzzer__reset_branches__();
			new PUT["helpers"]["cache"]["includeFile"](x0,x1,x2);
			await sleep(1);
		}
		catch (e) {
                    console.log(e);
                    if (e.message){
                        if (e.message.toString().includes("reached with tainted argument")){
                            report_vuln(last_functionName, last_is_method, last_is_constructor, last_from_constructor);
                            break;
                        }
                    }
            }
                finally {
			var cov = __fuzzer_get_branches__([]);
			var globalcov = __fuzzer_get_global_coverage__([]);
			var getfields = __fuzzer_get_fields__([]);
			__fuzzer__reset_branches__();
			fuzz.feed_cov("3_helpers.cache.includeFile_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("3_helpers.cache.includeFile_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("3_helpers.cache.includeFile_true_true_false", 2, getfields, cov, globalcov, x2);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
			__jalangi_clear_taint__(x2);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 20;
			last_functionName = "helpers.cache.extendsFile";
			last_num_args = 3;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("3_helpers.cache.extendsFile_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("3_helpers.cache.extendsFile_true_true_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("3_helpers.cache.extendsFile_true_true_false", 2);
			last_tried_input.push(x2);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__fuzzer__reset_branches__();
			new PUT["helpers"]["cache"]["extendsFile"](x0,x1,x2);
			await sleep(1);
		}
		catch (e) {
                    console.log(e);
                    if (e.message){
                        if (e.message.toString().includes("reached with tainted argument")){
                            report_vuln(last_functionName, last_is_method, last_is_constructor, last_from_constructor);
                            break;
                        }
                    }
            }
                finally {
			var cov = __fuzzer_get_branches__([]);
			var globalcov = __fuzzer_get_global_coverage__([]);
			var getfields = __fuzzer_get_fields__([]);
			__fuzzer__reset_branches__();
			fuzz.feed_cov("3_helpers.cache.extendsFile_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("3_helpers.cache.extendsFile_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("3_helpers.cache.extendsFile_true_true_false", 2, getfields, cov, globalcov, x2);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
			__jalangi_clear_taint__(x2);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 21;
			last_functionName = "filters.cache.e";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_filters.cache.e_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["filters"]["cache"]["e"](x0);
			await sleep(1);
		}
		catch (e) {
                    console.log(e);
                    if (e.message){
                        if (e.message.toString().includes("reached with tainted argument")){
                            report_vuln(last_functionName, last_is_method, last_is_constructor, last_from_constructor);
                            break;
                        }
                    }
            }
                finally {
			var cov = __fuzzer_get_branches__([]);
			var globalcov = __fuzzer_get_global_coverage__([]);
			var getfields = __fuzzer_get_fields__([]);
			__fuzzer__reset_branches__();
			fuzz.feed_cov("1_filters.cache.e_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 22;
			last_functionName = "defaultConfig.storage.filters.cache.e";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_defaultConfig.storage.filters.cache.e_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["defaultConfig"]["storage"]["filters"]["cache"]["e"](x0);
			await sleep(1);
		}
		catch (e) {
                    console.log(e);
                    if (e.message){
                        if (e.message.toString().includes("reached with tainted argument")){
                            report_vuln(last_functionName, last_is_method, last_is_constructor, last_from_constructor);
                            break;
                        }
                    }
            }
                finally {
			var cov = __fuzzer_get_branches__([]);
			var globalcov = __fuzzer_get_global_coverage__([]);
			var getfields = __fuzzer_get_fields__([]);
			__fuzzer__reset_branches__();
			fuzz.feed_cov("1_defaultConfig.storage.filters.cache.e_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 23;
			last_functionName = "defaultConfig.storage.nativeHelpers.cache.if";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_defaultConfig.storage.nativeHelpers.cache.if_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_defaultConfig.storage.nativeHelpers.cache.if_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["defaultConfig"]["storage"]["nativeHelpers"]["cache"]["if"](x0,x1);
			await sleep(1);
		}
		catch (e) {
                    console.log(e);
                    if (e.message){
                        if (e.message.toString().includes("reached with tainted argument")){
                            report_vuln(last_functionName, last_is_method, last_is_constructor, last_from_constructor);
                            break;
                        }
                    }
            }
                finally {
			var cov = __fuzzer_get_branches__([]);
			var globalcov = __fuzzer_get_global_coverage__([]);
			var getfields = __fuzzer_get_fields__([]);
			__fuzzer__reset_branches__();
			fuzz.feed_cov("2_defaultConfig.storage.nativeHelpers.cache.if_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_defaultConfig.storage.nativeHelpers.cache.if_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 24;
			last_functionName = "defaultConfig.storage.nativeHelpers.cache.try";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_defaultConfig.storage.nativeHelpers.cache.try_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_defaultConfig.storage.nativeHelpers.cache.try_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["defaultConfig"]["storage"]["nativeHelpers"]["cache"]["try"](x0,x1);
			await sleep(1);
		}
		catch (e) {
                    console.log(e);
                    if (e.message){
                        if (e.message.toString().includes("reached with tainted argument")){
                            report_vuln(last_functionName, last_is_method, last_is_constructor, last_from_constructor);
                            break;
                        }
                    }
            }
                finally {
			var cov = __fuzzer_get_branches__([]);
			var globalcov = __fuzzer_get_global_coverage__([]);
			var getfields = __fuzzer_get_fields__([]);
			__fuzzer__reset_branches__();
			fuzz.feed_cov("2_defaultConfig.storage.nativeHelpers.cache.try_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_defaultConfig.storage.nativeHelpers.cache.try_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 25;
			last_functionName = "defaultConfig.storage.nativeHelpers.cache.block";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_defaultConfig.storage.nativeHelpers.cache.block_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_defaultConfig.storage.nativeHelpers.cache.block_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["defaultConfig"]["storage"]["nativeHelpers"]["cache"]["block"](x0,x1);
			await sleep(1);
		}
		catch (e) {
                    console.log(e);
                    if (e.message){
                        if (e.message.toString().includes("reached with tainted argument")){
                            report_vuln(last_functionName, last_is_method, last_is_constructor, last_from_constructor);
                            break;
                        }
                    }
            }
                finally {
			var cov = __fuzzer_get_branches__([]);
			var globalcov = __fuzzer_get_global_coverage__([]);
			var getfields = __fuzzer_get_fields__([]);
			__fuzzer__reset_branches__();
			fuzz.feed_cov("2_defaultConfig.storage.nativeHelpers.cache.block_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_defaultConfig.storage.nativeHelpers.cache.block_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 26;
			last_functionName = "defaultConfig.storage.helpers.cache.each";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_defaultConfig.storage.helpers.cache.each_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_defaultConfig.storage.helpers.cache.each_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["defaultConfig"]["storage"]["helpers"]["cache"]["each"](x0,x1);
			await sleep(1);
		}
		catch (e) {
                    console.log(e);
                    if (e.message){
                        if (e.message.toString().includes("reached with tainted argument")){
                            report_vuln(last_functionName, last_is_method, last_is_constructor, last_from_constructor);
                            break;
                        }
                    }
            }
                finally {
			var cov = __fuzzer_get_branches__([]);
			var globalcov = __fuzzer_get_global_coverage__([]);
			var getfields = __fuzzer_get_fields__([]);
			__fuzzer__reset_branches__();
			fuzz.feed_cov("2_defaultConfig.storage.helpers.cache.each_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_defaultConfig.storage.helpers.cache.each_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 27;
			last_functionName = "defaultConfig.storage.helpers.cache.foreach";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_defaultConfig.storage.helpers.cache.foreach_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_defaultConfig.storage.helpers.cache.foreach_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["defaultConfig"]["storage"]["helpers"]["cache"]["foreach"](x0,x1);
			await sleep(1);
		}
		catch (e) {
                    console.log(e);
                    if (e.message){
                        if (e.message.toString().includes("reached with tainted argument")){
                            report_vuln(last_functionName, last_is_method, last_is_constructor, last_from_constructor);
                            break;
                        }
                    }
            }
                finally {
			var cov = __fuzzer_get_branches__([]);
			var globalcov = __fuzzer_get_global_coverage__([]);
			var getfields = __fuzzer_get_fields__([]);
			__fuzzer__reset_branches__();
			fuzz.feed_cov("2_defaultConfig.storage.helpers.cache.foreach_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_defaultConfig.storage.helpers.cache.foreach_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 28;
			last_functionName = "defaultConfig.storage.helpers.cache.include";
			last_num_args = 3;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("3_defaultConfig.storage.helpers.cache.include_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("3_defaultConfig.storage.helpers.cache.include_true_true_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("3_defaultConfig.storage.helpers.cache.include_true_true_false", 2);
			last_tried_input.push(x2);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__fuzzer__reset_branches__();
			new PUT["defaultConfig"]["storage"]["helpers"]["cache"]["include"](x0,x1,x2);
			await sleep(1);
		}
		catch (e) {
                    console.log(e);
                    if (e.message){
                        if (e.message.toString().includes("reached with tainted argument")){
                            report_vuln(last_functionName, last_is_method, last_is_constructor, last_from_constructor);
                            break;
                        }
                    }
            }
                finally {
			var cov = __fuzzer_get_branches__([]);
			var globalcov = __fuzzer_get_global_coverage__([]);
			var getfields = __fuzzer_get_fields__([]);
			__fuzzer__reset_branches__();
			fuzz.feed_cov("3_defaultConfig.storage.helpers.cache.include_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("3_defaultConfig.storage.helpers.cache.include_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("3_defaultConfig.storage.helpers.cache.include_true_true_false", 2, getfields, cov, globalcov, x2);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
			__jalangi_clear_taint__(x2);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 29;
			last_functionName = "defaultConfig.storage.helpers.cache.extends";
			last_num_args = 3;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("3_defaultConfig.storage.helpers.cache.extends_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("3_defaultConfig.storage.helpers.cache.extends_true_true_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("3_defaultConfig.storage.helpers.cache.extends_true_true_false", 2);
			last_tried_input.push(x2);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__fuzzer__reset_branches__();
			new PUT["defaultConfig"]["storage"]["helpers"]["cache"]["extends"](x0,x1,x2);
			await sleep(1);
		}
		catch (e) {
                    console.log(e);
                    if (e.message){
                        if (e.message.toString().includes("reached with tainted argument")){
                            report_vuln(last_functionName, last_is_method, last_is_constructor, last_from_constructor);
                            break;
                        }
                    }
            }
                finally {
			var cov = __fuzzer_get_branches__([]);
			var globalcov = __fuzzer_get_global_coverage__([]);
			var getfields = __fuzzer_get_fields__([]);
			__fuzzer__reset_branches__();
			fuzz.feed_cov("3_defaultConfig.storage.helpers.cache.extends_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("3_defaultConfig.storage.helpers.cache.extends_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("3_defaultConfig.storage.helpers.cache.extends_true_true_false", 2, getfields, cov, globalcov, x2);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
			__jalangi_clear_taint__(x2);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 30;
			last_functionName = "defaultConfig.storage.helpers.cache.useScope";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_defaultConfig.storage.helpers.cache.useScope_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_defaultConfig.storage.helpers.cache.useScope_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["defaultConfig"]["storage"]["helpers"]["cache"]["useScope"](x0,x1);
			await sleep(1);
		}
		catch (e) {
                    console.log(e);
                    if (e.message){
                        if (e.message.toString().includes("reached with tainted argument")){
                            report_vuln(last_functionName, last_is_method, last_is_constructor, last_from_constructor);
                            break;
                        }
                    }
            }
                finally {
			var cov = __fuzzer_get_branches__([]);
			var globalcov = __fuzzer_get_global_coverage__([]);
			var getfields = __fuzzer_get_fields__([]);
			__fuzzer__reset_branches__();
			fuzz.feed_cov("2_defaultConfig.storage.helpers.cache.useScope_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_defaultConfig.storage.helpers.cache.useScope_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 31;
			last_functionName = "defaultConfig.storage.helpers.cache.includeFile";
			last_num_args = 3;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("3_defaultConfig.storage.helpers.cache.includeFile_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("3_defaultConfig.storage.helpers.cache.includeFile_true_true_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("3_defaultConfig.storage.helpers.cache.includeFile_true_true_false", 2);
			last_tried_input.push(x2);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__fuzzer__reset_branches__();
			new PUT["defaultConfig"]["storage"]["helpers"]["cache"]["includeFile"](x0,x1,x2);
			await sleep(1);
		}
		catch (e) {
                    console.log(e);
                    if (e.message){
                        if (e.message.toString().includes("reached with tainted argument")){
                            report_vuln(last_functionName, last_is_method, last_is_constructor, last_from_constructor);
                            break;
                        }
                    }
            }
                finally {
			var cov = __fuzzer_get_branches__([]);
			var globalcov = __fuzzer_get_global_coverage__([]);
			var getfields = __fuzzer_get_fields__([]);
			__fuzzer__reset_branches__();
			fuzz.feed_cov("3_defaultConfig.storage.helpers.cache.includeFile_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("3_defaultConfig.storage.helpers.cache.includeFile_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("3_defaultConfig.storage.helpers.cache.includeFile_true_true_false", 2, getfields, cov, globalcov, x2);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
			__jalangi_clear_taint__(x2);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 32;
			last_functionName = "defaultConfig.storage.helpers.cache.extendsFile";
			last_num_args = 3;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("3_defaultConfig.storage.helpers.cache.extendsFile_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("3_defaultConfig.storage.helpers.cache.extendsFile_true_true_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("3_defaultConfig.storage.helpers.cache.extendsFile_true_true_false", 2);
			last_tried_input.push(x2);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__fuzzer__reset_branches__();
			new PUT["defaultConfig"]["storage"]["helpers"]["cache"]["extendsFile"](x0,x1,x2);
			await sleep(1);
		}
		catch (e) {
                    console.log(e);
                    if (e.message){
                        if (e.message.toString().includes("reached with tainted argument")){
                            report_vuln(last_functionName, last_is_method, last_is_constructor, last_from_constructor);
                            break;
                        }
                    }
            }
                finally {
			var cov = __fuzzer_get_branches__([]);
			var globalcov = __fuzzer_get_global_coverage__([]);
			var getfields = __fuzzer_get_fields__([]);
			__fuzzer__reset_branches__();
			fuzz.feed_cov("3_defaultConfig.storage.helpers.cache.extendsFile_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("3_defaultConfig.storage.helpers.cache.extendsFile_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("3_defaultConfig.storage.helpers.cache.extendsFile_true_true_false", 2, getfields, cov, globalcov, x2);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
			__jalangi_clear_taint__(x2);
		}

	}
	current_time = new Date().getTime();
	elapsed = current_time - start_time;
}

    process.on("uncaughtException", function(e){
        console.log("Uncatchable exception caught:", e);
        if (e.message.toString().includes("reached with tainted argument")){
            report_vuln(last_functionName, last_is_method, last_is_constructor, last_from_constructor);
            process.backup_exit(0);
        }
    });
        
    driver();