// JALANGI DRIVER

process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/scripting-tools/node_modules/scripting-tools');
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
var num_entryPoints = 29;

function get_fuzzer(obj_rec, gen_strings_only){

    var res = new fuzzer.Fuzzer(num_entryPoints, obj_rec, gen_strings_only);
    res.set_seed(`[{"id":"","types":["Bot"],"structure":{},"constraints":[],"concrete":null}]`);	res.set_args("1_get_uid_true_true_false", 1);
	res.set_args("1_get_gid_true_true_false", 1);
	res.set_args("2_colorize_true_true_false", 2);
	res.set_args("2_execSync_true_true_false", 2);
	res.set_args("2_execSyncTrace_true_true_false", 2);
	res.set_args("2_execSyncQuiet_true_true_false", 2);
	res.set_args("2_exec_true_true_false", 2);
	res.set_args("4_spawnAndDetach_true_true_false", 4);
	res.set_args("1_start_long_running_process_true_true_false", 1);
	res.set_args("1_apt_get_install_if_missing_true_true_false", 1);
	res.set_args("1_apt_get_install_true_true_false", 1);
	res.set_args("2_find_module_path_true_true_false", 2);
	res.set_args("3_fs_areSame_true_true_false", 3);
	res.set_args("4_fs_move_true_true_false", 4);
	res.set_args("3_download_and_extract_tarball_true_true_false", 3);
	res.set_args("2_web_get_true_true_false", 2);
	res.set_args("3_fs_ls_true_true_false", 3);
	res.set_args("2_createSymlink_true_true_false", 2);
	res.set_args("2_createScript_true_true_false", 2);
	res.set_args("1_sh_eval_true_true_false", 1);
	res.set_args("1_sh_if_true_true_false", 1);
	res.set_args("2_safePr_true_true_false", 2);
	res.set_args("1_setProcessExitHandler_true_true_false", 1);
	res.set_args("4_stopProcessSync_true_true_false", 4);
	res.set_args("1_createService_true_true_false", 1);
	res.set_args("2_unixUser.create_true_true_false", 2);
	res.set_args("1_unixUser.remove_true_true_false", 1);
	res.set_args("5_systemd.createConfigFile_true_true_false", 5);
	res.set_args("2_systemd.deleteConfigFile_true_true_false", 2);
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
			last_functionName = "get_uid";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_get_uid_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["get_uid"](x0);
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
			fuzz.feed_cov("1_get_uid_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 1;
			last_functionName = "get_gid";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_get_gid_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["get_gid"](x0);
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
			fuzz.feed_cov("1_get_gid_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 2;
			last_functionName = "colorize";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_colorize_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_colorize_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["colorize"](x0,x1);
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
			fuzz.feed_cov("2_colorize_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_colorize_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 3;
			last_functionName = "execSync";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_execSync_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_execSync_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["execSync"](x0,x1);
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
			fuzz.feed_cov("2_execSync_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_execSync_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 4;
			last_functionName = "execSyncTrace";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_execSyncTrace_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_execSyncTrace_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["execSyncTrace"](x0,x1);
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
			fuzz.feed_cov("2_execSyncTrace_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_execSyncTrace_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 5;
			last_functionName = "execSyncQuiet";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_execSyncQuiet_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_execSyncQuiet_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["execSyncQuiet"](x0,x1);
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
			fuzz.feed_cov("2_execSyncQuiet_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_execSyncQuiet_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 6;
			last_functionName = "exec";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_exec_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_exec_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["exec"](x0,x1);
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
			fuzz.feed_cov("2_exec_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_exec_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 7;
			last_functionName = "spawnAndDetach";
			last_num_args = 4;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("4_spawnAndDetach_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("4_spawnAndDetach_true_true_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("4_spawnAndDetach_true_true_false", 2);
			last_tried_input.push(x2);
			var x3 = fuzz.get_input("4_spawnAndDetach_true_true_false", 3);
			last_tried_input.push(x3);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__jalangi_set_taint__(x3);
			__fuzzer__reset_branches__();
			new PUT["spawnAndDetach"](x0,x1,x2,x3);
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
			fuzz.feed_cov("4_spawnAndDetach_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("4_spawnAndDetach_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("4_spawnAndDetach_true_true_false", 2, getfields, cov, globalcov, x2);
			fuzz.feed_cov("4_spawnAndDetach_true_true_false", 3, getfields, cov, globalcov, x3);
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
			last_tried_entrypoint = 8;
			last_functionName = "start_long_running_process";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_start_long_running_process_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["start_long_running_process"](x0);
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
			fuzz.feed_cov("1_start_long_running_process_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 9;
			last_functionName = "apt_get_install_if_missing";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_apt_get_install_if_missing_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["apt_get_install_if_missing"](x0);
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
			fuzz.feed_cov("1_apt_get_install_if_missing_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 10;
			last_functionName = "apt_get_install";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_apt_get_install_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["apt_get_install"](x0);
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
			fuzz.feed_cov("1_apt_get_install_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 11;
			last_functionName = "find_module_path";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_find_module_path_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_find_module_path_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["find_module_path"](x0,x1);
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
			fuzz.feed_cov("2_find_module_path_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_find_module_path_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 12;
			last_functionName = "fs_areSame";
			last_num_args = 3;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("3_fs_areSame_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("3_fs_areSame_true_true_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("3_fs_areSame_true_true_false", 2);
			last_tried_input.push(x2);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__fuzzer__reset_branches__();
			new PUT["fs_areSame"](x0,x1,x2);
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
			fuzz.feed_cov("3_fs_areSame_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("3_fs_areSame_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("3_fs_areSame_true_true_false", 2, getfields, cov, globalcov, x2);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
			__jalangi_clear_taint__(x2);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 13;
			last_functionName = "fs_move";
			last_num_args = 4;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("4_fs_move_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("4_fs_move_true_true_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("4_fs_move_true_true_false", 2);
			last_tried_input.push(x2);
			var x3 = fuzz.get_input("4_fs_move_true_true_false", 3);
			last_tried_input.push(x3);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__jalangi_set_taint__(x3);
			__fuzzer__reset_branches__();
			new PUT["fs_move"](x0,x1,x2,x3);
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
			fuzz.feed_cov("4_fs_move_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("4_fs_move_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("4_fs_move_true_true_false", 2, getfields, cov, globalcov, x2);
			fuzz.feed_cov("4_fs_move_true_true_false", 3, getfields, cov, globalcov, x3);
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
			last_tried_entrypoint = 14;
			last_functionName = "download_and_extract_tarball";
			last_num_args = 3;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("3_download_and_extract_tarball_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("3_download_and_extract_tarball_true_true_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("3_download_and_extract_tarball_true_true_false", 2);
			last_tried_input.push(x2);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__fuzzer__reset_branches__();
			new PUT["download_and_extract_tarball"](x0,x1,x2);
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
			fuzz.feed_cov("3_download_and_extract_tarball_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("3_download_and_extract_tarball_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("3_download_and_extract_tarball_true_true_false", 2, getfields, cov, globalcov, x2);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
			__jalangi_clear_taint__(x2);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 15;
			last_functionName = "web_get";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_web_get_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_web_get_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["web_get"](x0,x1);
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
			fuzz.feed_cov("2_web_get_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_web_get_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 16;
			last_functionName = "fs_ls";
			last_num_args = 3;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("3_fs_ls_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("3_fs_ls_true_true_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("3_fs_ls_true_true_false", 2);
			last_tried_input.push(x2);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__fuzzer__reset_branches__();
			new PUT["fs_ls"](x0,x1,x2);
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
			fuzz.feed_cov("3_fs_ls_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("3_fs_ls_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("3_fs_ls_true_true_false", 2, getfields, cov, globalcov, x2);
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
			last_functionName = "createSymlink";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_createSymlink_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_createSymlink_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["createSymlink"](x0,x1);
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
			fuzz.feed_cov("2_createSymlink_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_createSymlink_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 18;
			last_functionName = "createScript";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_createScript_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_createScript_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["createScript"](x0,x1);
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
			fuzz.feed_cov("2_createScript_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_createScript_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 19;
			last_functionName = "sh_eval";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_sh_eval_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["sh_eval"](x0);
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
			fuzz.feed_cov("1_sh_eval_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 20;
			last_functionName = "sh_if";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_sh_if_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["sh_if"](x0);
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
			fuzz.feed_cov("1_sh_if_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 21;
			last_functionName = "safePr";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_safePr_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_safePr_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["safePr"](x0,x1);
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
			fuzz.feed_cov("2_safePr_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_safePr_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 22;
			last_functionName = "setProcessExitHandler";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_setProcessExitHandler_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["setProcessExitHandler"](x0);
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
			fuzz.feed_cov("1_setProcessExitHandler_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 23;
			last_functionName = "stopProcessSync";
			last_num_args = 4;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("4_stopProcessSync_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("4_stopProcessSync_true_true_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("4_stopProcessSync_true_true_false", 2);
			last_tried_input.push(x2);
			var x3 = fuzz.get_input("4_stopProcessSync_true_true_false", 3);
			last_tried_input.push(x3);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__jalangi_set_taint__(x3);
			__fuzzer__reset_branches__();
			new PUT["stopProcessSync"](x0,x1,x2,x3);
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
			fuzz.feed_cov("4_stopProcessSync_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("4_stopProcessSync_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("4_stopProcessSync_true_true_false", 2, getfields, cov, globalcov, x2);
			fuzz.feed_cov("4_stopProcessSync_true_true_false", 3, getfields, cov, globalcov, x3);
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
			last_tried_entrypoint = 24;
			last_functionName = "createService";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_createService_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["createService"](x0);
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
			fuzz.feed_cov("1_createService_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 25;
			last_functionName = "unixUser.create";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_unixUser.create_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_unixUser.create_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["unixUser"]["create"](x0,x1);
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
			fuzz.feed_cov("2_unixUser.create_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_unixUser.create_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 26;
			last_functionName = "unixUser.remove";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_unixUser.remove_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["unixUser"]["remove"](x0);
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
			fuzz.feed_cov("1_unixUser.remove_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 27;
			last_functionName = "systemd.createConfigFile";
			last_num_args = 5;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("5_systemd.createConfigFile_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("5_systemd.createConfigFile_true_true_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("5_systemd.createConfigFile_true_true_false", 2);
			last_tried_input.push(x2);
			var x3 = fuzz.get_input("5_systemd.createConfigFile_true_true_false", 3);
			last_tried_input.push(x3);
			var x4 = fuzz.get_input("5_systemd.createConfigFile_true_true_false", 4);
			last_tried_input.push(x4);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__jalangi_set_taint__(x3);
			__jalangi_set_taint__(x4);
			__fuzzer__reset_branches__();
			new PUT["systemd"]["createConfigFile"](x0,x1,x2,x3,x4);
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
			fuzz.feed_cov("5_systemd.createConfigFile_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("5_systemd.createConfigFile_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("5_systemd.createConfigFile_true_true_false", 2, getfields, cov, globalcov, x2);
			fuzz.feed_cov("5_systemd.createConfigFile_true_true_false", 3, getfields, cov, globalcov, x3);
			fuzz.feed_cov("5_systemd.createConfigFile_true_true_false", 4, getfields, cov, globalcov, x4);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
			__jalangi_clear_taint__(x2);
			__jalangi_clear_taint__(x3);
			__jalangi_clear_taint__(x4);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 28;
			last_functionName = "systemd.deleteConfigFile";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_systemd.deleteConfigFile_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_systemd.deleteConfigFile_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["systemd"]["deleteConfigFile"](x0,x1);
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
			fuzz.feed_cov("2_systemd.deleteConfigFile_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_systemd.deleteConfigFile_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
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