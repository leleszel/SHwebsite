// Create your global variables below:
var currIndex = 1;

function toFirst() {
	document.getElementById("main").src = "images/paramore1.jpg";
	var buttons = document.getElementsByClassName("control-button");
	for (i = 0; i < buttons.length; i++) {
		buttons[i].className = buttons[i].className.replace(" active", "");
	}
	document.getElementById("bu1").className += " active";
}

function toSecond() {
	document.getElementById("main").src = "images/chvrches.jpg";
	var buttons = document.getElementsByClassName("control-button");
	for (i = 0; i < buttons.length; i++) {
		buttons[i].className = buttons[i].className.replace(" active", "");
	}
	document.getElementById("bu2").className += " active";
}

function toThird() {
	document.getElementById("main").src = "images/nakedfamous.jpg";
	var buttons = document.getElementsByClassName("control-button");
	for (i = 0; i < buttons.length; i++) {
		buttons[i].className = buttons[i].className.replace(" active", "");
	}
	document.getElementById("bu3").className += " active";
}

function toFourth() {
	document.getElementById("main").src = "images/lykki.jpg";
	var buttons = document.getElementsByClassName("control-button");
	for (i = 0; i < buttons.length; i++) {
		buttons[i].className = buttons[i].className.replace(" active", "");
	}
	document.getElementById("bu4").className += " active";
}

