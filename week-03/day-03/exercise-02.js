var httpRequest = new XMLHttpRequest();
var addresses
window.onload = function() {
	get();
}
document.querySelectorAll('button').forEach(function(element) {
	element.addEventListener("click", get);
});

function get() {
//	let text = document.querySelector('#search');
	let display = document.querySelector('#display');
	httpRequest.open('GET', "https://www.anapioficeandfire.com/api/characters?page=5&pageSize=10");
	httpRequest.addEventListener('readystatechange', function() {
		if(httpRequest.readyState == XMLHttpRequest.DONE) {
				var data = JSON.parse(httpRequest.response);
				console.log(data);
				addresses = httpRequest.getResponseHeader('link').split(',');
				for(let i = 0; i < data.length; i++) {
					var p = document.createElement('p');
					p.innerHTML = data[i].name || "EMPTY";
					p.style.display = "inline-block";
					p.style.margin = "0 5px";
					p.style.fontSize = "12px";
					display.appendChild(p);
					addresses = httpRequest.getResponseHeader('link').split(',')[i].split();

				}
			}
	});
	httpRequest.send(null);	
}
