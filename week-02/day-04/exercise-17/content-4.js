//replace the list items' content with items from this list:
//['apple', 'banana', 'cat', 'dog']

var replace = ['apple', 'banana', 'cat', 'dog'];
var origin = document.getElementsByTagName('li');

for (var i = 0; i < origin.length; i++) {
    origin[i].innerText = replace[i];
}
