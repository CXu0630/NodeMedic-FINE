// JALANGI DRIVER

process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/dom-iterator/node_modules/dom-iterator');
var fuzzer = require('exp-conf-fuzzer');

var last_tried_input = undefined; //Array of inputs
var last_tried_entrypoint = undefined; //Index of last tried entrypoint
var last_num_args = undefined;
var last_functionName = undefined; //String
var last_from_constructor = undefined; //Boolean
var last_is_method = undefined; //Boolean
var last_is_constructor = undefined; //Boolean


var rounds = 0;
const max_rounds = 1;

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
var num_entryPoints = 29;

function get_fuzzer(obj_rec, gen_strings_only){

    var res = new fuzzer.Fuzzer(num_entryPoints, obj_rec, gen_strings_only);
    res.set_seed(`[{"id":"","types":["Object"],"structure":{},"constraints":[],"concrete":{"0":"0"}}]`);	res.set_args("1_prototype.reset_true_true_false", 1);
	res.set_args("1_prototype.revisit_true_true_false", 1);
	res.set_args("1_prototype.next_true_true_false", 1);
	res.set_args("1_prototype.prev_true_true_false", 1);
	res.set_args("1_prototype.previous_true_true_false", 1);
	res.set_args("1_prototype.select_true_true_false", 1);
	res.set_args("2_prototype.selects_true_true_false", 2);
	res.set_args("1_prototype.reject_true_true_false", 1);
	res.set_args("2_prototype.rejects_true_true_false", 2);
	res.set_args("1_prototype.higher_true_true_false", 1);
	res.set_args("1_prototype.compile_true_true_false", 1);
	res.set_args("2_prototype.peek_true_true_false", 2);
	res.set_args("2_prototype.peak_true_true_false", 2);
	res.set_args("1_prototype.use_true_true_false", 1);
	res.set_args("2_Iterator_false_true_false", 2);
	res.set_args("1_reset_true_true_true", 1);
	res.set_args("1_revisit_true_true_true", 1);
	res.set_args("1_next_true_true_true", 1);
	res.set_args("1_prev_true_true_true", 1);
	res.set_args("1_previous_true_true_true", 1);
	res.set_args("1_select_true_true_true", 1);
	res.set_args("2_selects_true_true_true", 2);
	res.set_args("1_reject_true_true_true", 1);
	res.set_args("2_rejects_true_true_true", 2);
	res.set_args("1_higher_true_true_true", 1);
	res.set_args("1_compile_true_true_true", 1);
	res.set_args("2_peek_true_true_true", 2);
	res.set_args("2_peak_true_true_true", 2);
	res.set_args("1_use_true_true_true", 1);
    return res;
};

