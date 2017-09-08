var httpRequest = new XMLHttpRequest();
document.getElementsByTagName('button')[0].addEventListener('click', send);

function send() {
	let url = document.querySelector('.url').value;
	let title = document.querySelector('.titleText').value;
	let option = document.querySelector('.checkbox').checked;
	let data = {
		"title": title,
		"href": url
	}
	if(title == '') {
		alert("PLEASE INPUT A TITLE!");
	}
	else {
		httpRequest.open('POST', "https://time-radish.glitch.me/posts");
		httpRequest.setRequestHeader('Accept', 'application/json');
		httpRequest.setRequestHeader('Content-Type', 'application/json');
		httpRequest.send(JSON.stringify(data));	
		httpRequest.addEventListener('readystatechange', function() {
			if(httpRequest.readyState == XMLHttpRequest.DONE) {
				window.location.replace('./reddit.html');
			}
		});
	}
}