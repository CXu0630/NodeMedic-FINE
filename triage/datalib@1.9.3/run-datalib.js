// JALANGI DRIVER

process.backup_exit = process.exit;
process.exit = function(){console.log("Tried calling process.exit")};
    
var PUT = require('/nodetaint/packageData/datalib/node_modules/datalib');
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
var num_entryPoints = 166;

function get_fuzzer(obj_rec, gen_strings_only){

    var res = new fuzzer.Fuzzer(num_entryPoints, obj_rec, gen_strings_only);
    res.set_seed(`[{"id":"","types":["Bot"],"structure":{},"constraints":[],"concrete":null}]`);	res.set_args("2_load_true_true_false", 2);
	res.set_args("2_read_true_true_false", 2);
	res.set_args("2_type_true_true_false", 2);
	res.set_args("1_bins_true_true_false", 1);
	res.set_args("3_$bin_true_true_false", 3);
	res.set_args("3_histogram_true_true_false", 3);
	res.set_args("1_template_true_true_false", 1);
	res.set_args("2_namedfunc_true_true_false", 2);
	res.set_args("1_identity_true_true_false", 1);
	res.set_args("1_duplicate_true_true_false", 1);
	res.set_args("2_equal_true_true_false", 2);
	res.set_args("1_extend_true_true_false", 1);
	res.set_args("1_keys_true_true_false", 1);
	res.set_args("1_vals_true_true_false", 1);
	res.set_args("2_toMap_true_true_false", 2);
	res.set_args("1_keystr_true_true_false", 1);
	res.set_args("1_isObject_true_true_false", 1);
	res.set_args("1_isFunction_true_true_false", 1);
	res.set_args("1_isString_true_true_false", 1);
	res.set_args("1_isArray_true_false_false", 1);
	res.set_args("1_isNumber_true_true_false", 1);
	res.set_args("1_isBoolean_true_true_false", 1);
	res.set_args("1_isDate_true_true_false", 1);
	res.set_args("1_isValid_true_true_false", 1);
	res.set_args("1_isBuffer_true_true_false", 1);
	res.set_args("1_number_true_true_false", 1);
	res.set_args("1_boolean_true_true_false", 1);
	res.set_args("2_date_true_true_false", 2);
	res.set_args("1_array_true_true_false", 1);
	res.set_args("1_str_true_true_false", 1);
	res.set_args("1_field_true_true_false", 1);
	res.set_args("1_accessor_true_true_false", 1);
	res.set_args("1_$_true_true_false", 1);
	res.set_args("1_mutator_true_true_false", 1);
	res.set_args("2_$func_true_true_false", 2);
	res.set_args("1_$valid_true_true_false", 1);
	res.set_args("1_$length_true_true_false", 1);
	res.set_args("2_$in_true_true_false", 2);
	res.set_args("1_comparator_true_true_false", 1);
	res.set_args("2_cmp_true_true_false", 2);
	res.set_args("2_numcmp_true_true_false", 2);
	res.set_args("3_stablesort_true_true_false", 3);
	res.set_args("1_permute_true_true_false", 1);
	res.set_args("4_pad_true_true_false", 4);
	res.set_args("5_truncate_true_true_false", 5);
	res.set_args("1_$year_true_true_false", 1);
	res.set_args("1_$month_true_true_false", 1);
	res.set_args("1_$date_true_true_false", 1);
	res.set_args("1_$day_true_true_false", 1);
	res.set_args("1_$hour_true_true_false", 1);
	res.set_args("1_$minute_true_true_false", 1);
	res.set_args("1_$second_true_true_false", 1);
	res.set_args("1_$utcYear_true_true_false", 1);
	res.set_args("1_$utcMonth_true_true_false", 1);
	res.set_args("1_$utcDate_true_true_false", 1);
	res.set_args("1_$utcDay_true_true_false", 1);
	res.set_args("1_$utcHour_true_true_false", 1);
	res.set_args("1_$utcMinute_true_true_false", 1);
	res.set_args("1_$utcSecond_true_true_false", 1);
	res.set_args("2_repeat_true_true_false", 2);
	res.set_args("1_zeros_true_true_false", 1);
	res.set_args("3_range_true_true_false", 3);
	res.set_args("3_unique_true_true_false", 3);
	res.set_args("1_count_true_true_false", 1);
	res.set_args("2_median_true_true_false", 2);
	res.set_args("2_quartile_true_true_false", 2);
	res.set_args("3_quantile_true_true_false", 3);
	res.set_args("2_sum_true_true_false", 2);
	res.set_args("2_mean_true_true_false", 2);
	res.set_args("2_variance_true_true_false", 2);
	res.set_args("2_stdev_true_true_false", 2);
	res.set_args("2_modeskew_true_true_false", 2);
	res.set_args("2_min_true_true_false", 2);
	res.set_args("2_max_true_true_false", 2);
	res.set_args("2_extent_true_true_false", 2);
	res.set_args("3_dot_true_true_false", 3);
	res.set_args("4_dist_true_true_false", 4);
	res.set_args("3_cohensd_true_true_false", 3);
	res.set_args("3_covariance_true_true_false", 3);
	res.set_args("2_rank_true_true_false", 2);
	res.set_args("3_cor_true_true_false", 3);
	res.set_args("3_linearRegression_true_true_false", 3);
	res.set_args("2_entropy_true_true_false", 2);
	res.set_args("4_mutual_true_true_false", 4);
	res.set_args("2_profile_true_true_false", 2);
	res.set_args("2_summary_true_true_false", 2);
	res.set_args("3_json_true_true_false", 3);
	res.set_args("3_topojson_true_true_false", 3);
	res.set_args("3_treejson_true_true_false", 3);
	res.set_args("3_dsv_true_true_false", 3);
	res.set_args("3_csv_true_true_false", 3);
	res.set_args("3_tsv_true_true_false", 3);
	res.set_args("1_format.numberLocale_true_true_false", 1);
	res.set_args("1_format.number_true_true_false", 1);
	res.set_args("2_format.numberPrefix_true_true_false", 2);
	res.set_args("1_format.timeLocale_true_true_false", 1);
	res.set_args("1_format.time_true_true_false", 1);
	res.set_args("1_format.utc_true_true_false", 1);
	res.set_args("1_format.locale_true_true_false", 1);
	res.set_args("2_format.month_true_true_false", 2);
	res.set_args("2_format.day_true_true_false", 2);
	res.set_args("1_format.quarter_true_true_false", 1);
	res.set_args("1_format.utcQuarter_true_true_false", 1);
	res.set_args("2_format.table_true_true_false", 2);
	res.set_args("1_format.summary_true_true_false", 1);
	res.set_args("3_time.find_true_true_false", 3);
	res.set_args("2_random.uniform_true_true_false", 2);
	res.set_args("2_random.integer_true_true_false", 2);
	res.set_args("2_random.normal_true_true_false", 2);
	res.set_args("2_random.bootstrap_true_true_false", 2);
	res.set_args("5_bootstrap.ci_true_true_false", 5);
	res.set_args("3_z.ci_true_true_false", 3);
	res.set_args("4_z.test_true_true_false", 4);
	res.set_args("2_print.table_true_true_false", 2);
	res.set_args("1_print.summary_true_true_false", 1);
	res.set_args("1_time.second.date_true_true_false", 1);
	res.set_args("1_time.second.unit_true_true_false", 1);
	res.set_args("1_time.minute.date_true_true_false", 1);
	res.set_args("1_time.minute.unit_true_true_false", 1);
	res.set_args("1_time.hour.date_true_true_false", 1);
	res.set_args("1_time.hour.unit_true_true_false", 1);
	res.set_args("1_time.day.date_true_true_false", 1);
	res.set_args("1_time.day.unit_true_true_false", 1);
	res.set_args("1_time.month.date_true_true_false", 1);
	res.set_args("1_time.month.unit_true_true_false", 1);
	res.set_args("1_time.year.date_true_true_false", 1);
	res.set_args("1_time.year.unit_true_true_false", 1);
	res.set_args("1_time.seconds.date_true_true_false", 1);
	res.set_args("1_time.seconds.unit_true_true_false", 1);
	res.set_args("1_time.minutes.date_true_true_false", 1);
	res.set_args("1_time.minutes.unit_true_true_false", 1);
	res.set_args("1_time.hours.date_true_true_false", 1);
	res.set_args("1_time.hours.unit_true_true_false", 1);
	res.set_args("1_time.weekdays.date_true_true_false", 1);
	res.set_args("1_time.weekdays.unit_true_true_false", 1);
	res.set_args("1_time.dates.date_true_true_false", 1);
	res.set_args("1_time.dates.unit_true_true_false", 1);
	res.set_args("1_time.months.date_true_true_false", 1);
	res.set_args("1_time.months.unit_true_true_false", 1);
	res.set_args("3_time.utc.find_true_true_false", 3);
	res.set_args("1_time.utc.second.date_true_true_false", 1);
	res.set_args("1_time.utc.second.unit_true_true_false", 1);
	res.set_args("1_time.utc.minute.date_true_true_false", 1);
	res.set_args("1_time.utc.minute.unit_true_true_false", 1);
	res.set_args("1_time.utc.hour.date_true_true_false", 1);
	res.set_args("1_time.utc.hour.unit_true_true_false", 1);
	res.set_args("1_time.utc.day.date_true_true_false", 1);
	res.set_args("1_time.utc.day.unit_true_true_false", 1);
	res.set_args("1_time.utc.month.date_true_true_false", 1);
	res.set_args("1_time.utc.month.unit_true_true_false", 1);
	res.set_args("1_time.utc.year.date_true_true_false", 1);
	res.set_args("1_time.utc.year.unit_true_true_false", 1);
	res.set_args("1_time.utc.seconds.date_true_true_false", 1);
	res.set_args("1_time.utc.seconds.unit_true_true_false", 1);
	res.set_args("1_time.utc.minutes.date_true_true_false", 1);
	res.set_args("1_time.utc.minutes.unit_true_true_false", 1);
	res.set_args("1_time.utc.hours.date_true_true_false", 1);
	res.set_args("1_time.utc.hours.unit_true_true_false", 1);
	res.set_args("1_time.utc.weekdays.date_true_true_false", 1);
	res.set_args("1_time.utc.weekdays.unit_true_true_false", 1);
	res.set_args("1_time.utc.dates.date_true_true_false", 1);
	res.set_args("1_time.utc.dates.unit_true_true_false", 1);
	res.set_args("1_time.utc.months.date_true_true_false", 1);
	res.set_args("1_time.utc.months.unit_true_true_false", 1);
	res.set_args("1_format.auto.number_true_true_false", 1);
	res.set_args("3_format.auto.linear_true_true_false", 3);
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
			last_functionName = "load";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_load_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_load_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["load"](x0,x1);
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
			fuzz.feed_cov("2_load_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_load_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 1;
			last_functionName = "read";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_read_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_read_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["read"](x0,x1);
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
			fuzz.feed_cov("2_read_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_read_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 2;
			last_functionName = "type";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_type_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_type_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["type"](x0,x1);
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
			fuzz.feed_cov("2_type_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_type_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 3;
			last_functionName = "bins";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_bins_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["bins"](x0);
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
			fuzz.feed_cov("1_bins_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 4;
			last_functionName = "$bin";
			last_num_args = 3;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("3_$bin_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("3_$bin_true_true_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("3_$bin_true_true_false", 2);
			last_tried_input.push(x2);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__fuzzer__reset_branches__();
			new PUT["$bin"](x0,x1,x2);
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
			fuzz.feed_cov("3_$bin_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("3_$bin_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("3_$bin_true_true_false", 2, getfields, cov, globalcov, x2);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
			__jalangi_clear_taint__(x2);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 5;
			last_functionName = "histogram";
			last_num_args = 3;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("3_histogram_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("3_histogram_true_true_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("3_histogram_true_true_false", 2);
			last_tried_input.push(x2);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__fuzzer__reset_branches__();
			new PUT["histogram"](x0,x1,x2);
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
			fuzz.feed_cov("3_histogram_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("3_histogram_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("3_histogram_true_true_false", 2, getfields, cov, globalcov, x2);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
			__jalangi_clear_taint__(x2);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 6;
			last_functionName = "template";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_template_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["template"](x0);
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
			fuzz.feed_cov("1_template_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 7;
			last_functionName = "namedfunc";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_namedfunc_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_namedfunc_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["namedfunc"](x0,x1);
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
			fuzz.feed_cov("2_namedfunc_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_namedfunc_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 8;
			last_functionName = "identity";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_identity_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["identity"](x0);
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
			fuzz.feed_cov("1_identity_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 9;
			last_functionName = "duplicate";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_duplicate_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["duplicate"](x0);
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
			fuzz.feed_cov("1_duplicate_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 10;
			last_functionName = "equal";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_equal_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_equal_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["equal"](x0,x1);
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
			fuzz.feed_cov("2_equal_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_equal_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 11;
			last_functionName = "extend";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_extend_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["extend"](x0);
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
			fuzz.feed_cov("1_extend_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 12;
			last_functionName = "keys";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_keys_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["keys"](x0);
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
			fuzz.feed_cov("1_keys_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 13;
			last_functionName = "vals";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_vals_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["vals"](x0);
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
			fuzz.feed_cov("1_vals_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 14;
			last_functionName = "toMap";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_toMap_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_toMap_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["toMap"](x0,x1);
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
			fuzz.feed_cov("2_toMap_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_toMap_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 15;
			last_functionName = "keystr";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_keystr_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["keystr"](x0);
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
			fuzz.feed_cov("1_keystr_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 16;
			last_functionName = "isObject";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_isObject_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["isObject"](x0);
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
			fuzz.feed_cov("1_isObject_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 17;
			last_functionName = "isFunction";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_isFunction_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["isFunction"](x0);
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
			fuzz.feed_cov("1_isFunction_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 18;
			last_functionName = "isString";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_isString_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["isString"](x0);
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
			fuzz.feed_cov("1_isString_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 19;
			last_functionName = "isArray";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = false;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_isArray_true_false_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			PUT["isArray"](x0);
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
			fuzz.feed_cov("1_isArray_true_false_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 20;
			last_functionName = "isNumber";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_isNumber_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["isNumber"](x0);
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
			fuzz.feed_cov("1_isNumber_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 21;
			last_functionName = "isBoolean";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_isBoolean_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["isBoolean"](x0);
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
			fuzz.feed_cov("1_isBoolean_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 22;
			last_functionName = "isDate";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_isDate_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["isDate"](x0);
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
			fuzz.feed_cov("1_isDate_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 23;
			last_functionName = "isValid";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_isValid_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["isValid"](x0);
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
			fuzz.feed_cov("1_isValid_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 24;
			last_functionName = "isBuffer";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_isBuffer_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["isBuffer"](x0);
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
			fuzz.feed_cov("1_isBuffer_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 25;
			last_functionName = "number";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_number_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["number"](x0);
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
			fuzz.feed_cov("1_number_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 26;
			last_functionName = "boolean";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_boolean_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["boolean"](x0);
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
			fuzz.feed_cov("1_boolean_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 27;
			last_functionName = "date";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_date_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_date_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["date"](x0,x1);
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
			fuzz.feed_cov("2_date_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_date_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 28;
			last_functionName = "array";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_array_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["array"](x0);
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
			fuzz.feed_cov("1_array_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 29;
			last_functionName = "str";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_str_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["str"](x0);
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
			fuzz.feed_cov("1_str_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 30;
			last_functionName = "field";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_field_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["field"](x0);
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
			fuzz.feed_cov("1_field_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 31;
			last_functionName = "accessor";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_accessor_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["accessor"](x0);
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
			fuzz.feed_cov("1_accessor_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 32;
			last_functionName = "$";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_$_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["$"](x0);
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
			fuzz.feed_cov("1_$_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 33;
			last_functionName = "mutator";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_mutator_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["mutator"](x0);
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
			fuzz.feed_cov("1_mutator_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 34;
			last_functionName = "$func";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_$func_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_$func_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["$func"](x0,x1);
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
			fuzz.feed_cov("2_$func_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_$func_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 35;
			last_functionName = "$valid";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_$valid_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["$valid"](x0);
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
			fuzz.feed_cov("1_$valid_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 36;
			last_functionName = "$length";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_$length_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["$length"](x0);
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
			fuzz.feed_cov("1_$length_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 37;
			last_functionName = "$in";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_$in_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_$in_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["$in"](x0,x1);
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
			fuzz.feed_cov("2_$in_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_$in_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 38;
			last_functionName = "comparator";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_comparator_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["comparator"](x0);
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
			fuzz.feed_cov("1_comparator_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 39;
			last_functionName = "cmp";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_cmp_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_cmp_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["cmp"](x0,x1);
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
			fuzz.feed_cov("2_cmp_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_cmp_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 40;
			last_functionName = "numcmp";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_numcmp_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_numcmp_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["numcmp"](x0,x1);
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
			fuzz.feed_cov("2_numcmp_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_numcmp_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 41;
			last_functionName = "stablesort";
			last_num_args = 3;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("3_stablesort_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("3_stablesort_true_true_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("3_stablesort_true_true_false", 2);
			last_tried_input.push(x2);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__fuzzer__reset_branches__();
			new PUT["stablesort"](x0,x1,x2);
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
			fuzz.feed_cov("3_stablesort_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("3_stablesort_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("3_stablesort_true_true_false", 2, getfields, cov, globalcov, x2);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
			__jalangi_clear_taint__(x2);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 42;
			last_functionName = "permute";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_permute_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["permute"](x0);
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
			fuzz.feed_cov("1_permute_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 43;
			last_functionName = "pad";
			last_num_args = 4;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("4_pad_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("4_pad_true_true_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("4_pad_true_true_false", 2);
			last_tried_input.push(x2);
			var x3 = fuzz.get_input("4_pad_true_true_false", 3);
			last_tried_input.push(x3);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__jalangi_set_taint__(x3);
			__fuzzer__reset_branches__();
			new PUT["pad"](x0,x1,x2,x3);
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
			fuzz.feed_cov("4_pad_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("4_pad_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("4_pad_true_true_false", 2, getfields, cov, globalcov, x2);
			fuzz.feed_cov("4_pad_true_true_false", 3, getfields, cov, globalcov, x3);
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
			last_tried_entrypoint = 44;
			last_functionName = "truncate";
			last_num_args = 5;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("5_truncate_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("5_truncate_true_true_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("5_truncate_true_true_false", 2);
			last_tried_input.push(x2);
			var x3 = fuzz.get_input("5_truncate_true_true_false", 3);
			last_tried_input.push(x3);
			var x4 = fuzz.get_input("5_truncate_true_true_false", 4);
			last_tried_input.push(x4);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__jalangi_set_taint__(x3);
			__jalangi_set_taint__(x4);
			__fuzzer__reset_branches__();
			new PUT["truncate"](x0,x1,x2,x3,x4);
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
			fuzz.feed_cov("5_truncate_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("5_truncate_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("5_truncate_true_true_false", 2, getfields, cov, globalcov, x2);
			fuzz.feed_cov("5_truncate_true_true_false", 3, getfields, cov, globalcov, x3);
			fuzz.feed_cov("5_truncate_true_true_false", 4, getfields, cov, globalcov, x4);
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
			last_tried_entrypoint = 45;
			last_functionName = "$year";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_$year_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["$year"](x0);
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
			fuzz.feed_cov("1_$year_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 46;
			last_functionName = "$month";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_$month_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["$month"](x0);
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
			fuzz.feed_cov("1_$month_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 47;
			last_functionName = "$date";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_$date_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["$date"](x0);
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
			fuzz.feed_cov("1_$date_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 48;
			last_functionName = "$day";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_$day_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["$day"](x0);
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
			fuzz.feed_cov("1_$day_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 49;
			last_functionName = "$hour";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_$hour_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["$hour"](x0);
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
			fuzz.feed_cov("1_$hour_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 50;
			last_functionName = "$minute";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_$minute_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["$minute"](x0);
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
			fuzz.feed_cov("1_$minute_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 51;
			last_functionName = "$second";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_$second_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["$second"](x0);
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
			fuzz.feed_cov("1_$second_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 52;
			last_functionName = "$utcYear";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_$utcYear_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["$utcYear"](x0);
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
			fuzz.feed_cov("1_$utcYear_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 53;
			last_functionName = "$utcMonth";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_$utcMonth_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["$utcMonth"](x0);
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
			fuzz.feed_cov("1_$utcMonth_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 54;
			last_functionName = "$utcDate";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_$utcDate_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["$utcDate"](x0);
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
			fuzz.feed_cov("1_$utcDate_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 55;
			last_functionName = "$utcDay";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_$utcDay_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["$utcDay"](x0);
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
			fuzz.feed_cov("1_$utcDay_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 56;
			last_functionName = "$utcHour";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_$utcHour_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["$utcHour"](x0);
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
			fuzz.feed_cov("1_$utcHour_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 57;
			last_functionName = "$utcMinute";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_$utcMinute_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["$utcMinute"](x0);
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
			fuzz.feed_cov("1_$utcMinute_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 58;
			last_functionName = "$utcSecond";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_$utcSecond_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["$utcSecond"](x0);
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
			fuzz.feed_cov("1_$utcSecond_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 59;
			last_functionName = "repeat";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_repeat_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_repeat_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["repeat"](x0,x1);
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
			fuzz.feed_cov("2_repeat_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_repeat_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 60;
			last_functionName = "zeros";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_zeros_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["zeros"](x0);
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
			fuzz.feed_cov("1_zeros_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 61;
			last_functionName = "range";
			last_num_args = 3;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("3_range_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("3_range_true_true_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("3_range_true_true_false", 2);
			last_tried_input.push(x2);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__fuzzer__reset_branches__();
			new PUT["range"](x0,x1,x2);
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
			fuzz.feed_cov("3_range_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("3_range_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("3_range_true_true_false", 2, getfields, cov, globalcov, x2);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
			__jalangi_clear_taint__(x2);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 62;
			last_functionName = "unique";
			last_num_args = 3;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("3_unique_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("3_unique_true_true_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("3_unique_true_true_false", 2);
			last_tried_input.push(x2);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__fuzzer__reset_branches__();
			new PUT["unique"](x0,x1,x2);
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
			fuzz.feed_cov("3_unique_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("3_unique_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("3_unique_true_true_false", 2, getfields, cov, globalcov, x2);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
			__jalangi_clear_taint__(x2);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 63;
			last_functionName = "count";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_count_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["count"](x0);
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
			fuzz.feed_cov("1_count_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 64;
			last_functionName = "median";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_median_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_median_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["median"](x0,x1);
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
			fuzz.feed_cov("2_median_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_median_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 65;
			last_functionName = "quartile";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_quartile_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_quartile_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["quartile"](x0,x1);
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
			fuzz.feed_cov("2_quartile_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_quartile_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 66;
			last_functionName = "quantile";
			last_num_args = 3;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("3_quantile_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("3_quantile_true_true_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("3_quantile_true_true_false", 2);
			last_tried_input.push(x2);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__fuzzer__reset_branches__();
			new PUT["quantile"](x0,x1,x2);
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
			fuzz.feed_cov("3_quantile_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("3_quantile_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("3_quantile_true_true_false", 2, getfields, cov, globalcov, x2);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
			__jalangi_clear_taint__(x2);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 67;
			last_functionName = "sum";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_sum_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_sum_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["sum"](x0,x1);
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
			fuzz.feed_cov("2_sum_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_sum_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 68;
			last_functionName = "mean";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_mean_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_mean_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["mean"](x0,x1);
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
			fuzz.feed_cov("2_mean_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_mean_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 69;
			last_functionName = "variance";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_variance_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_variance_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["variance"](x0,x1);
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
			fuzz.feed_cov("2_variance_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_variance_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 70;
			last_functionName = "stdev";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_stdev_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_stdev_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["stdev"](x0,x1);
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
			fuzz.feed_cov("2_stdev_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_stdev_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 71;
			last_functionName = "modeskew";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_modeskew_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_modeskew_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["modeskew"](x0,x1);
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
			fuzz.feed_cov("2_modeskew_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_modeskew_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 72;
			last_functionName = "min";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_min_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_min_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["min"](x0,x1);
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
			fuzz.feed_cov("2_min_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_min_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 73;
			last_functionName = "max";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_max_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_max_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["max"](x0,x1);
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
			fuzz.feed_cov("2_max_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_max_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 74;
			last_functionName = "extent";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_extent_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_extent_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["extent"](x0,x1);
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
			fuzz.feed_cov("2_extent_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_extent_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 75;
			last_functionName = "dot";
			last_num_args = 3;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("3_dot_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("3_dot_true_true_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("3_dot_true_true_false", 2);
			last_tried_input.push(x2);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__fuzzer__reset_branches__();
			new PUT["dot"](x0,x1,x2);
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
			fuzz.feed_cov("3_dot_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("3_dot_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("3_dot_true_true_false", 2, getfields, cov, globalcov, x2);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
			__jalangi_clear_taint__(x2);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 76;
			last_functionName = "dist";
			last_num_args = 4;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("4_dist_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("4_dist_true_true_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("4_dist_true_true_false", 2);
			last_tried_input.push(x2);
			var x3 = fuzz.get_input("4_dist_true_true_false", 3);
			last_tried_input.push(x3);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__jalangi_set_taint__(x3);
			__fuzzer__reset_branches__();
			new PUT["dist"](x0,x1,x2,x3);
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
			fuzz.feed_cov("4_dist_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("4_dist_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("4_dist_true_true_false", 2, getfields, cov, globalcov, x2);
			fuzz.feed_cov("4_dist_true_true_false", 3, getfields, cov, globalcov, x3);
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
			last_tried_entrypoint = 77;
			last_functionName = "cohensd";
			last_num_args = 3;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("3_cohensd_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("3_cohensd_true_true_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("3_cohensd_true_true_false", 2);
			last_tried_input.push(x2);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__fuzzer__reset_branches__();
			new PUT["cohensd"](x0,x1,x2);
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
			fuzz.feed_cov("3_cohensd_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("3_cohensd_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("3_cohensd_true_true_false", 2, getfields, cov, globalcov, x2);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
			__jalangi_clear_taint__(x2);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 78;
			last_functionName = "covariance";
			last_num_args = 3;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("3_covariance_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("3_covariance_true_true_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("3_covariance_true_true_false", 2);
			last_tried_input.push(x2);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__fuzzer__reset_branches__();
			new PUT["covariance"](x0,x1,x2);
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
			fuzz.feed_cov("3_covariance_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("3_covariance_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("3_covariance_true_true_false", 2, getfields, cov, globalcov, x2);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
			__jalangi_clear_taint__(x2);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 79;
			last_functionName = "rank";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_rank_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_rank_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["rank"](x0,x1);
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
			fuzz.feed_cov("2_rank_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_rank_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 80;
			last_functionName = "cor";
			last_num_args = 3;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("3_cor_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("3_cor_true_true_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("3_cor_true_true_false", 2);
			last_tried_input.push(x2);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__fuzzer__reset_branches__();
			new PUT["cor"](x0,x1,x2);
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
			fuzz.feed_cov("3_cor_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("3_cor_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("3_cor_true_true_false", 2, getfields, cov, globalcov, x2);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
			__jalangi_clear_taint__(x2);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 81;
			last_functionName = "linearRegression";
			last_num_args = 3;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("3_linearRegression_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("3_linearRegression_true_true_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("3_linearRegression_true_true_false", 2);
			last_tried_input.push(x2);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__fuzzer__reset_branches__();
			new PUT["linearRegression"](x0,x1,x2);
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
			fuzz.feed_cov("3_linearRegression_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("3_linearRegression_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("3_linearRegression_true_true_false", 2, getfields, cov, globalcov, x2);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
			__jalangi_clear_taint__(x2);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 82;
			last_functionName = "entropy";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_entropy_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_entropy_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["entropy"](x0,x1);
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
			fuzz.feed_cov("2_entropy_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_entropy_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 83;
			last_functionName = "mutual";
			last_num_args = 4;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("4_mutual_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("4_mutual_true_true_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("4_mutual_true_true_false", 2);
			last_tried_input.push(x2);
			var x3 = fuzz.get_input("4_mutual_true_true_false", 3);
			last_tried_input.push(x3);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__jalangi_set_taint__(x3);
			__fuzzer__reset_branches__();
			new PUT["mutual"](x0,x1,x2,x3);
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
			fuzz.feed_cov("4_mutual_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("4_mutual_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("4_mutual_true_true_false", 2, getfields, cov, globalcov, x2);
			fuzz.feed_cov("4_mutual_true_true_false", 3, getfields, cov, globalcov, x3);
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
			last_tried_entrypoint = 84;
			last_functionName = "profile";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_profile_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_profile_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["profile"](x0,x1);
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
			fuzz.feed_cov("2_profile_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_profile_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 85;
			last_functionName = "summary";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_summary_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_summary_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["summary"](x0,x1);
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
			fuzz.feed_cov("2_summary_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_summary_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 86;
			last_functionName = "json";
			last_num_args = 3;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("3_json_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("3_json_true_true_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("3_json_true_true_false", 2);
			last_tried_input.push(x2);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__fuzzer__reset_branches__();
			new PUT["json"](x0,x1,x2);
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
			fuzz.feed_cov("3_json_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("3_json_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("3_json_true_true_false", 2, getfields, cov, globalcov, x2);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
			__jalangi_clear_taint__(x2);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 87;
			last_functionName = "topojson";
			last_num_args = 3;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("3_topojson_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("3_topojson_true_true_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("3_topojson_true_true_false", 2);
			last_tried_input.push(x2);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__fuzzer__reset_branches__();
			new PUT["topojson"](x0,x1,x2);
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
			fuzz.feed_cov("3_topojson_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("3_topojson_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("3_topojson_true_true_false", 2, getfields, cov, globalcov, x2);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
			__jalangi_clear_taint__(x2);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 88;
			last_functionName = "treejson";
			last_num_args = 3;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("3_treejson_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("3_treejson_true_true_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("3_treejson_true_true_false", 2);
			last_tried_input.push(x2);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__fuzzer__reset_branches__();
			new PUT["treejson"](x0,x1,x2);
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
			fuzz.feed_cov("3_treejson_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("3_treejson_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("3_treejson_true_true_false", 2, getfields, cov, globalcov, x2);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
			__jalangi_clear_taint__(x2);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 89;
			last_functionName = "dsv";
			last_num_args = 3;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("3_dsv_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("3_dsv_true_true_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("3_dsv_true_true_false", 2);
			last_tried_input.push(x2);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__fuzzer__reset_branches__();
			new PUT["dsv"](x0,x1,x2);
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
			fuzz.feed_cov("3_dsv_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("3_dsv_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("3_dsv_true_true_false", 2, getfields, cov, globalcov, x2);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
			__jalangi_clear_taint__(x2);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 90;
			last_functionName = "csv";
			last_num_args = 3;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("3_csv_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("3_csv_true_true_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("3_csv_true_true_false", 2);
			last_tried_input.push(x2);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__fuzzer__reset_branches__();
			new PUT["csv"](x0,x1,x2);
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
			fuzz.feed_cov("3_csv_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("3_csv_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("3_csv_true_true_false", 2, getfields, cov, globalcov, x2);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
			__jalangi_clear_taint__(x2);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 91;
			last_functionName = "tsv";
			last_num_args = 3;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("3_tsv_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("3_tsv_true_true_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("3_tsv_true_true_false", 2);
			last_tried_input.push(x2);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__fuzzer__reset_branches__();
			new PUT["tsv"](x0,x1,x2);
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
			fuzz.feed_cov("3_tsv_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("3_tsv_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("3_tsv_true_true_false", 2, getfields, cov, globalcov, x2);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
			__jalangi_clear_taint__(x2);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 92;
			last_functionName = "format.numberLocale";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_format.numberLocale_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["format"]["numberLocale"](x0);
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
			fuzz.feed_cov("1_format.numberLocale_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 93;
			last_functionName = "format.number";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_format.number_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["format"]["number"](x0);
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
			fuzz.feed_cov("1_format.number_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 94;
			last_functionName = "format.numberPrefix";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_format.numberPrefix_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_format.numberPrefix_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["format"]["numberPrefix"](x0,x1);
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
			fuzz.feed_cov("2_format.numberPrefix_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_format.numberPrefix_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 95;
			last_functionName = "format.timeLocale";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_format.timeLocale_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["format"]["timeLocale"](x0);
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
			fuzz.feed_cov("1_format.timeLocale_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 96;
			last_functionName = "format.time";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_format.time_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["format"]["time"](x0);
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
			fuzz.feed_cov("1_format.time_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 97;
			last_functionName = "format.utc";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_format.utc_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["format"]["utc"](x0);
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
			fuzz.feed_cov("1_format.utc_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 98;
			last_functionName = "format.locale";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_format.locale_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["format"]["locale"](x0);
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
			fuzz.feed_cov("1_format.locale_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 99;
			last_functionName = "format.month";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_format.month_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_format.month_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["format"]["month"](x0,x1);
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
			fuzz.feed_cov("2_format.month_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_format.month_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 100;
			last_functionName = "format.day";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_format.day_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_format.day_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["format"]["day"](x0,x1);
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
			fuzz.feed_cov("2_format.day_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_format.day_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 101;
			last_functionName = "format.quarter";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_format.quarter_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["format"]["quarter"](x0);
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
			fuzz.feed_cov("1_format.quarter_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 102;
			last_functionName = "format.utcQuarter";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_format.utcQuarter_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["format"]["utcQuarter"](x0);
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
			fuzz.feed_cov("1_format.utcQuarter_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 103;
			last_functionName = "format.table";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_format.table_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_format.table_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["format"]["table"](x0,x1);
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
			fuzz.feed_cov("2_format.table_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_format.table_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 104;
			last_functionName = "format.summary";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_format.summary_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["format"]["summary"](x0);
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
			fuzz.feed_cov("1_format.summary_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 105;
			last_functionName = "time.find";
			last_num_args = 3;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("3_time.find_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("3_time.find_true_true_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("3_time.find_true_true_false", 2);
			last_tried_input.push(x2);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__fuzzer__reset_branches__();
			new PUT["time"]["find"](x0,x1,x2);
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
			fuzz.feed_cov("3_time.find_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("3_time.find_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("3_time.find_true_true_false", 2, getfields, cov, globalcov, x2);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
			__jalangi_clear_taint__(x2);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 106;
			last_functionName = "random.uniform";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_random.uniform_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_random.uniform_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["random"]["uniform"](x0,x1);
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
			fuzz.feed_cov("2_random.uniform_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_random.uniform_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 107;
			last_functionName = "random.integer";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_random.integer_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_random.integer_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["random"]["integer"](x0,x1);
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
			fuzz.feed_cov("2_random.integer_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_random.integer_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 108;
			last_functionName = "random.normal";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_random.normal_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_random.normal_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["random"]["normal"](x0,x1);
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
			fuzz.feed_cov("2_random.normal_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_random.normal_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 109;
			last_functionName = "random.bootstrap";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_random.bootstrap_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_random.bootstrap_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["random"]["bootstrap"](x0,x1);
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
			fuzz.feed_cov("2_random.bootstrap_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_random.bootstrap_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 110;
			last_functionName = "bootstrap.ci";
			last_num_args = 5;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("5_bootstrap.ci_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("5_bootstrap.ci_true_true_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("5_bootstrap.ci_true_true_false", 2);
			last_tried_input.push(x2);
			var x3 = fuzz.get_input("5_bootstrap.ci_true_true_false", 3);
			last_tried_input.push(x3);
			var x4 = fuzz.get_input("5_bootstrap.ci_true_true_false", 4);
			last_tried_input.push(x4);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__jalangi_set_taint__(x3);
			__jalangi_set_taint__(x4);
			__fuzzer__reset_branches__();
			new PUT["bootstrap"]["ci"](x0,x1,x2,x3,x4);
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
			fuzz.feed_cov("5_bootstrap.ci_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("5_bootstrap.ci_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("5_bootstrap.ci_true_true_false", 2, getfields, cov, globalcov, x2);
			fuzz.feed_cov("5_bootstrap.ci_true_true_false", 3, getfields, cov, globalcov, x3);
			fuzz.feed_cov("5_bootstrap.ci_true_true_false", 4, getfields, cov, globalcov, x4);
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
			last_tried_entrypoint = 111;
			last_functionName = "z.ci";
			last_num_args = 3;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("3_z.ci_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("3_z.ci_true_true_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("3_z.ci_true_true_false", 2);
			last_tried_input.push(x2);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__fuzzer__reset_branches__();
			new PUT["z"]["ci"](x0,x1,x2);
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
			fuzz.feed_cov("3_z.ci_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("3_z.ci_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("3_z.ci_true_true_false", 2, getfields, cov, globalcov, x2);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
			__jalangi_clear_taint__(x2);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 112;
			last_functionName = "z.test";
			last_num_args = 4;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("4_z.test_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("4_z.test_true_true_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("4_z.test_true_true_false", 2);
			last_tried_input.push(x2);
			var x3 = fuzz.get_input("4_z.test_true_true_false", 3);
			last_tried_input.push(x3);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__jalangi_set_taint__(x3);
			__fuzzer__reset_branches__();
			new PUT["z"]["test"](x0,x1,x2,x3);
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
			fuzz.feed_cov("4_z.test_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("4_z.test_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("4_z.test_true_true_false", 2, getfields, cov, globalcov, x2);
			fuzz.feed_cov("4_z.test_true_true_false", 3, getfields, cov, globalcov, x3);
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
			last_tried_entrypoint = 113;
			last_functionName = "print.table";
			last_num_args = 2;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("2_print.table_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("2_print.table_true_true_false", 1);
			last_tried_input.push(x1);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__fuzzer__reset_branches__();
			new PUT["print"]["table"](x0,x1);
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
			fuzz.feed_cov("2_print.table_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("2_print.table_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 114;
			last_functionName = "print.summary";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_print.summary_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["print"]["summary"](x0);
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
			fuzz.feed_cov("1_print.summary_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 115;
			last_functionName = "time.second.date";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_time.second.date_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["time"]["second"]["date"](x0);
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
			fuzz.feed_cov("1_time.second.date_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 116;
			last_functionName = "time.second.unit";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_time.second.unit_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["time"]["second"]["unit"](x0);
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
			fuzz.feed_cov("1_time.second.unit_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 117;
			last_functionName = "time.minute.date";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_time.minute.date_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["time"]["minute"]["date"](x0);
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
			fuzz.feed_cov("1_time.minute.date_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 118;
			last_functionName = "time.minute.unit";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_time.minute.unit_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["time"]["minute"]["unit"](x0);
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
			fuzz.feed_cov("1_time.minute.unit_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 119;
			last_functionName = "time.hour.date";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_time.hour.date_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["time"]["hour"]["date"](x0);
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
			fuzz.feed_cov("1_time.hour.date_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 120;
			last_functionName = "time.hour.unit";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_time.hour.unit_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["time"]["hour"]["unit"](x0);
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
			fuzz.feed_cov("1_time.hour.unit_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 121;
			last_functionName = "time.day.date";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_time.day.date_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["time"]["day"]["date"](x0);
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
			fuzz.feed_cov("1_time.day.date_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 122;
			last_functionName = "time.day.unit";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_time.day.unit_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["time"]["day"]["unit"](x0);
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
			fuzz.feed_cov("1_time.day.unit_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 123;
			last_functionName = "time.month.date";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_time.month.date_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["time"]["month"]["date"](x0);
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
			fuzz.feed_cov("1_time.month.date_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 124;
			last_functionName = "time.month.unit";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_time.month.unit_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["time"]["month"]["unit"](x0);
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
			fuzz.feed_cov("1_time.month.unit_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 125;
			last_functionName = "time.year.date";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_time.year.date_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["time"]["year"]["date"](x0);
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
			fuzz.feed_cov("1_time.year.date_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 126;
			last_functionName = "time.year.unit";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_time.year.unit_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["time"]["year"]["unit"](x0);
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
			fuzz.feed_cov("1_time.year.unit_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 127;
			last_functionName = "time.seconds.date";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_time.seconds.date_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["time"]["seconds"]["date"](x0);
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
			fuzz.feed_cov("1_time.seconds.date_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 128;
			last_functionName = "time.seconds.unit";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_time.seconds.unit_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["time"]["seconds"]["unit"](x0);
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
			fuzz.feed_cov("1_time.seconds.unit_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 129;
			last_functionName = "time.minutes.date";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_time.minutes.date_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["time"]["minutes"]["date"](x0);
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
			fuzz.feed_cov("1_time.minutes.date_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 130;
			last_functionName = "time.minutes.unit";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_time.minutes.unit_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["time"]["minutes"]["unit"](x0);
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
			fuzz.feed_cov("1_time.minutes.unit_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 131;
			last_functionName = "time.hours.date";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_time.hours.date_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["time"]["hours"]["date"](x0);
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
			fuzz.feed_cov("1_time.hours.date_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 132;
			last_functionName = "time.hours.unit";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_time.hours.unit_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["time"]["hours"]["unit"](x0);
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
			fuzz.feed_cov("1_time.hours.unit_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 133;
			last_functionName = "time.weekdays.date";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_time.weekdays.date_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["time"]["weekdays"]["date"](x0);
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
			fuzz.feed_cov("1_time.weekdays.date_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 134;
			last_functionName = "time.weekdays.unit";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_time.weekdays.unit_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["time"]["weekdays"]["unit"](x0);
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
			fuzz.feed_cov("1_time.weekdays.unit_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 135;
			last_functionName = "time.dates.date";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_time.dates.date_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["time"]["dates"]["date"](x0);
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
			fuzz.feed_cov("1_time.dates.date_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 136;
			last_functionName = "time.dates.unit";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_time.dates.unit_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["time"]["dates"]["unit"](x0);
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
			fuzz.feed_cov("1_time.dates.unit_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 137;
			last_functionName = "time.months.date";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_time.months.date_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["time"]["months"]["date"](x0);
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
			fuzz.feed_cov("1_time.months.date_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 138;
			last_functionName = "time.months.unit";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_time.months.unit_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["time"]["months"]["unit"](x0);
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
			fuzz.feed_cov("1_time.months.unit_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 139;
			last_functionName = "time.utc.find";
			last_num_args = 3;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("3_time.utc.find_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("3_time.utc.find_true_true_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("3_time.utc.find_true_true_false", 2);
			last_tried_input.push(x2);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__fuzzer__reset_branches__();
			new PUT["time"]["utc"]["find"](x0,x1,x2);
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
			fuzz.feed_cov("3_time.utc.find_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("3_time.utc.find_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("3_time.utc.find_true_true_false", 2, getfields, cov, globalcov, x2);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
			__jalangi_clear_taint__(x1);
			__jalangi_clear_taint__(x2);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 140;
			last_functionName = "time.utc.second.date";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_time.utc.second.date_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["time"]["utc"]["second"]["date"](x0);
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
			fuzz.feed_cov("1_time.utc.second.date_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 141;
			last_functionName = "time.utc.second.unit";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_time.utc.second.unit_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["time"]["utc"]["second"]["unit"](x0);
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
			fuzz.feed_cov("1_time.utc.second.unit_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 142;
			last_functionName = "time.utc.minute.date";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_time.utc.minute.date_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["time"]["utc"]["minute"]["date"](x0);
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
			fuzz.feed_cov("1_time.utc.minute.date_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 143;
			last_functionName = "time.utc.minute.unit";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_time.utc.minute.unit_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["time"]["utc"]["minute"]["unit"](x0);
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
			fuzz.feed_cov("1_time.utc.minute.unit_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 144;
			last_functionName = "time.utc.hour.date";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_time.utc.hour.date_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["time"]["utc"]["hour"]["date"](x0);
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
			fuzz.feed_cov("1_time.utc.hour.date_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 145;
			last_functionName = "time.utc.hour.unit";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_time.utc.hour.unit_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["time"]["utc"]["hour"]["unit"](x0);
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
			fuzz.feed_cov("1_time.utc.hour.unit_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 146;
			last_functionName = "time.utc.day.date";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_time.utc.day.date_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["time"]["utc"]["day"]["date"](x0);
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
			fuzz.feed_cov("1_time.utc.day.date_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 147;
			last_functionName = "time.utc.day.unit";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_time.utc.day.unit_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["time"]["utc"]["day"]["unit"](x0);
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
			fuzz.feed_cov("1_time.utc.day.unit_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 148;
			last_functionName = "time.utc.month.date";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_time.utc.month.date_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["time"]["utc"]["month"]["date"](x0);
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
			fuzz.feed_cov("1_time.utc.month.date_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 149;
			last_functionName = "time.utc.month.unit";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_time.utc.month.unit_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["time"]["utc"]["month"]["unit"](x0);
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
			fuzz.feed_cov("1_time.utc.month.unit_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 150;
			last_functionName = "time.utc.year.date";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_time.utc.year.date_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["time"]["utc"]["year"]["date"](x0);
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
			fuzz.feed_cov("1_time.utc.year.date_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 151;
			last_functionName = "time.utc.year.unit";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_time.utc.year.unit_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["time"]["utc"]["year"]["unit"](x0);
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
			fuzz.feed_cov("1_time.utc.year.unit_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 152;
			last_functionName = "time.utc.seconds.date";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_time.utc.seconds.date_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["time"]["utc"]["seconds"]["date"](x0);
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
			fuzz.feed_cov("1_time.utc.seconds.date_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 153;
			last_functionName = "time.utc.seconds.unit";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_time.utc.seconds.unit_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["time"]["utc"]["seconds"]["unit"](x0);
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
			fuzz.feed_cov("1_time.utc.seconds.unit_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 154;
			last_functionName = "time.utc.minutes.date";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_time.utc.minutes.date_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["time"]["utc"]["minutes"]["date"](x0);
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
			fuzz.feed_cov("1_time.utc.minutes.date_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 155;
			last_functionName = "time.utc.minutes.unit";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_time.utc.minutes.unit_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["time"]["utc"]["minutes"]["unit"](x0);
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
			fuzz.feed_cov("1_time.utc.minutes.unit_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 156;
			last_functionName = "time.utc.hours.date";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_time.utc.hours.date_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["time"]["utc"]["hours"]["date"](x0);
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
			fuzz.feed_cov("1_time.utc.hours.date_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 157;
			last_functionName = "time.utc.hours.unit";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_time.utc.hours.unit_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["time"]["utc"]["hours"]["unit"](x0);
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
			fuzz.feed_cov("1_time.utc.hours.unit_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 158;
			last_functionName = "time.utc.weekdays.date";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_time.utc.weekdays.date_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["time"]["utc"]["weekdays"]["date"](x0);
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
			fuzz.feed_cov("1_time.utc.weekdays.date_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 159;
			last_functionName = "time.utc.weekdays.unit";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_time.utc.weekdays.unit_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["time"]["utc"]["weekdays"]["unit"](x0);
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
			fuzz.feed_cov("1_time.utc.weekdays.unit_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 160;
			last_functionName = "time.utc.dates.date";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_time.utc.dates.date_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["time"]["utc"]["dates"]["date"](x0);
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
			fuzz.feed_cov("1_time.utc.dates.date_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 161;
			last_functionName = "time.utc.dates.unit";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_time.utc.dates.unit_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["time"]["utc"]["dates"]["unit"](x0);
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
			fuzz.feed_cov("1_time.utc.dates.unit_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 162;
			last_functionName = "time.utc.months.date";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_time.utc.months.date_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["time"]["utc"]["months"]["date"](x0);
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
			fuzz.feed_cov("1_time.utc.months.date_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 163;
			last_functionName = "time.utc.months.unit";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_time.utc.months.unit_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["time"]["utc"]["months"]["unit"](x0);
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
			fuzz.feed_cov("1_time.utc.months.unit_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 164;
			last_functionName = "format.auto.number";
			last_num_args = 1;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("1_format.auto.number_true_true_false", 0);
			last_tried_input.push(x0);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__fuzzer__reset_branches__();
			new PUT["format"]["auto"]["number"](x0);
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
			fuzz.feed_cov("1_format.auto.number_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.store_progress(globalcov, current_time);
			__fuzzer_reset_get_fields__();
			await sleep(1);
			__jalangi_clear_taint__(x0);
		}

		try {
			last_tried_input = [];
			last_tried_entrypoint = 165;
			last_functionName = "format.auto.linear";
			last_num_args = 3;
			last_is_method = true;
			last_is_constructor = true;
			last_from_constructor = false;
			var x0 = fuzz.get_input("3_format.auto.linear_true_true_false", 0);
			last_tried_input.push(x0);
			var x1 = fuzz.get_input("3_format.auto.linear_true_true_false", 1);
			last_tried_input.push(x1);
			var x2 = fuzz.get_input("3_format.auto.linear_true_true_false", 2);
			last_tried_input.push(x2);
			last_tried_input = fuzzer.get_representation(last_tried_input);
			__jalangi_set_taint__(x0);
			__jalangi_set_taint__(x1);
			__jalangi_set_taint__(x2);
			__fuzzer__reset_branches__();
			new PUT["format"]["auto"]["linear"](x0,x1,x2);
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
			fuzz.feed_cov("3_format.auto.linear_true_true_false", 0, getfields, cov, globalcov, x0);
			fuzz.feed_cov("3_format.auto.linear_true_true_false", 1, getfields, cov, globalcov, x1);
			fuzz.feed_cov("3_format.auto.linear_true_true_false", 2, getfields, cov, globalcov, x2);
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