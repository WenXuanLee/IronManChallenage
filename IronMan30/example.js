function build() {
	var arr = [];

	for(var i = 0; i < 3; i++) {
		let j = i;
		arr.push(

			//create functino as value
			function() {
				console.log(j);
			}

		)
	}
	return arr;
}

var getArr = build();
getArr[0](); //call the function created
getArr[1](); //call the function created
getArr[2](); 

