var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");
var deleteButton = document.querySelectorAll(".delete");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value + " "));
	ul.appendChild(li);
	input.value = "";
	doneList(li);
	var button = document.createElement("button");
	button.appendChild(document.createTextNode("Delete"));
	li.appendChild(button);
	removeButton(button);
}



function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function linethroughList() {
	return this.classList.toggle("done");
}

function doneList(listItem) {
	listItem.addEventListener("click", linethroughList)
}

function removeList() {
	return this.parentElement.remove();
}

function removeButton(deleteButton) {
	deleteButton.addEventListener("click", removeList)
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

li.forEach(doneList);

deleteButton.forEach(removeButton);