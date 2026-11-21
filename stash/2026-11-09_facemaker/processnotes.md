# 11/09
"idk how javascript works lol" <-- guy who is about to attempt something brand new and do it the hard way (dynamic arrays)

did manage to scrape together some extremely basic script on my own, needed to prod an AI for specifics. instructed it to give pointers, not solve for me; might as well take notes:
- inside the `for` loop, `console.log(optionParts.innerHTML);` is undefined, since `optionParts` is an array(? NodeList) and not a singular element. (ran into this with the dragonsize page too, gdi.)
	- fixed: `console.log(optionParts[i].innerHTML)`. The `[i]` is needed to actually parse the objects contained.
- `let checked = optionParts[i].querySelectorAll("input[checked]");`, two notes:
	- `input[checked]` works on pageload, but will *not* work dynamically. `input:checked` is dynamic.
	- Since only one radio button can be selected, scrap the All, use `querySelector`.

NEXT ROUND:
- instead of class-swapping, change the background image! less to define in CSS.
- nuke(/move?) all the loop-in-a-loop code; it Works but a much, *much* shorter solution was suggested
- AI tone correction: be more clear that I do not want the correct answer handed to me

## redundant forloop
```
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
```

# 11/20
man fuck it I forgo what I was doing. at any rate I'm punting this to the stash; we'll (re-)figure out image URLs and such if & when I revisit it >:Ic