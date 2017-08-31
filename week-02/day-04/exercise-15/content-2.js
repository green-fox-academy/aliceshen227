//fill every paragraph with the last one's content.
var text = document.getElementsByTagName('p');
var replace = document.querySelector('.dog').innerText
for (var i = 0; i < text.length; i++) {
    text[i].innerText = replace;
}
