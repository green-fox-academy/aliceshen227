//Add an item that says 'The Green Fox' to the asteroid list.

var asteroidList = document.querySelector('ul.asteroids');

var newAsteroid1 = document.createElement('li');
newAsteroid1.textContent = 'The Green Fox';
asteroidList.appendChild(newAsteroid1);

//Add an item that says 'The Lamplighter' to the asteroid list.

var newAsteroid2 = document.createElement('li');
newAsteroid2.textContent = 'The Lamplighter';
asteroidList.appendChild(newAsteroid2);

//Add a heading saying 'I can add elements to the DOM!' to the .container.

var container = document.querySelector('div.container');

var newHeading = document.createElement('h1');
newHeading.textContent = 'I can add elements to the DOM!';
container.appendChild(newHeading);

//Add an image, any image, to the container.

var newImg = document.createElement('img');
newImg.setAttribute('src', 'IMG_1283.jpg');
container.appendChild(newImg);