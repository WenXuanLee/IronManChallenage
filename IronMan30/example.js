window.onload = function() {
	var picked = Math.floor((Math.random() * 100));
	do {
		var num = Number(prompt('Please guess a number from 0 ~ 100'));

		if(num < picked) {
			alert('Too small, try again');
		}else if (num > picked) {
			alert('Too large, try again');
		}else {
			alert('Bingo !');
		}
	} while( num != picked);
}

function timeTicker() {
	console.log(new Date().getSeconds());
}
var start = setInterval(timeTicker, 1000);
clearInterval(start);