let data = {};
let commentContainer = document.getElementById("comments-ul");
let editMode = false;

function submitComment(event) {
	event.preventDefault();
	let name = document.getElementById("name").value;
	let time = document.getElementById("time").value;
	let content = document.getElementById("content").value;
	let id = Object.keys(data).length + 1;
	console.log(data);
	if (editMode === false) {
		createComment(id, name, time, content);
	} else {
		createComment(editMode, name, time, content);
	}
	// console.log(data);
}

function createComment(id, name, time, content) {
	// if (editMode != false) {
	// 	let newDiv = document.getElementById(editMode);
	// 	newDiv.innerHTML = `<h3><a href='#' onclick=editComment(${id})>${name}</a></h3>`;
	// 	commentContainer.appendChild(newDiv);
	// 	console.log(newDiv);
	// } else {
	// 	let newDiv = document.createElement("div");
	// 	newDiv.setAttribute("id", id);
	// 	newDiv.innerHTML = `<h3><a href='#' onclick=editComment(${id})>${name}</a></h3>`;
	// 	commentContainer.appendChild(newDiv);
	// }
	data[id] = [name, time, content];
	document.getElementById("comments-ul").innerHTML = '';
	for(let id in data) {
		console.log("string", id, data[id]);
		let newDiv = document.createElement("div");
		newDiv.setAttribute("id", id);
		newDiv.innerHTML = `<h3><a href='#' onclick=editComment(${id})>${data[id][0]}</a></h3>`;
		commentContainer.appendChild(newDiv);
	}
	clearInput();
	editMode = false;
}

function editComment(id) {
	editMode = id;
	console.log(data[id]);
	let name = document.getElementById("name");
	let time = document.getElementById("time");
	let content = document.getElementById("content");
	name.value = data[id][0];
	time.value = data[id][1];
	content.value = data[id][2];
}

function clearInput() {
	document.getElementById("name").value = '';
	document.getElementById("time").value = '';
	document.getElementById("content").value = '';
}