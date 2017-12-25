function a() {
	console.log(this);
	this.newVar = 'hello';
}

var b = function() {
	console.log(this);
}

a();
console.log(newVar);
b();

var c = {
	name: 'The C',
	log: function() {


		this.name = 'The C update'
		console.log(this);

		var setName = function(newName) {
			this.name = newName;
		}.bind(this);
		setName('Big C');
		console.log(this);
	}

}

c.log(); 