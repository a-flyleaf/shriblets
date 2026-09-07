/*could've put this in the actual page but. this seems safer, to avoid breaking HTML things

shamelessly ripping off <https://www.geeksforgeeks.org/javascript/how-to-create-a-filter-table-with-javascript/> but with hyphenated `id`s. not 100% sure how this works tbh*/
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