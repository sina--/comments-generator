let data = {};
let commentContainer = document.getElementById("comments-ul");

function submitComment(event) {
	event.preventDefault();
	let name = document.getElementById("name").value;
	let time = document.getElementById("time").value;
	let content = document.getElementById("content").value;
	let id = Object.keys(data).length+1;
	console.log(data);
	createComment(id, name, time, content);
}

function createComment(id, name, time, content) {
	let newDiv = document.createElement("div");
	newDiv.setAttribute("id", id);
	commentContainer.appendChild(newDiv);
	data[id] = [name, time, content];
}
