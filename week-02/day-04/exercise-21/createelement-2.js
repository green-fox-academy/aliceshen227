//Remove the king from the list.

var asteroidList = document.querySelector('ul.asteroids');
var king = document.querySelector('li');
asteroidList.removeChild(king);

//Add 3 list items saying 'The Fox' to the list.

var newAsteroid1 = document.createElement('li');
newAsteroid1.textContent = 'The Fox';
asteroidList.appendChild(newAsteroid1);

var newAsteroid2 = document.createElement('li');
newAsteroid2.textContent = 'The Fox';
asteroidList.appendChild(newAsteroid2);

var newAsteroid3 = document.createElement('li');
newAsteroid3.textContent = 'The Fox';
asteroidList.appendChild(newAsteroid3);
