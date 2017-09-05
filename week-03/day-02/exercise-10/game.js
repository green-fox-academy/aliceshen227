//var Candy = function() {
//	this.string = 🍬;
//}
//var Lolipop = function() {
//	this.string = 🍭;
//}

//window.addEventListener('load', function() {
//  var candies = 0;
//	var lolipop = 3;
//	console.log
//});

var candies = 1000;//parseInt(document.querySelector('.candies').textContent);
var lolipops = document.querySelector('.lollypops').textContent;
var numLoli = 3;
var speed = parseInt(document.querySelector('.speed').textContent);
var create = document.querySelector('.create-candies');
var buy = document.querySelector('.buy-lollypops');
var rain = document.querySelector('.candy-machine');
create.addEventListener('click', function(){
	candies += 1;
	document.querySelector('.candies').textContent = candies;
});

buy.addEventListener('click', function() {
	if (candies >= 100) {
		candies -= 100;
		numLoli += 1;
		document.querySelector('.lollypops').textContent = '🍭'.repeat(numLoli);
		document.querySelector('.candies').textContent = candies;
	}
	else {
		alert('Sorry, you don\'t have enough candies!\n1 lollypop = 100 candies!\nYou now have: ' + candies + 'candies');
	}
	if (numLoli % 10 == 0) {
		speed += 1;
		document.querySelector('.speed').textContent = speed;
	}
});
if(numLoli % 10 == 0) {
	speed += 1;
	document.querySelector('.speed').textContent = speed;
}

rain.addEventListener('click', function() {
	speed*=10;
	document.querySelector('.speed').textContent = speed;
});

setInterval(function() {
	candies += speed;
	document.querySelector('.candies').textContent = candies;
}, 1000);



