var httpRequest = new XMLHttpRequest();
var URL = "https://time-radish.glitch.me"

//main page
window.addEventListener("load", function(event) {
    if(window.location.href.includes('reddit.html')){
			get();
		}
		else if(window.location.href.includes('new_post.html')){
			document.getElementsByTagName('button')[0].addEventListener('click', send);
		}
		else if(window.location.href.includes('modify.html')){
			loadmodify();
			document.getElementsByTagName('button')[0].addEventListener('click', modify);
		}
});

function get() {
	var onePost = document.getElementsByClassName('post')[0];
	httpRequest.open('GET', URL + "/posts");
	httpRequest.addEventListener('readystatechange', function() {
		if(httpRequest.readyState == XMLHttpRequest.DONE) {
			var data = JSON.parse(httpRequest.response).posts;
			for(let i = 0; i < data.length; i++) {
				let a = document.createElement('a');
				let sub = document.createElement('p');
				let div = document.createElement('div');
				let index = document.createElement('div');
				let li = document.createElement('li');
				let up = document.createElement('img');
				let down = document.createElement('img');
				let score = document.createElement('p');
				let scoreC = document.createElement('div');
				let modify = document.createElement('a');
				let remove = document.createElement('a');
				modify.href = 'modify.html?id=' + data[i].id;
				remove.addEventListener('click', function(event) {
					let HTTPremove = new XMLHttpRequest();
					HTTPremove.open('DELETE', URL + '/posts/' + data[i].id);
					HTTPremove.setRequestHeader('Accept', 'application/json');
					HTTPremove.addEventListener('readystatechange', function(){
						if(HTTPremove.readyState == XMLHttpRequest.DONE) {
							window.location.reload();
						}
					})
					HTTPremove.send(null);	
				})
				up.src = "img/upvote.png";
				down.src = "img/downvote.png";				
				up.addEventListener('click', function(event) {
					let upDown = new XMLHttpRequest();
					upDown.open('PUT', URL + "/posts/" + data[i].id +"/upvote");
					upDown.addEventListener('readystatechange', function(){
						if(upDown.readyState == XMLHttpRequest.DONE) {
							let responceUpDown = ' ';
							responceUpDown = JSON.parse(upDown.response);
							event.target.parentElement.children[1].textContent = responceUpDown.score;
						}
					})
					upDown.send(null);	
					up.src = "img/upvoted.png";
				});
				down.addEventListener('click', function(event) {
					let upDown = new XMLHttpRequest();
					upDown.open('PUT', URL + "/posts/" + data[i].id +"/downvote");
					upDown.addEventListener('readystatechange', function(){
						if(upDown.readyState == XMLHttpRequest.DONE) {
							let responceUpDown = ' ';
							responceUpDown = JSON.parse(upDown.response);
							event.target.parentElement.children[1].textContent = responceUpDown.score;
						}
					})
					upDown.send(null);	
					down.src = "img/downvoted.png";
				});
				a.textContent = data[i].title||'Untitled';
				a.href = data[i].href;
				a.className = "atitle";
				score.textContent = data[i].score;
				scoreC.className = "votes";
				div.className = "title";
				index.textContent = i+1;
				index.className = "index";
				var time = new Date(data[i].timestamp);
				var owner = data[i].owner||"anomynous";
				sub.textContent = "submitted " + time + " by " + owner;
				sub.className = "sub";
				modify.className = "extra";
				remove.className = "extra";
				modify.textContent = "modify";
				remove.textContent = "remove";
				
				div.appendChild(a);
				div.appendChild(sub);
				div.appendChild(modify);
				div.appendChild(remove);
				scoreC.appendChild(up);
				scoreC.appendChild(score);
				scoreC.appendChild(down);
				li.appendChild(index);
				li.appendChild(scoreC);
				li.appendChild(div);
				onePost.appendChild(li);
			}
		}
	});
	httpRequest.send(null);	
}

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

function modify() {
	let url = document.querySelector('.url').value;
	let title = document.querySelector('.titleText').value;
	let data = {
		"title": title,
		"href": url
	}
	if(title == '') {
		alert("PLEASE INPUT A TITLE!");
	}
	else {
		let id = window.location.search.substring(4);
		var mod = new XMLHttpRequest();
		mod.open('PUT', URL + '/posts/' + id);
		mod.setRequestHeader('Accept', 'application/json');
		mod.setRequestHeader('Content-Type', 'application/json');
		mod.send(JSON.stringify(data));	
		mod.addEventListener('readystatechange', function() {
			if(mod.readyState == XMLHttpRequest.DONE) {
				window.location.replace('./reddit.html');
			}
		});	
	}
}

function loadmodify() {
	let modif = new XMLHttpRequest();
	modif.open('GET', URL + "/posts");
	modif.addEventListener('readystatechange', function() {
		if(modif.readyState == XMLHttpRequest.DONE) {
			let id = window.location.search.substring(4);
			var data = JSON.parse(modif.response).posts;
			for(let i = 0; i < data.length; i++) {
				if(data[i].id == id) {
					document.querySelector('.url').value = data[i].href;
					document.querySelector('.titleText').value = data[i].title;
				}
			}
		}
	});
	modif.send(null);	
}
