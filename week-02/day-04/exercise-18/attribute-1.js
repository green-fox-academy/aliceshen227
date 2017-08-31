//Write the image's url to the console.

console.log(document.querySelector('img').getAttribute('src'));

//Replace the image with a picture of yourself.
document.querySelector('img').setAttribute('src', "IMG_1283.jpg");

//Make the link point to the Green Fox Academy website.

document.querySelector('a').setAttribute('href', "https://github.com/greenfox-academy");

//Disable the second button.

document.querySelector('.this-one').setAttribute('disabled', 'disabled');

//Replace its text with 'Don't click me!'.

document.querySelector('.this-one').innerText = "Don't click me!"
