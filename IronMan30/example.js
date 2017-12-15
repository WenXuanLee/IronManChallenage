var Person = {
	name: "小明",
	height: 172,
	weight: 80,
	routine: () =>{
		console.log('吃蛋餅');
	},
	1234 : "test"
}
Person[1234]; //test

("name" in Person); //true
Person.hasOwnProperty("name"); //true
("toString" in Person); //true
Person.hasOwnProperty("toString"); //false