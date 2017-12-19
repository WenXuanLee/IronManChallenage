function User(name, friends) {
	this.name = name;
	this.friends = friends;
	this.greet = function() {
		console.log('Welcome' + this.name);
	}
}

var userA = new User('Bob', ['Ben', 'Andy']);
var userB = new User('Chen', ['Dan', 'Roy']);

console.log(userA); //User {name: "Bob", friends: Array(2), greet: ƒ}
console.log(userB); //User {name: "Chen", friends: Array(2), greet: ƒ}