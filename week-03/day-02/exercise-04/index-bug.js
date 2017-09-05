'use strict';

var buttonElements = [
  'Button 0',
  'Button 1',
  'Button 2'
].map(function(buttonText) {
  var buttonElement;
  buttonElement = document.createElement('button');
  buttonElement.appendChild(document.createTextNode(buttonText));
  return buttonElement;
});

function create(i) {
		return function() {
			console.log('button index: ', i);
		};
}

function appendButtons() {
  for(var i = 0; i < buttonElements.length; i++) {
    buttonElements[i].addEventListener('click', create(i));
    document.body.appendChild(buttonElements[i]);
  }
}

window.addEventListener('load', appendButtons);

//We want to display the buttons original index within the definition array
//Unfortunately a developer made a serious bug, if we click on any button we get 3 as index.
//Please fix the bug. (without changeing the button attributes)