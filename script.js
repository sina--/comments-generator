let data = {};
let commentContainer = document.getElementById("comments-ul");
let commentColors = document.getElementById("comment-colors");
let editMode = false;
let colors = {	green : "#ABD039",
				blue : "#08CFE8",
				red : "#D62C1A",
				pink : "#E21E79",
				orange : "#E57A00",
			};

function submitComment(event) {
	event.preventDefault();
	let name = document.getElementById("name").value;
	let time = document.getElementById("time").value;
	let content = document.getElementById("content").textContent;
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
	content.textContent = data[id][2];
}

function clearInput() {
	document.getElementById("name").value = '';
	document.getElementById("time").value = '';
	document.getElementById("content").textContent = '';
}

function downloadimage(event) {
	event.preventDefault();
    /*var container = document.getElementById("image-wrap");*/ /*specific element on page*/
    var container = document.getElementById("htmltoimage");; /* full page */
    html2canvas(container, { allowTaint: true, backgroundColor: null }).then(function (canvas) {

		var link = document.createElement("a");
        document.body.appendChild(link);
        link.download = "html_image.png";
        link.href = canvas.toDataURL("image/png");
        link.target = '_blank';
        link.click();
    });
}

function selectColor(color) {
	// console.log(color);
	for (const key in colors) {
	if (key === color) {
	document.getElementById(color).setAttribute("class", "selected");
	document.getElementById(color).style.borderColor = colors[color];
	} else {
	document.getElementById(key).setAttribute("class", "normal");
	document.getElementById(key).style.borderColor = "transparent";

		
	}	
	
	}


}

function init() {
	console.log("Page loaded");
	for (const color in colors) {
		let colorElement = document.createElement(`li`);
		colorElement.setAttribute("id", color);
		colorElement.setAttribute("class", "normal");
		colorElement.innerHTML = `<div"><a href="#" onclick="selectColor('${color}')"><p style="background-color: ${colors[color]}"></p></a></div></li>`
		commentColors.appendChild(colorElement);
	}
	selectColor('green');

}

