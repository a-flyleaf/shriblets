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