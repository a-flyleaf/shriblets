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
	
	for (let i = 0; i < optionParts.length; i++) {
		//check all optionParts for which one is checked
			console.log(optionParts[i].innerHTML);
		let checked = optionParts[i].querySelector("input:checked");
			console.log("checked:");
			console.log(checked);
		//isolate the name without the number
		let checkedNm = checked.name;
			console.log("checked name:");
			console.log(checkedNm);
		
		//grab the canvasParts where the checkedNm matches the div id
		let canvasPart = document.getElementById(checked.name);
			console.log("canvas div which matches the checked name:")
			console.log(canvasPart);
		canvasPart.classList.add(checked.value);
	} //end forloop
} //end onload