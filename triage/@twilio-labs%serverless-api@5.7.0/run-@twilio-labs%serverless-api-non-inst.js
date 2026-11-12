// JALANGI DRIVER

process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/@twilio-labs/serverless-api/node_modules/@twilio-labs/serverless-api');
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
var num_entryPoints = 69;

function get_fuzzer(obj_rec, gen_strings_only){

    var res = new fuzzer.Fuzzer(num_entryPoints, obj_rec, gen_strings_only);
    res.set_seed(`[{"id":"","types":["Object"],"structure":{},"constraints":[],"concrete":{"0":"0"}}]`);	res.set_args("4_activateBuild_true_false_false", 4);
	res.set_args("3_triggerBuild_true_false_false", 3);
	res.set_args("5_waitForSuccessfulBuild_true_true_false", 5);
	res.set_args("1_getDependencies_true_true_false", 1);
	res.set_args("1_getOrCreateFunctionResources_true_false_false", 1);
	res.set_args("4_uploadFunction_true_false_false", 4);
	res.set_args("5_setEnvironmentVariables_true_false_false", 5);
	res.set_args("1_createGotClient_true_true_false", 1);
	res.set_args("1_TwilioServerlessApiClient_true_true_false", 1);
	res.set_args("1_fsHelpers.access_true_true_false", 1);
	res.set_args("1_fsHelpers.readFile_true_true_false", 1);
	res.set_args("1_fsHelpers.writeFile_true_true_false", 1);
	res.set_args("1_fsHelpers.readDir_true_true_false", 1);
	res.set_args("1_fsHelpers.stat_true_true_false", 1);
	res.set_args("2_fsHelpers.fileExists_true_false_false", 2);
	res.set_args("1_fsHelpers.checkForValidPath_true_true_false", 1);
	res.set_args("2_fsHelpers.getPathAndAccessFromFileInfo_true_true_false", 2);
	res.set_args("2_fsHelpers.getDirContent_true_false_false", 2);
	res.set_args("2_fsHelpers.getFirstMatchingDirectory_true_true_false", 2);
	res.set_args("2_fsHelpers.getListOfFunctionsAndAssets_true_false_false", 2);
	res.set_args("3_api.createAssetResource_true_false_false", 3);
	res.set_args("2_api.listAssetResources_true_false_false", 2);
	res.set_args("1_api.getOrCreateAssetResources_true_false_false", 1);
	res.set_args("4_api.createAssetVersion_true_false_false", 4);
	res.set_args("4_api.uploadAsset_true_false_false", 4);
	res.set_args("3_api.getBuild_true_false_false", 3);
	res.set_args("3_api.getBuildStatus_true_false_false", 3);
	res.set_args("2_api.listBuilds_true_false_false", 2);
	res.set_args("3_api.triggerBuild_true_false_false", 3);
	res.set_args("5_api.waitForSuccessfulBuild_true_true_false", 5);
	res.set_args("4_api.activateBuild_true_false_false", 4);
	res.set_args("1_api.getDependencies_true_true_false", 1);
	res.set_args("1_api.isEnvironmentSid_true_true_false", 1);
	res.set_args("3_api.getEnvironment_true_false_false", 3);
	res.set_args("3_api.createEnvironmentFromSuffix_true_false_false", 3);
	res.set_args("2_api.listEnvironments_true_false_false", 2);
	res.set_args("3_api.getEnvironmentFromSuffix_true_false_false", 3);
	res.set_args("3_api.createEnvironmentIfNotExists_true_false_false", 3);
	res.set_args("3_api.createFunctionResource_true_false_false", 3);
	res.set_args("2_api.listFunctionResources_true_false_false", 2);
	res.set_args("1_api.getOrCreateFunctionResources_true_false_false", 1);
	res.set_args("4_api.uploadFunction_true_false_false", 4);
	res.set_args("1_api.isFunctionSid_true_true_false", 1);
	res.set_args("3_api.listFunctionVersions_true_false_false", 3);
	res.set_args("4_api.downloadFunctionVersion_true_false_false", 4);
	res.set_args("3_api.createService_true_false_false", 3);
	res.set_args("1_api.listServices_true_false_false", 1);
	res.set_args("2_api.findServiceSid_true_false_false", 2);
	res.set_args("2_api.getService_true_false_false", 2);
	res.set_args("3_api.listVariablesForEnvironment_true_false_false", 3);
	res.set_args("5_api.setEnvironmentVariables_true_false_false", 5);
	res.set_args("4_api.deleteEnvironmentVariable_true_false_false", 4);
	res.set_args("4_api.removeEnvironmentVariables_true_false_false", 4);
	res.set_args("3_api.listLogResources_true_false_false", 3);
	res.set_args("4_api.listOnePageLogResources_true_false_false", 4);
	res.set_args("4_api.getLog_true_false_false", 4);
	res.set_args("2_utils.getContentType_true_false_false", 2);
	res.set_args("1_utils.access_true_true_false", 1);
	res.set_args("1_utils.readFile_true_true_false", 1);
	res.set_args("1_utils.writeFile_true_true_false", 1);
	res.set_args("1_utils.readDir_true_true_false", 1);
	res.set_args("1_utils.stat_true_true_false", 1);
	res.set_args("2_utils.fileExists_true_false_false", 2);
	res.set_args("1_utils.checkForValidPath_true_true_false", 1);
	res.set_args("2_utils.getPathAndAccessFromFileInfo_true_true_false", 2);
	res.set_args("2_utils.getDirContent_true_false_false", 2);
	res.set_args("2_utils.getFirstMatchingDirectory_true_true_false", 2);
	res.set_args("2_utils.getListOfFunctionsAndAssets_true_false_false", 2);
	res.set_args("1_utils.sleep_true_false_false", 1);
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
			last_functionName = "activateBuild";
			last_num_args = 4;
			last_is_method = true;
			last_is_constructor = false;
			last_from_constructor = false;
			var x0 = fuzz.get_input("4_activateBuild_true_false_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("4_activateBuild_true_false_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("4_activateBuild_true_false_false", 2);
			last_tried_input.push(x2);
			var x3 = fuzz.get_input("4_activateBuild_true_false_false", 3);
			last_tried_input.push(x3);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__jalangi_set_taint__(x3);
			__fuzzer__reset_branches__();
			PUT["activateBuild"](x0,x1,x2,x3);
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
			fuzz.feed_cov("4_activateBuild_true_false_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("4_activateBuild_true_false_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("4_activateBuild_true_false_false", 2, getfields, cov, globalcov, x2);
			fuzz.feed_cov("4_activateBuild_true_false_false", 3, getfields, cov, globalcov, x3);
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
			last_tried_entrypoint = 1;
			last_functionName = "triggerBuild";
			last_num_args = 3;
			last_is_method = true;
			last_is_constructor = false;
			last_from_constructor = false;
			var x0 = fuzz.get_input("3_triggerBuild_true_false_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("3_triggerBuild_true_false_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("3_triggerBuild_true_false_false", 2);
			last_tried_input.push(x2);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__fuzzer__reset_branches__();
			PUT["triggerBuild"](x0,x1,x2);
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
			fuzz.feed_cov("3_triggerBuild_true_false_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("3_triggerBuild_true_false_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("3_triggerBuild_true_false_false", 2, getfields, cov, globalcov, x2);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
			__jalangi_clear_taint__(x2);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 2;
			last_functionName = "waitForSuccessfulBuild";
			last_num_args = 5;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("5_waitForSuccessfulBuild_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("5_waitForSuccessfulBuild_true_true_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("5_waitForSuccessfulBuild_true_true_false", 2);
			last_tried_input.push(x2);
			var x3 = fuzz.get_input("5_waitForSuccessfulBuild_true_true_false", 3);
			last_tried_input.push(x3);
			var x4 = fuzz.get_input("5_waitForSuccessfulBuild_true_true_false", 4);
			last_tried_input.push(x4);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__jalangi_set_taint__(x3);
			__jalangi_set_taint__(x4);
			__fuzzer__reset_branches__();
			new PUT["waitForSuccessfulBuild"](x0,x1,x2,x3,x4);
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
			fuzz.feed_cov("5_waitForSuccessfulBuild_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("5_waitForSuccessfulBuild_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("5_waitForSuccessfulBuild_true_true_false", 2, getfields, cov, globalcov, x2);
			fuzz.feed_cov("5_waitForSuccessfulBuild_true_true_false", 3, getfields, cov, globalcov, x3);
			fuzz.feed_cov("5_waitForSuccessfulBuild_true_true_false", 4, getfields, cov, globalcov, x4);
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
			last_tried_entrypoint = 3;
			last_functionName = "getDependencies";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_getDependencies_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["getDependencies"](x0);
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
			fuzz.feed_cov("1_getDependencies_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 4;
			last_functionName = "getOrCreateFunctionResources";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = false;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_getOrCreateFunctionResources_true_false_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			PUT["getOrCreateFunctionResources"](x0);
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
			fuzz.feed_cov("1_getOrCreateFunctionResources_true_false_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 5;
			last_functionName = "uploadFunction";
			last_num_args = 4;
			last_is_method = true;
			last_is_constructor = false;
			last_from_constructor = false;
			var x0 = fuzz.get_input("4_uploadFunction_true_false_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("4_uploadFunction_true_false_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("4_uploadFunction_true_false_false", 2);
			last_tried_input.push(x2);
			var x3 = fuzz.get_input("4_uploadFunction_true_false_false", 3);
			last_tried_input.push(x3);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__jalangi_set_taint__(x3);
			__fuzzer__reset_branches__();
			PUT["uploadFunction"](x0,x1,x2,x3);
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
			fuzz.feed_cov("4_uploadFunction_true_false_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("4_uploadFunction_true_false_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("4_uploadFunction_true_false_false", 2, getfields, cov, globalcov, x2);
			fuzz.feed_cov("4_uploadFunction_true_false_false", 3, getfields, cov, globalcov, x3);
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
			last_tried_entrypoint = 6;
			last_functionName = "setEnvironmentVariables";
			last_num_args = 5;
			last_is_method = true;
			last_is_constructor = false;
			last_from_constructor = false;
			var x0 = fuzz.get_input("5_setEnvironmentVariables_true_false_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("5_setEnvironmentVariables_true_false_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("5_setEnvironmentVariables_true_false_false", 2);
			last_tried_input.push(x2);
			var x3 = fuzz.get_input("5_setEnvironmentVariables_true_false_false", 3);
			last_tried_input.push(x3);
			var x4 = fuzz.get_input("5_setEnvironmentVariables_true_false_false", 4);
			last_tried_input.push(x4);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__jalangi_set_taint__(x3);
			__jalangi_set_taint__(x4);
			__fuzzer__reset_branches__();
			PUT["setEnvironmentVariables"](x0,x1,x2,x3,x4);
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
			fuzz.feed_cov("5_setEnvironmentVariables_true_false_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("5_setEnvironmentVariables_true_false_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("5_setEnvironmentVariables_true_false_false", 2, getfields, cov, globalcov, x2);
			fuzz.feed_cov("5_setEnvironmentVariables_true_false_false", 3, getfields, cov, globalcov, x3);
			fuzz.feed_cov("5_setEnvironmentVariables_true_false_false", 4, getfields, cov, globalcov, x4);
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
			last_tried_entrypoint = 7;
			last_functionName = "createGotClient";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_createGotClient_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["createGotClient"](x0);
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
			fuzz.feed_cov("1_createGotClient_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 8;
			last_functionName = "TwilioServerlessApiClient";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_TwilioServerlessApiClient_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["TwilioServerlessApiClient"](x0);
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
			fuzz.feed_cov("1_TwilioServerlessApiClient_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 9;
			last_functionName = "fsHelpers.access";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_fsHelpers.access_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["fsHelpers"]["access"](x0);
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
			fuzz.feed_cov("1_fsHelpers.access_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 10;
			last_functionName = "fsHelpers.readFile";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_fsHelpers.readFile_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["fsHelpers"]["readFile"](x0);
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
			fuzz.feed_cov("1_fsHelpers.readFile_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 11;
			last_functionName = "fsHelpers.writeFile";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_fsHelpers.writeFile_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["fsHelpers"]["writeFile"](x0);
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
			fuzz.feed_cov("1_fsHelpers.writeFile_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 12;
			last_functionName = "fsHelpers.readDir";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_fsHelpers.readDir_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["fsHelpers"]["readDir"](x0);
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
			fuzz.feed_cov("1_fsHelpers.readDir_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 13;
			last_functionName = "fsHelpers.stat";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_fsHelpers.stat_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["fsHelpers"]["stat"](x0);
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
			fuzz.feed_cov("1_fsHelpers.stat_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 14;
			last_functionName = "fsHelpers.fileExists";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = false;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_fsHelpers.fileExists_true_false_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_fsHelpers.fileExists_true_false_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			PUT["fsHelpers"]["fileExists"](x0,x1);
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
			fuzz.feed_cov("2_fsHelpers.fileExists_true_false_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_fsHelpers.fileExists_true_false_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 15;
			last_functionName = "fsHelpers.checkForValidPath";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_fsHelpers.checkForValidPath_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["fsHelpers"]["checkForValidPath"](x0);
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
			fuzz.feed_cov("1_fsHelpers.checkForValidPath_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 16;
			last_functionName = "fsHelpers.getPathAndAccessFromFileInfo";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_fsHelpers.getPathAndAccessFromFileInfo_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_fsHelpers.getPathAndAccessFromFileInfo_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["fsHelpers"]["getPathAndAccessFromFileInfo"](x0,x1);
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
			fuzz.feed_cov("2_fsHelpers.getPathAndAccessFromFileInfo_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_fsHelpers.getPathAndAccessFromFileInfo_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 17;
			last_functionName = "fsHelpers.getDirContent";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = false;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_fsHelpers.getDirContent_true_false_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_fsHelpers.getDirContent_true_false_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			PUT["fsHelpers"]["getDirContent"](x0,x1);
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
			fuzz.feed_cov("2_fsHelpers.getDirContent_true_false_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_fsHelpers.getDirContent_true_false_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 18;
			last_functionName = "fsHelpers.getFirstMatchingDirectory";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_fsHelpers.getFirstMatchingDirectory_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_fsHelpers.getFirstMatchingDirectory_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["fsHelpers"]["getFirstMatchingDirectory"](x0,x1);
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
			fuzz.feed_cov("2_fsHelpers.getFirstMatchingDirectory_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_fsHelpers.getFirstMatchingDirectory_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 19;
			last_functionName = "fsHelpers.getListOfFunctionsAndAssets";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = false;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_fsHelpers.getListOfFunctionsAndAssets_true_false_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_fsHelpers.getListOfFunctionsAndAssets_true_false_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			PUT["fsHelpers"]["getListOfFunctionsAndAssets"](x0,x1);
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
			fuzz.feed_cov("2_fsHelpers.getListOfFunctionsAndAssets_true_false_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_fsHelpers.getListOfFunctionsAndAssets_true_false_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 20;
			last_functionName = "api.createAssetResource";
			last_num_args = 3;
			last_is_method = true;
			last_is_constructor = false;
			last_from_constructor = false;
			var x0 = fuzz.get_input("3_api.createAssetResource_true_false_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("3_api.createAssetResource_true_false_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("3_api.createAssetResource_true_false_false", 2);
			last_tried_input.push(x2);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__fuzzer__reset_branches__();
			PUT["api"]["createAssetResource"](x0,x1,x2);
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
			fuzz.feed_cov("3_api.createAssetResource_true_false_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("3_api.createAssetResource_true_false_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("3_api.createAssetResource_true_false_false", 2, getfields, cov, globalcov, x2);
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
			last_functionName = "api.listAssetResources";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = false;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_api.listAssetResources_true_false_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_api.listAssetResources_true_false_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			PUT["api"]["listAssetResources"](x0,x1);
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
			fuzz.feed_cov("2_api.listAssetResources_true_false_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_api.listAssetResources_true_false_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 22;
			last_functionName = "api.getOrCreateAssetResources";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = false;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_api.getOrCreateAssetResources_true_false_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			PUT["api"]["getOrCreateAssetResources"](x0);
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
			fuzz.feed_cov("1_api.getOrCreateAssetResources_true_false_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 23;
			last_functionName = "api.createAssetVersion";
			last_num_args = 4;
			last_is_method = true;
			last_is_constructor = false;
			last_from_constructor = false;
			var x0 = fuzz.get_input("4_api.createAssetVersion_true_false_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("4_api.createAssetVersion_true_false_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("4_api.createAssetVersion_true_false_false", 2);
			last_tried_input.push(x2);
			var x3 = fuzz.get_input("4_api.createAssetVersion_true_false_false", 3);
			last_tried_input.push(x3);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__jalangi_set_taint__(x3);
			__fuzzer__reset_branches__();
			PUT["api"]["createAssetVersion"](x0,x1,x2,x3);
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
			fuzz.feed_cov("4_api.createAssetVersion_true_false_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("4_api.createAssetVersion_true_false_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("4_api.createAssetVersion_true_false_false", 2, getfields, cov, globalcov, x2);
			fuzz.feed_cov("4_api.createAssetVersion_true_false_false", 3, getfields, cov, globalcov, x3);
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
			last_functionName = "api.uploadAsset";
			last_num_args = 4;
			last_is_method = true;
			last_is_constructor = false;
			last_from_constructor = false;
			var x0 = fuzz.get_input("4_api.uploadAsset_true_false_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("4_api.uploadAsset_true_false_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("4_api.uploadAsset_true_false_false", 2);
			last_tried_input.push(x2);
			var x3 = fuzz.get_input("4_api.uploadAsset_true_false_false", 3);
			last_tried_input.push(x3);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__jalangi_set_taint__(x3);
			__fuzzer__reset_branches__();
			PUT["api"]["uploadAsset"](x0,x1,x2,x3);
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
			fuzz.feed_cov("4_api.uploadAsset_true_false_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("4_api.uploadAsset_true_false_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("4_api.uploadAsset_true_false_false", 2, getfields, cov, globalcov, x2);
			fuzz.feed_cov("4_api.uploadAsset_true_false_false", 3, getfields, cov, globalcov, x3);
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
			last_tried_entrypoint = 25;
			last_functionName = "api.getBuild";
			last_num_args = 3;
			last_is_method = true;
			last_is_constructor = false;
			last_from_constructor = false;
			var x0 = fuzz.get_input("3_api.getBuild_true_false_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("3_api.getBuild_true_false_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("3_api.getBuild_true_false_false", 2);
			last_tried_input.push(x2);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__fuzzer__reset_branches__();
			PUT["api"]["getBuild"](x0,x1,x2);
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
			fuzz.feed_cov("3_api.getBuild_true_false_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("3_api.getBuild_true_false_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("3_api.getBuild_true_false_false", 2, getfields, cov, globalcov, x2);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
			__jalangi_clear_taint__(x2);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 26;
			last_functionName = "api.getBuildStatus";
			last_num_args = 3;
			last_is_method = true;
			last_is_constructor = false;
			last_from_constructor = false;
			var x0 = fuzz.get_input("3_api.getBuildStatus_true_false_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("3_api.getBuildStatus_true_false_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("3_api.getBuildStatus_true_false_false", 2);
			last_tried_input.push(x2);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__fuzzer__reset_branches__();
			PUT["api"]["getBuildStatus"](x0,x1,x2);
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
			fuzz.feed_cov("3_api.getBuildStatus_true_false_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("3_api.getBuildStatus_true_false_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("3_api.getBuildStatus_true_false_false", 2, getfields, cov, globalcov, x2);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
			__jalangi_clear_taint__(x2);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 27;
			last_functionName = "api.listBuilds";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = false;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_api.listBuilds_true_false_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_api.listBuilds_true_false_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			PUT["api"]["listBuilds"](x0,x1);
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
			fuzz.feed_cov("2_api.listBuilds_true_false_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_api.listBuilds_true_false_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 28;
			last_functionName = "api.triggerBuild";
			last_num_args = 3;
			last_is_method = true;
			last_is_constructor = false;
			last_from_constructor = false;
			var x0 = fuzz.get_input("3_api.triggerBuild_true_false_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("3_api.triggerBuild_true_false_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("3_api.triggerBuild_true_false_false", 2);
			last_tried_input.push(x2);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__fuzzer__reset_branches__();
			PUT["api"]["triggerBuild"](x0,x1,x2);
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
			fuzz.feed_cov("3_api.triggerBuild_true_false_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("3_api.triggerBuild_true_false_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("3_api.triggerBuild_true_false_false", 2, getfields, cov, globalcov, x2);
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
			last_functionName = "api.waitForSuccessfulBuild";
			last_num_args = 5;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("5_api.waitForSuccessfulBuild_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("5_api.waitForSuccessfulBuild_true_true_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("5_api.waitForSuccessfulBuild_true_true_false", 2);
			last_tried_input.push(x2);
			var x3 = fuzz.get_input("5_api.waitForSuccessfulBuild_true_true_false", 3);
			last_tried_input.push(x3);
			var x4 = fuzz.get_input("5_api.waitForSuccessfulBuild_true_true_false", 4);
			last_tried_input.push(x4);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__jalangi_set_taint__(x3);
			__jalangi_set_taint__(x4);
			__fuzzer__reset_branches__();
			new PUT["api"]["waitForSuccessfulBuild"](x0,x1,x2,x3,x4);
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
			fuzz.feed_cov("5_api.waitForSuccessfulBuild_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("5_api.waitForSuccessfulBuild_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("5_api.waitForSuccessfulBuild_true_true_false", 2, getfields, cov, globalcov, x2);
			fuzz.feed_cov("5_api.waitForSuccessfulBuild_true_true_false", 3, getfields, cov, globalcov, x3);
			fuzz.feed_cov("5_api.waitForSuccessfulBuild_true_true_false", 4, getfields, cov, globalcov, x4);
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
			last_tried_entrypoint = 30;
			last_functionName = "api.activateBuild";
			last_num_args = 4;
			last_is_method = true;
			last_is_constructor = false;
			last_from_constructor = false;
			var x0 = fuzz.get_input("4_api.activateBuild_true_false_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("4_api.activateBuild_true_false_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("4_api.activateBuild_true_false_false", 2);
			last_tried_input.push(x2);
			var x3 = fuzz.get_input("4_api.activateBuild_true_false_false", 3);
			last_tried_input.push(x3);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__jalangi_set_taint__(x3);
			__fuzzer__reset_branches__();
			PUT["api"]["activateBuild"](x0,x1,x2,x3);
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
			fuzz.feed_cov("4_api.activateBuild_true_false_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("4_api.activateBuild_true_false_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("4_api.activateBuild_true_false_false", 2, getfields, cov, globalcov, x2);
			fuzz.feed_cov("4_api.activateBuild_true_false_false", 3, getfields, cov, globalcov, x3);
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
			last_tried_entrypoint = 31;
			last_functionName = "api.getDependencies";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_api.getDependencies_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["api"]["getDependencies"](x0);
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
			fuzz.feed_cov("1_api.getDependencies_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 32;
			last_functionName = "api.isEnvironmentSid";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_api.isEnvironmentSid_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["api"]["isEnvironmentSid"](x0);
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
			fuzz.feed_cov("1_api.isEnvironmentSid_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 33;
			last_functionName = "api.getEnvironment";
			last_num_args = 3;
			last_is_method = true;
			last_is_constructor = false;
			last_from_constructor = false;
			var x0 = fuzz.get_input("3_api.getEnvironment_true_false_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("3_api.getEnvironment_true_false_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("3_api.getEnvironment_true_false_false", 2);
			last_tried_input.push(x2);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__fuzzer__reset_branches__();
			PUT["api"]["getEnvironment"](x0,x1,x2);
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
			fuzz.feed_cov("3_api.getEnvironment_true_false_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("3_api.getEnvironment_true_false_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("3_api.getEnvironment_true_false_false", 2, getfields, cov, globalcov, x2);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
			__jalangi_clear_taint__(x2);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 34;
			last_functionName = "api.createEnvironmentFromSuffix";
			last_num_args = 3;
			last_is_method = true;
			last_is_constructor = false;
			last_from_constructor = false;
			var x0 = fuzz.get_input("3_api.createEnvironmentFromSuffix_true_false_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("3_api.createEnvironmentFromSuffix_true_false_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("3_api.createEnvironmentFromSuffix_true_false_false", 2);
			last_tried_input.push(x2);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__fuzzer__reset_branches__();
			PUT["api"]["createEnvironmentFromSuffix"](x0,x1,x2);
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
			fuzz.feed_cov("3_api.createEnvironmentFromSuffix_true_false_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("3_api.createEnvironmentFromSuffix_true_false_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("3_api.createEnvironmentFromSuffix_true_false_false", 2, getfields, cov, globalcov, x2);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
			__jalangi_clear_taint__(x2);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 35;
			last_functionName = "api.listEnvironments";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = false;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_api.listEnvironments_true_false_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_api.listEnvironments_true_false_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			PUT["api"]["listEnvironments"](x0,x1);
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
			fuzz.feed_cov("2_api.listEnvironments_true_false_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_api.listEnvironments_true_false_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 36;
			last_functionName = "api.getEnvironmentFromSuffix";
			last_num_args = 3;
			last_is_method = true;
			last_is_constructor = false;
			last_from_constructor = false;
			var x0 = fuzz.get_input("3_api.getEnvironmentFromSuffix_true_false_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("3_api.getEnvironmentFromSuffix_true_false_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("3_api.getEnvironmentFromSuffix_true_false_false", 2);
			last_tried_input.push(x2);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__fuzzer__reset_branches__();
			PUT["api"]["getEnvironmentFromSuffix"](x0,x1,x2);
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
			fuzz.feed_cov("3_api.getEnvironmentFromSuffix_true_false_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("3_api.getEnvironmentFromSuffix_true_false_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("3_api.getEnvironmentFromSuffix_true_false_false", 2, getfields, cov, globalcov, x2);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
			__jalangi_clear_taint__(x2);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 37;
			last_functionName = "api.createEnvironmentIfNotExists";
			last_num_args = 3;
			last_is_method = true;
			last_is_constructor = false;
			last_from_constructor = false;
			var x0 = fuzz.get_input("3_api.createEnvironmentIfNotExists_true_false_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("3_api.createEnvironmentIfNotExists_true_false_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("3_api.createEnvironmentIfNotExists_true_false_false", 2);
			last_tried_input.push(x2);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__fuzzer__reset_branches__();
			PUT["api"]["createEnvironmentIfNotExists"](x0,x1,x2);
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
			fuzz.feed_cov("3_api.createEnvironmentIfNotExists_true_false_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("3_api.createEnvironmentIfNotExists_true_false_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("3_api.createEnvironmentIfNotExists_true_false_false", 2, getfields, cov, globalcov, x2);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
			__jalangi_clear_taint__(x2);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 38;
			last_functionName = "api.createFunctionResource";
			last_num_args = 3;
			last_is_method = true;
			last_is_constructor = false;
			last_from_constructor = false;
			var x0 = fuzz.get_input("3_api.createFunctionResource_true_false_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("3_api.createFunctionResource_true_false_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("3_api.createFunctionResource_true_false_false", 2);
			last_tried_input.push(x2);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__fuzzer__reset_branches__();
			PUT["api"]["createFunctionResource"](x0,x1,x2);
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
			fuzz.feed_cov("3_api.createFunctionResource_true_false_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("3_api.createFunctionResource_true_false_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("3_api.createFunctionResource_true_false_false", 2, getfields, cov, globalcov, x2);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
			__jalangi_clear_taint__(x2);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 39;
			last_functionName = "api.listFunctionResources";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = false;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_api.listFunctionResources_true_false_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_api.listFunctionResources_true_false_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			PUT["api"]["listFunctionResources"](x0,x1);
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
			fuzz.feed_cov("2_api.listFunctionResources_true_false_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_api.listFunctionResources_true_false_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 40;
			last_functionName = "api.getOrCreateFunctionResources";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = false;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_api.getOrCreateFunctionResources_true_false_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			PUT["api"]["getOrCreateFunctionResources"](x0);
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
			fuzz.feed_cov("1_api.getOrCreateFunctionResources_true_false_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 41;
			last_functionName = "api.uploadFunction";
			last_num_args = 4;
			last_is_method = true;
			last_is_constructor = false;
			last_from_constructor = false;
			var x0 = fuzz.get_input("4_api.uploadFunction_true_false_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("4_api.uploadFunction_true_false_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("4_api.uploadFunction_true_false_false", 2);
			last_tried_input.push(x2);
			var x3 = fuzz.get_input("4_api.uploadFunction_true_false_false", 3);
			last_tried_input.push(x3);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__jalangi_set_taint__(x3);
			__fuzzer__reset_branches__();
			PUT["api"]["uploadFunction"](x0,x1,x2,x3);
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
			fuzz.feed_cov("4_api.uploadFunction_true_false_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("4_api.uploadFunction_true_false_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("4_api.uploadFunction_true_false_false", 2, getfields, cov, globalcov, x2);
			fuzz.feed_cov("4_api.uploadFunction_true_false_false", 3, getfields, cov, globalcov, x3);
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
			last_tried_entrypoint = 42;
			last_functionName = "api.isFunctionSid";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_api.isFunctionSid_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["api"]["isFunctionSid"](x0);
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
			fuzz.feed_cov("1_api.isFunctionSid_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 43;
			last_functionName = "api.listFunctionVersions";
			last_num_args = 3;
			last_is_method = true;
			last_is_constructor = false;
			last_from_constructor = false;
			var x0 = fuzz.get_input("3_api.listFunctionVersions_true_false_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("3_api.listFunctionVersions_true_false_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("3_api.listFunctionVersions_true_false_false", 2);
			last_tried_input.push(x2);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__fuzzer__reset_branches__();
			PUT["api"]["listFunctionVersions"](x0,x1,x2);
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
			fuzz.feed_cov("3_api.listFunctionVersions_true_false_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("3_api.listFunctionVersions_true_false_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("3_api.listFunctionVersions_true_false_false", 2, getfields, cov, globalcov, x2);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
			__jalangi_clear_taint__(x2);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 44;
			last_functionName = "api.downloadFunctionVersion";
			last_num_args = 4;
			last_is_method = true;
			last_is_constructor = false;
			last_from_constructor = false;
			var x0 = fuzz.get_input("4_api.downloadFunctionVersion_true_false_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("4_api.downloadFunctionVersion_true_false_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("4_api.downloadFunctionVersion_true_false_false", 2);
			last_tried_input.push(x2);
			var x3 = fuzz.get_input("4_api.downloadFunctionVersion_true_false_false", 3);
			last_tried_input.push(x3);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__jalangi_set_taint__(x3);
			__fuzzer__reset_branches__();
			PUT["api"]["downloadFunctionVersion"](x0,x1,x2,x3);
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
			fuzz.feed_cov("4_api.downloadFunctionVersion_true_false_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("4_api.downloadFunctionVersion_true_false_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("4_api.downloadFunctionVersion_true_false_false", 2, getfields, cov, globalcov, x2);
			fuzz.feed_cov("4_api.downloadFunctionVersion_true_false_false", 3, getfields, cov, globalcov, x3);
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
			last_tried_entrypoint = 45;
			last_functionName = "api.createService";
			last_num_args = 3;
			last_is_method = true;
			last_is_constructor = false;
			last_from_constructor = false;
			var x0 = fuzz.get_input("3_api.createService_true_false_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("3_api.createService_true_false_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("3_api.createService_true_false_false", 2);
			last_tried_input.push(x2);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__fuzzer__reset_branches__();
			PUT["api"]["createService"](x0,x1,x2);
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
			fuzz.feed_cov("3_api.createService_true_false_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("3_api.createService_true_false_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("3_api.createService_true_false_false", 2, getfields, cov, globalcov, x2);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
			__jalangi_clear_taint__(x2);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 46;
			last_functionName = "api.listServices";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = false;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_api.listServices_true_false_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			PUT["api"]["listServices"](x0);
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
			fuzz.feed_cov("1_api.listServices_true_false_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 47;
			last_functionName = "api.findServiceSid";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = false;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_api.findServiceSid_true_false_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_api.findServiceSid_true_false_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			PUT["api"]["findServiceSid"](x0,x1);
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
			fuzz.feed_cov("2_api.findServiceSid_true_false_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_api.findServiceSid_true_false_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 48;
			last_functionName = "api.getService";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = false;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_api.getService_true_false_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_api.getService_true_false_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			PUT["api"]["getService"](x0,x1);
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
			fuzz.feed_cov("2_api.getService_true_false_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_api.getService_true_false_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 49;
			last_functionName = "api.listVariablesForEnvironment";
			last_num_args = 3;
			last_is_method = true;
			last_is_constructor = false;
			last_from_constructor = false;
			var x0 = fuzz.get_input("3_api.listVariablesForEnvironment_true_false_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("3_api.listVariablesForEnvironment_true_false_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("3_api.listVariablesForEnvironment_true_false_false", 2);
			last_tried_input.push(x2);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__fuzzer__reset_branches__();
			PUT["api"]["listVariablesForEnvironment"](x0,x1,x2);
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
			fuzz.feed_cov("3_api.listVariablesForEnvironment_true_false_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("3_api.listVariablesForEnvironment_true_false_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("3_api.listVariablesForEnvironment_true_false_false", 2, getfields, cov, globalcov, x2);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
			__jalangi_clear_taint__(x2);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 50;
			last_functionName = "api.setEnvironmentVariables";
			last_num_args = 5;
			last_is_method = true;
			last_is_constructor = false;
			last_from_constructor = false;
			var x0 = fuzz.get_input("5_api.setEnvironmentVariables_true_false_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("5_api.setEnvironmentVariables_true_false_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("5_api.setEnvironmentVariables_true_false_false", 2);
			last_tried_input.push(x2);
			var x3 = fuzz.get_input("5_api.setEnvironmentVariables_true_false_false", 3);
			last_tried_input.push(x3);
			var x4 = fuzz.get_input("5_api.setEnvironmentVariables_true_false_false", 4);
			last_tried_input.push(x4);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__jalangi_set_taint__(x3);
			__jalangi_set_taint__(x4);
			__fuzzer__reset_branches__();
			PUT["api"]["setEnvironmentVariables"](x0,x1,x2,x3,x4);
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
			fuzz.feed_cov("5_api.setEnvironmentVariables_true_false_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("5_api.setEnvironmentVariables_true_false_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("5_api.setEnvironmentVariables_true_false_false", 2, getfields, cov, globalcov, x2);
			fuzz.feed_cov("5_api.setEnvironmentVariables_true_false_false", 3, getfields, cov, globalcov, x3);
			fuzz.feed_cov("5_api.setEnvironmentVariables_true_false_false", 4, getfields, cov, globalcov, x4);
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
			last_tried_entrypoint = 51;
			last_functionName = "api.deleteEnvironmentVariable";
			last_num_args = 4;
			last_is_method = true;
			last_is_constructor = false;
			last_from_constructor = false;
			var x0 = fuzz.get_input("4_api.deleteEnvironmentVariable_true_false_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("4_api.deleteEnvironmentVariable_true_false_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("4_api.deleteEnvironmentVariable_true_false_false", 2);
			last_tried_input.push(x2);
			var x3 = fuzz.get_input("4_api.deleteEnvironmentVariable_true_false_false", 3);
			last_tried_input.push(x3);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__jalangi_set_taint__(x3);
			__fuzzer__reset_branches__();
			PUT["api"]["deleteEnvironmentVariable"](x0,x1,x2,x3);
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
			fuzz.feed_cov("4_api.deleteEnvironmentVariable_true_false_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("4_api.deleteEnvironmentVariable_true_false_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("4_api.deleteEnvironmentVariable_true_false_false", 2, getfields, cov, globalcov, x2);
			fuzz.feed_cov("4_api.deleteEnvironmentVariable_true_false_false", 3, getfields, cov, globalcov, x3);
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
			last_tried_entrypoint = 52;
			last_functionName = "api.removeEnvironmentVariables";
			last_num_args = 4;
			last_is_method = true;
			last_is_constructor = false;
			last_from_constructor = false;
			var x0 = fuzz.get_input("4_api.removeEnvironmentVariables_true_false_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("4_api.removeEnvironmentVariables_true_false_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("4_api.removeEnvironmentVariables_true_false_false", 2);
			last_tried_input.push(x2);
			var x3 = fuzz.get_input("4_api.removeEnvironmentVariables_true_false_false", 3);
			last_tried_input.push(x3);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__jalangi_set_taint__(x3);
			__fuzzer__reset_branches__();
			PUT["api"]["removeEnvironmentVariables"](x0,x1,x2,x3);
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
			fuzz.feed_cov("4_api.removeEnvironmentVariables_true_false_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("4_api.removeEnvironmentVariables_true_false_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("4_api.removeEnvironmentVariables_true_false_false", 2, getfields, cov, globalcov, x2);
			fuzz.feed_cov("4_api.removeEnvironmentVariables_true_false_false", 3, getfields, cov, globalcov, x3);
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
			last_tried_entrypoint = 53;
			last_functionName = "api.listLogResources";
			last_num_args = 3;
			last_is_method = true;
			last_is_constructor = false;
			last_from_constructor = false;
			var x0 = fuzz.get_input("3_api.listLogResources_true_false_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("3_api.listLogResources_true_false_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("3_api.listLogResources_true_false_false", 2);
			last_tried_input.push(x2);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__fuzzer__reset_branches__();
			PUT["api"]["listLogResources"](x0,x1,x2);
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
			fuzz.feed_cov("3_api.listLogResources_true_false_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("3_api.listLogResources_true_false_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("3_api.listLogResources_true_false_false", 2, getfields, cov, globalcov, x2);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
			__jalangi_clear_taint__(x2);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 54;
			last_functionName = "api.listOnePageLogResources";
			last_num_args = 4;
			last_is_method = true;
			last_is_constructor = false;
			last_from_constructor = false;
			var x0 = fuzz.get_input("4_api.listOnePageLogResources_true_false_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("4_api.listOnePageLogResources_true_false_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("4_api.listOnePageLogResources_true_false_false", 2);
			last_tried_input.push(x2);
			var x3 = fuzz.get_input("4_api.listOnePageLogResources_true_false_false", 3);
			last_tried_input.push(x3);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__jalangi_set_taint__(x3);
			__fuzzer__reset_branches__();
			PUT["api"]["listOnePageLogResources"](x0,x1,x2,x3);
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
			fuzz.feed_cov("4_api.listOnePageLogResources_true_false_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("4_api.listOnePageLogResources_true_false_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("4_api.listOnePageLogResources_true_false_false", 2, getfields, cov, globalcov, x2);
			fuzz.feed_cov("4_api.listOnePageLogResources_true_false_false", 3, getfields, cov, globalcov, x3);
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
			last_tried_entrypoint = 55;
			last_functionName = "api.getLog";
			last_num_args = 4;
			last_is_method = true;
			last_is_constructor = false;
			last_from_constructor = false;
			var x0 = fuzz.get_input("4_api.getLog_true_false_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("4_api.getLog_true_false_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("4_api.getLog_true_false_false", 2);
			last_tried_input.push(x2);
			var x3 = fuzz.get_input("4_api.getLog_true_false_false", 3);
			last_tried_input.push(x3);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__jalangi_set_taint__(x3);
			__fuzzer__reset_branches__();
			PUT["api"]["getLog"](x0,x1,x2,x3);
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
			fuzz.feed_cov("4_api.getLog_true_false_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("4_api.getLog_true_false_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("4_api.getLog_true_false_false", 2, getfields, cov, globalcov, x2);
			fuzz.feed_cov("4_api.getLog_true_false_false", 3, getfields, cov, globalcov, x3);
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
			last_tried_entrypoint = 56;
			last_functionName = "utils.getContentType";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = false;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_utils.getContentType_true_false_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_utils.getContentType_true_false_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			PUT["utils"]["getContentType"](x0,x1);
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
			fuzz.feed_cov("2_utils.getContentType_true_false_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_utils.getContentType_true_false_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 57;
			last_functionName = "utils.access";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_utils.access_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["utils"]["access"](x0);
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
			fuzz.feed_cov("1_utils.access_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 58;
			last_functionName = "utils.readFile";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_utils.readFile_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["utils"]["readFile"](x0);
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
			fuzz.feed_cov("1_utils.readFile_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 59;
			last_functionName = "utils.writeFile";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_utils.writeFile_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["utils"]["writeFile"](x0);
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
			fuzz.feed_cov("1_utils.writeFile_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 60;
			last_functionName = "utils.readDir";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_utils.readDir_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["utils"]["readDir"](x0);
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
			fuzz.feed_cov("1_utils.readDir_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 61;
			last_functionName = "utils.stat";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_utils.stat_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["utils"]["stat"](x0);
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
			fuzz.feed_cov("1_utils.stat_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 62;
			last_functionName = "utils.fileExists";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = false;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_utils.fileExists_true_false_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_utils.fileExists_true_false_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			PUT["utils"]["fileExists"](x0,x1);
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
			fuzz.feed_cov("2_utils.fileExists_true_false_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_utils.fileExists_true_false_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 63;
			last_functionName = "utils.checkForValidPath";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_utils.checkForValidPath_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["utils"]["checkForValidPath"](x0);
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
			fuzz.feed_cov("1_utils.checkForValidPath_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 64;
			last_functionName = "utils.getPathAndAccessFromFileInfo";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_utils.getPathAndAccessFromFileInfo_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_utils.getPathAndAccessFromFileInfo_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["utils"]["getPathAndAccessFromFileInfo"](x0,x1);
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
			fuzz.feed_cov("2_utils.getPathAndAccessFromFileInfo_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_utils.getPathAndAccessFromFileInfo_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 65;
			last_functionName = "utils.getDirContent";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = false;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_utils.getDirContent_true_false_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_utils.getDirContent_true_false_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			PUT["utils"]["getDirContent"](x0,x1);
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
			fuzz.feed_cov("2_utils.getDirContent_true_false_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_utils.getDirContent_true_false_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 66;
			last_functionName = "utils.getFirstMatchingDirectory";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_utils.getFirstMatchingDirectory_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_utils.getFirstMatchingDirectory_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["utils"]["getFirstMatchingDirectory"](x0,x1);
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
			fuzz.feed_cov("2_utils.getFirstMatchingDirectory_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_utils.getFirstMatchingDirectory_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 67;
			last_functionName = "utils.getListOfFunctionsAndAssets";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = false;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_utils.getListOfFunctionsAndAssets_true_false_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_utils.getListOfFunctionsAndAssets_true_false_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			PUT["utils"]["getListOfFunctionsAndAssets"](x0,x1);
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
			fuzz.feed_cov("2_utils.getListOfFunctionsAndAssets_true_false_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_utils.getListOfFunctionsAndAssets_true_false_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 68;
			last_functionName = "utils.sleep";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = false;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_utils.sleep_true_false_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			PUT["utils"]["sleep"](x0);
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
			fuzz.feed_cov("1_utils.sleep_true_false_false", 0, getfields, cov, globalcov, x0);
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