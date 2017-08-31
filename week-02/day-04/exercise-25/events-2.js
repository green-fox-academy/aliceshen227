//On the click of the button,
//Count the items in the list
//And display the result in the result element.

var button = document.querySelector('button');
var p = document.querySelector('p');

var items = document.getElementsByTagName('li').length;

function count () {
    p.innerText = items;
}

button.addEventListener('click', count);