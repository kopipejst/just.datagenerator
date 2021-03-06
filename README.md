Collection of useful JS functions
=================================

just.range(`start`, `end`, `step`)
------------------------------
 Create array containing arithmetic progressions.
 If the step argument is omitted, it defaults to 1.
 If the start argument is omitted, it defaults to 0.
 In case of invalid argument empty array will be returned.

### example

 	just.dataGenerator.range(4,15,2);

### returns

 	[4,6,8,10,12,14]


just.rrange(`valuesRange`, `lengthRange`)
------------------------------

 Create array of random length withing given scope with random integer values withing given scope.
 Values of params can be number or array in other case default will be [0,10] for both params

### example

 	just.dataGenerator.rrange([10, 150], [5,10]);

### returns

 array of 5-10 elements where each value is between 10-150
 eg. [12, 99, 29, 136, 71, 100]


just.orange(`template`, `length`)
------------------------------

 Create array of objects based on provided template

### example

	 var template = {
	 	value: [10,1,2],
	 	name: ['ten ','one','two']
	 }

	just.dataGenerator.orange(template, 3);

### returns

	[ { value: 10, name: 'ten'}, { value: 1, name: 'one'}, { value: 2, name: 'two'}]


just.arrayShuffle(`arr`)
----------------------

 Array shuffle with Fisher-Yates algorithm

### example

	just.dataGenerator.arrayShuffle([5, 10, 12]);

### returns

	[10, 5, 15]