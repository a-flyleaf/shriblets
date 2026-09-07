/*could've put this in the actual page but. this seems safer, to avoid breaking HTML things. idk how most of it works ngl*/

/*
	THE SEARCH PART
	shamelessly ripping off <https://www.geeksforgeeks.org/javascript/how-to-create-a-filter-table-with-javascript/> but with hyphenated `id`s
*/
let input = document.getElementById('search-input');
let table = document.getElementById('data-table');
let rows = table.getElementsByTagName('tr');
let noMatchMessage = document.getElementById('no-match');

input.addEventListener('input', function () {
	let filter = input
		.value
		.toLowerCase();
	let matchFound = false;
	
	for (let i = 1; i < rows.length; i++) {
		let row = rows[i];
		let cells = row
			.getElementsByTagName('td');
		let found = false;
		
		for (let j = 0; j < cells.length; j++) {
			let cell = cells[j];
			if (cell.textContent.toLowerCase().indexOf(filter) > -1) {
				found = true;
				matchFound = true;
				break;
			}/*endif match found?*/
		}/*endfor ...cell length?*/
		
		if (found) {
			row.style.display = '';
		} else {
			row.style.display = 'none';
		}/*endif found*/
	}/*endfor each row*/
	
	if (!matchFound) {
		noMatchMessage.style.display = 'inline-block';
	} else {
		noMatchMessage.style.display = 'none';
	}/*endif no match found*/
});

/*
	THE SORT PART
	<https://stackoverflow.com/questions/14267781/sorting-html-table-with-javascript#49041392>
	uses wildly different syntax than the above wow
	
	+<https://stackoverflow.com/questions/14267781/sorting-html-table-with-javascript/53880407#53880407> tbody fix
	*/

const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;
const comparer = (idx, asc) => (a, b) => ((v1, v2) =>
	v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2)
	)(getCellValue(asc ? a : b,idx), getCellValue(asc ? b : a,idx));

//homebrew addition: once a click has happened anywhere on the page, make the `th`s have `cursor:pointer;`. riffed from the ygbtdm gallery code + the StackOverflow
window.onload = function() {
	console.log("page loaded",event);
	let thh = document.getElementsByTagName('th');
//	thh.style.cursor = 'pointer';
// . . . <https://www.w3schools.com/js/js_htmldom_css.asp>???
//	document.getElementsByTagName('th').style.cursor = 'pointer';
// <https://www.w3schools.com/jsref/met_element_getelementsbytagname.asp> take 3
	for (let i = 0; i < thh.length; i++) {
		thh[i].style.cursor = "pointer"; //AYYYY
	}
};
//end custom addition

// "do the work"
document.querySelectorAll('th').forEach(th => th.addEventListener('click', (() => {
	const table = th.closest('table');
	const tbody = table.querySelector('tbody');
	Array.from(tbody.querySelectorAll('tr'))
		.sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
		.forEach(tr => tbody.appendChild(tr) );
})));