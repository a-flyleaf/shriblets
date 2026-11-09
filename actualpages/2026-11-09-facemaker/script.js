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
		
		/* loop-in-a-loop: works but unnecessary
		for (let i = 0; i < canvasParts.length; i++) {
			//list all canvasParts ids for bugtesting:
				console.log("canvas div #"+canvasParts[i].id);
			//isolate the canvasPart where the id matches
			if (canvasParts[i].id == checkedNm) {
				console.log("^found a match");
				let sameId = canvasParts[i];
				console.log(sameId);
				sameId.classList.add(checked.value);
				console.log("added class "+checked.value)
			};
			
			/*take 2
			let sameId = canvasParts[i].querySelector("#"+checkedNm);
				console.log("same id?");
				console.log(sameId);
			
			/*
			let sameId = canvasParts[i].querySelector('[id^=checkedNm]');
				console.log("canvas div with the same name as checked:");
				console.log(sameId);
		} //end redundant loop
		*/
	} //end forloop
} //end onload