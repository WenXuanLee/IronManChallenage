var friends ={
	name: 'Ben'
	greet: function() {
		return this.name;
	}
}

var myFriends = function(argu1, argu2) {

	console.log('Hi' + this.greet());
}

myFriends();