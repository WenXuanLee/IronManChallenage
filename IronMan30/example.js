var person = {
	firstName: 'Default',
	lastName: 'Default',
	getFullName: function() {
		return this.firstName + ' ' + this.lastName;
	}

}

var john = {
	firstName: 'Ben',
	lastName: 'Lee'
}

//千萬不要亂用__proto__，此為demo。
john.__proto__ = person;

for ( var prop in john) {
	console.log(prop + ': ' + john[prop]);
}

var jane = {
	addess: '111 Main St.',
	getFormalFullName: function() {
		return this.lastName + ', ' + this.firstName;
	}
}

$.extend(true, john, jane);
