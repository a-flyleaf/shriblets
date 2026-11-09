window.onload = function() {
	console.log("script loaded");
	document.getElementById("nojs").style.display="none";
	
	//put each part in an array
	let canvasParts = document.querySelectorAll(".c-part");
		console.log("canvasParts:");
		console.log(canvasParts);
	let optionParts = document.querySelectorAll(".o-part");
		console.log("optionParts:");
		console.log(optionParts);
	
	//loop: check all optionParts for which one is checked
	for (let i = 0; i < optionParts.length; i++) {
		console.log(optionParts.innerHTML);
	}
}