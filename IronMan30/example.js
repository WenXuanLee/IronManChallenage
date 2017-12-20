
function Employee(name, salary) {
	this.name = name;
	this.salary = 1000;
	this.addSalary = function(addNum) {
		this.salary += addNum;
	};
	this.skill = function() {
		console.log('I can jump');
	}
} 

var a = new Employee('Ben');
a.addSalary(500);
a.skill = function() {
	console.log('I can fly');
}
// const employees = [
// 	['Alice', 1000],
// 	['Bob', 1000]
// ];

// const addSalary = employees.map(function(el) {
// 	const clone = el.slice();
// 	clone[1] += 500;
// 	return clone;
// });

