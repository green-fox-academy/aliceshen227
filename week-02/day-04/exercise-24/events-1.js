//Turn the party on and off by clicking the button.

var button = document.querySelector('button');
var div = document.querySelector('div');
function party () {
    div.classList.toggle('party');
}

button.addEventListener('click', party);