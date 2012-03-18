/**
 * Define namespace for just
 * @var just
 */
var just = just || {};

/** 
 * Create array containing arithmetic progressions.
 * If the step argument is omitted, it defaults to 1. 
 * If the start argument is omitted, it defaults to 0. 
 * In case of invalid argument empty array will be returned.
 *
 * @param integer start
 * @param integer end
 * @param integer step
 * @return array
 */
just.range = function(start, end, step) {
	
	step	= step ? parseInt(step) : 1;
	start 	= parseInt(start) || 0;
	end 	= parseInt(end) || 0;

	var range 	= [],
		current	= start;

	if ( arguments.length == 1 ){
		end 	= start;
		start 	= 0;
		current = 0;
	}

	if (start <= end) {
		if (step < 0) {
			return range;
		}
		while ( current <= end ) {
			range.push(current);
			current += step;
		}
	} else {
		if (step > 0) {
			return range;
		}			
		while ( current > end ) {
			range.push(current);
			current += step;
		}
	}		

	return range;
};

/**
 * Create array of random length withing given scope
 * with random integer values withing given scope
 * values of params can be number or array
 * in other case default will be [0,10] for both params
 *
 * @example just.rrange([4,10],[12,15]);
 * @param array values
 * @param array length
 * @return array
 */
just.rrange = function(valuesRange, lengthRange){
	
	var valuesRangeDefault = !isNaN(valuesRange) ? [0, valuesRange] : [0,10];
	var lengthRangeDefault = !isNaN(lengthRange) ? [0, lengthRange] : [0,10];

	valuesRange = valuesRange.constructor === Array ? valuesRange : valuesRangeDefault;
	lengthRange = lengthRange.constructor === Array ? lengthRange : lengthRangeDefault;

	var len = parseInt(lengthRange[0] + Math.random() * (lengthRange[1] - lengthRange[0])); // length of array
	var range = [];
	
	for(var i=0; i < len; i++){
		range.push( parseInt(valuesRange[0] + Math.random() * (valuesRange[1] - valuesRange[0])) );
	}

	return range;

};

/**
 * Create array of objects based on provided template
 *
 * @example just.orange( { value: [1,4,5], title: ['title1','title2','title3'] }, 5);
 * @param object template
 * @param integer length
 * @return array
 */
just.orange = function(template, length){
	var range = [];

	length = parseInt(length) || 10;

	for(var i=0; i<length; i++){
		var temp = {};
		for(var prop in template) {
			if(template.hasOwnProperty(prop)){
				var tempValue = template[prop];
				/**
				 * If element is array we'll take elements by order
				 * in case that array have less elements than number of elements we want 
				 * we'll use last one from array
				 * @TODO in case that array have less elements it should be reset 
				 */
				if(tempValue.constructor === Array){
					var position = i < tempValue.length - 1 ? i : tempValue.length - 1;
					tempValue = tempValue[position];
				}

				temp[prop] = tempValue;
			}
		}
		range.push(temp);
	}

	return range;
};

/**
 * Array shuffle with Fisher-Yates algorithm
 *
 * @param array arr
 * @return array
 */
just.arrayShuffle = function(arr){
	var i = arr.length;
	if ( i == 0 ) return false;
	while ( --i ) {
		var j = Math.floor( Math.random() * ( i + 1 ) );
		var tempi = arr[i];
		var tempj = arr[j];
		arr[i] = tempj;
		arr[j] = tempi;
	}

	return arr;
};

