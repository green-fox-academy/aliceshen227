var API_KEY = 'cd0f15f66ce94316b82aaea281c65f84';
var httpRequest = new XMLHttpRequest();
document.querySelector('#submit').addEventListener("click", get);

function get() {
	let text = document.querySelector('#search');
	let display = document.querySelector('#display');
	httpRequest.open('GET', "http://api.giphy.com/v1/gifs/search?q="+ text.value + "&api_key=cd0f15f66ce94316b82aaea281c65f84&limit=16");
	httpRequest.addEventListener('readystatechange', function() {
		if(httpRequest.readyState == XMLHttpRequest.DONE) {
				var data = JSON.parse(httpRequest.response).data;
				window.display.innerHTML = '';
				for(let i = 0; i < data.length; i++) {
					var img = document.createElement('img');
					img.src = data[i].images.original_still.url;
					img.style.width = '23%';
					img.style.margin = '0 1%';
					display.appendChild(img);
					img.setAttribute('data-url-gif', data[i].images.original.url);
					img.setAttribute('data-url-jpg', data[i].images.original_still.url);
					img.addEventListener('mouseover', function(event) {
						change(event);
					});
					img.addEventListener('click', function(event) {
						if (event.target.getAttribute('data-status') === 'gif') {
							changeBack(event);
						}
						else if (event.target.getAttribute('data-status') === 'jpg'){
							change(event);
						}
					});
					img.addEventListener('mouseout', function(event) {
						changeBack(event);
					});
				}
			}
	});
	httpRequest.send(null);	
}

function change(event) {
	event.target.setAttribute('data-status', 'gif')
	event.target.src = event.target.getAttribute('data-url-gif');
}

function changeBack(event) {
	event.target.setAttribute('data-status', 'jpg')
	event.target.src = event.target.getAttribute('data-url-jpg');
}
