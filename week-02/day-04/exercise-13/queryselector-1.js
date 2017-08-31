//1. store the element that says 'The King' in the 'king' variable.
//console.log it.

var king = document.getElementById('b325');
console.log(king.innerText);

//2. store the element that contains the text 'The Conceited Man'
//in the 'conceited' variable.
//show the result in an 'alert' window.

var conceited = document.querySelector('.b326');
alert(conceited.innerText);

//3. store 'The Businessman' and 'The Lamplighter'
//in the 'businessLamp' variable.
//console.log each of them.

var businessLamp = document.querySelectorAll('.asteroid.big');
for (var i = 0; i < businessLamp.length; i++) {
    console.log(businessLamp[i].innerText);
}

//4. store 'The King' and 'The Conceited Man'
//in the 'conceitedKing' variable.
//alert them one by one.

var conceitedKing = document.querySelector('section').getElementsByTagName('div');

for (var i = 0; i < conceitedKing.length; i++) {
    alert(conceitedKing[i].innerText);
}


//5. store 'The King', 'The Conceited Man' and 'The Lamplighter'
//in the 'noBusiness' variable.
//console.log each of them.

var noBusiness = document.querySelectorAll('div.asteroid');
for (var i = 0; i < noBusiness.length; i++) {
    console.log(noBusiness[i].innerText);
}

//6. store 'The Businessman' in the 'allBizniss' variable.
//show the result in an 'alert' window.

var allBizniss = document.querySelector('p');
alert(allBizniss.innerText);