var fuzz = get_fuzzer(false, false);

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
			last_functionName = "prototype.reset";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_prototype.reset_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["prototype"]["reset"](x0);
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
			fuzz.feed_cov("1_prototype.reset_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 1;
			last_functionName = "prototype.revisit";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_prototype.revisit_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["prototype"]["revisit"](x0);
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
			fuzz.feed_cov("1_prototype.revisit_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 2;
			last_functionName = "prototype.next";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_prototype.next_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["prototype"]["next"](x0);
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
			fuzz.feed_cov("1_prototype.next_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 3;
			last_functionName = "prototype.prev";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_prototype.prev_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["prototype"]["prev"](x0);
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
			fuzz.feed_cov("1_prototype.prev_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 4;
			last_functionName = "prototype.previous";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_prototype.previous_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["prototype"]["previous"](x0);
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
			fuzz.feed_cov("1_prototype.previous_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 5;
			last_functionName = "prototype.select";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_prototype.select_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["prototype"]["select"](x0);
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
			fuzz.feed_cov("1_prototype.select_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 6;
			last_functionName = "prototype.selects";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_prototype.selects_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_prototype.selects_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["prototype"]["selects"](x0,x1);
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
			fuzz.feed_cov("2_prototype.selects_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_prototype.selects_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 7;
			last_functionName = "prototype.reject";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_prototype.reject_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["prototype"]["reject"](x0);
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
			fuzz.feed_cov("1_prototype.reject_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 8;
			last_functionName = "prototype.rejects";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_prototype.rejects_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_prototype.rejects_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["prototype"]["rejects"](x0,x1);
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
			fuzz.feed_cov("2_prototype.rejects_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_prototype.rejects_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 9;
			last_functionName = "prototype.higher";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_prototype.higher_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["prototype"]["higher"](x0);
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
			fuzz.feed_cov("1_prototype.higher_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 10;
			last_functionName = "prototype.compile";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_prototype.compile_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["prototype"]["compile"](x0);
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
			fuzz.feed_cov("1_prototype.compile_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 11;
			last_functionName = "prototype.peek";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_prototype.peek_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_prototype.peek_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["prototype"]["peek"](x0,x1);
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
			fuzz.feed_cov("2_prototype.peek_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_prototype.peek_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 12;
			last_functionName = "prototype.peak";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_prototype.peak_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_prototype.peak_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["prototype"]["peak"](x0,x1);
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
			fuzz.feed_cov("2_prototype.peak_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_prototype.peak_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 13;
			last_functionName = "prototype.use";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_prototype.use_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["prototype"]["use"](x0);
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
			fuzz.feed_cov("1_prototype.use_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 14;
			last_functionName = "Iterator";
			last_num_args = 2;
			last_is_method = false;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_Iterator_false_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_Iterator_false_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT(x0,x1);
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
			fuzz.feed_cov("2_Iterator_false_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_Iterator_false_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 15;
			last_functionName = "reset";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = true;
			var x0 = fuzz.get_input("1_reset_true_true_true", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			var put = new PUT();
			put["reset"](x0);
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
			fuzz.feed_cov("1_reset_true_true_true", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 16;
			last_functionName = "revisit";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = true;
			var x0 = fuzz.get_input("1_revisit_true_true_true", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			var put = new PUT();
			put["revisit"](x0);
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
			fuzz.feed_cov("1_revisit_true_true_true", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 17;
			last_functionName = "next";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = true;
			var x0 = fuzz.get_input("1_next_true_true_true", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			var put = new PUT();
			put["next"](x0);
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
			fuzz.feed_cov("1_next_true_true_true", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 18;
			last_functionName = "prev";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = true;
			var x0 = fuzz.get_input("1_prev_true_true_true", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			var put = new PUT();
			put["prev"](x0);
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
			fuzz.feed_cov("1_prev_true_true_true", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 19;
			last_functionName = "previous";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = true;
			var x0 = fuzz.get_input("1_previous_true_true_true", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			var put = new PUT();
			put["previous"](x0);
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
			fuzz.feed_cov("1_previous_true_true_true", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 20;
			last_functionName = "select";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = true;
			var x0 = fuzz.get_input("1_select_true_true_true", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			var put = new PUT();
			put["select"](x0);
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
			fuzz.feed_cov("1_select_true_true_true", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 21;
			last_functionName = "selects";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = true;
			var x0 = fuzz.get_input("2_selects_true_true_true", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_selects_true_true_true", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			var put = new PUT();
			put["selects"](x0,x1);
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
			fuzz.feed_cov("2_selects_true_true_true", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_selects_true_true_true", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 22;
			last_functionName = "reject";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = true;
			var x0 = fuzz.get_input("1_reject_true_true_true", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			var put = new PUT();
			put["reject"](x0);
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
			fuzz.feed_cov("1_reject_true_true_true", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 23;
			last_functionName = "rejects";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = true;
			var x0 = fuzz.get_input("2_rejects_true_true_true", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_rejects_true_true_true", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			var put = new PUT();
			put["rejects"](x0,x1);
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
			fuzz.feed_cov("2_rejects_true_true_true", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_rejects_true_true_true", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 24;
			last_functionName = "higher";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = true;
			var x0 = fuzz.get_input("1_higher_true_true_true", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			var put = new PUT();
			put["higher"](x0);
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
			fuzz.feed_cov("1_higher_true_true_true", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 25;
			last_functionName = "compile";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = true;
			var x0 = fuzz.get_input("1_compile_true_true_true", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			var put = new PUT();
			put["compile"](x0);
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
			fuzz.feed_cov("1_compile_true_true_true", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 26;
			last_functionName = "peek";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = true;
			var x0 = fuzz.get_input("2_peek_true_true_true", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_peek_true_true_true", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			var put = new PUT();
			put["peek"](x0,x1);
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
			fuzz.feed_cov("2_peek_true_true_true", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_peek_true_true_true", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 27;
			last_functionName = "peak";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = true;
			var x0 = fuzz.get_input("2_peak_true_true_true", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_peak_true_true_true", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			var put = new PUT();
			put["peak"](x0,x1);
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
			fuzz.feed_cov("2_peak_true_true_true", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_peak_true_true_true", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 28;
			last_functionName = "use";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = true;
			var x0 = fuzz.get_input("1_use_true_true_true", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			var put = new PUT();
			put["use"](x0);
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
			fuzz.feed_cov("1_use_true_true_true", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
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