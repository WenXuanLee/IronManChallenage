function test() {
	console.log('I\'m test');
}

var hiHoisting;
test(); // 'I'm test'
console.log(hiHoisting); //undefined

hiHoisting = "Hello";



