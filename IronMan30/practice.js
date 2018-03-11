function makeGreeting(language) {
	return function(first, last) {

		if(language === 'en') {
			console.log('hello' + first + test);
		}

		if(language ==='es') {
			console.log('he' + first + last);
		}
	}
}


var greetEnglish = makeGreeting('en');
gr