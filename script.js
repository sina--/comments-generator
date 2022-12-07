let data = {};
let commentContainer = document.getElementById("comments-ul");
let editMode = false;

function submitComment(event) {
	event.preventDefault();
	let name = document.getElementById("name").value;
	let time = document.getElementById("time").value;
	let content = document.getElementById("content").value;
	let profPic = document.getElementById("prof-pic-selection").value;
	let id = Object.keys(data).length + 1;
	console.log(data);
	if (editMode === false) {
		createComment(id, name, time, content, profPic);
	} else {
		createComment(editMode, name, time, content, profPic);
	}
}

function createComment(id, name, time, content, profPic) {
	data[id] = [name, time, content, profPic];
	document.getElementById("comments-ul").innerHTML = '';
	for(let id in data) {
		console.log("string", id, data[id]);
		let newDiv = document.createElement("div");
		newDiv.setAttribute("id", id);
		newDiv.setAttribute("class", "wrapper");
		newDiv.innerHTML = `
						<div class="row">
							<div class="col-1">
								<img src="images/${data[id][3]}" class="prof">
							</div>
							<div class="col-2">
								<h3><a href='#' onclick=editComment(${id})>${data[id][0]}</a></h3>
							</div>
							<div class="col-3"><p class="timestamp">${data[id][1]}</p></div>
						</div>
						<div class="row">
							<div class="col-1"></div>
							<div class="col-2"><p class="textcontent">${data[id][2]}</p></div>
						</div>`;
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
