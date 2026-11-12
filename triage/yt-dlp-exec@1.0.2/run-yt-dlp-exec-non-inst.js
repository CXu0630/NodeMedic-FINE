// JALANGI DRIVER

process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/yt-dlp-exec/node_modules/yt-dlp-exec');
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
var num_entryPoints = 5;

function get_fuzzer(obj_rec, gen_strings_only){

    var res = new fuzzer.Fuzzer(num_entryPoints, obj_rec, gen_strings_only);
    res.set_seed(`[{"id":"","types":["Object"],"structure":{},"constraints":[],"concrete":{"0":"0"}}]`);	res.set_args("3_exec_true_false_false", 3);
	res.set_args("1_create_true_false_false", 1);
	res.set_args("2_args_true_false_false", 2);
	res.set_args("1_isJSON_true_false_false", 1);
	res.set_args("3_fn_false_false_false", 3);
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
			last_functionName = "exec";
			last_num_args = 3;
			last_is_method = true;
			last_is_constructor = false;
			last_from_constructor = false;
			var x0 = fuzz.get_input("3_exec_true_false_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("3_exec_true_false_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("3_exec_true_false_false", 2);
			last_tried_input.push(x2);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__fuzzer__reset_branches__();
			PUT["exec"](x0,x1,x2);
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
			fuzz.feed_cov("3_exec_true_false_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("3_exec_true_false_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("3_exec_true_false_false", 2, getfields, cov, globalcov, x2);
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
			last_functionName = "create";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = false;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_create_true_false_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			PUT["create"](x0);
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
			fuzz.feed_cov("1_create_true_false_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 2;
			last_functionName = "args";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = false;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_args_true_false_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_args_true_false_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			PUT["args"](x0,x1);
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
			fuzz.feed_cov("2_args_true_false_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_args_true_false_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 3;
			last_functionName = "isJSON";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = false;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_isJSON_true_false_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			PUT["isJSON"](x0);
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
			fuzz.feed_cov("1_isJSON_true_false_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 4;
			last_functionName = "fn";
			last_num_args = 3;
			last_is_method = false;
			last_is_constructor = false;
			last_from_constructor = false;
			var x0 = fuzz.get_input("3_fn_false_false_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("3_fn_false_false_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("3_fn_false_false_false", 2);
			last_tried_input.push(x2);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__fuzzer__reset_branches__();
			PUT(x0,x1,x2);
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
			fuzz.feed_cov("3_fn_false_false_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("3_fn_false_false_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("3_fn_false_false_false", 2, getfields, cov, globalcov, x2);
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