//Remove the king from the list.

var asteroidList = document.querySelector('ul.asteroids');
var king = document.querySelector('li');
asteroidList.removeChild(king);

//Add list items that have the following text contents:
//['apple', 'bubble', 'cat', 'green fox']
var list = ['apple', 'bubble', 'cat', 'green fox'];
for (var i = 0; i < list.length; i++) {
    var newAsteroid = document.createElement('li');
    newAsteroid.textContent = list[i];
    asteroidList.appendChild(newAsteroid);
}

