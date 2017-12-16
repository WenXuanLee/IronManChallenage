var copiedByReference = {
	name : "市北許效舜",
	aka	: "Javascript界的一粒塵土",
};

function reference (argument) {
	
	argument.name = "市北金城武";
	console.log(argument.name);
};
reference(copiedByReference); // 市北金城武
console.log(copiedByReference.name); // 市北金城武


var copiedByValue = "市北許效舜";

function value(argument) {
	argument = "市北金城武";
	console.log(argument);
};
value(copiedByValue); // 市北金城武
console.log(copiedByValue); // 市北許效舜