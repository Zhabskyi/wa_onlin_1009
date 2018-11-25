import './lighthouse.scss';

const GRID = [
	["", "", "", "^", "", "", "", "", "", ""],
	["", "", "v", "", "~", "", "", "", "", ""],
	["", "v", "", "", "^", "^", "", "", "", ""],
	["", "", "", "", "^", "^", "", "", "", ""],
	["", "", "", "", "", "", "", "", "v", ""],
	["", "", "", "", "", "", "", "", "", ""],
	["", "", "", "", "", "", "", "", "", ""],
	["", "^", "~", "~", "", "", "", "^", "", ""],
	["", "^", "", "~", "~", "", "", "", "", ""],
	["", "^", "", "", "~", "~", "", "", "", ""],
];

const btn = document.querySelector('#calculate-btn');
const result = document.querySelector('#reesult');

btn.addEventListener('click', () => {
	result.textContent = `Rows in the grid - ${countRows()}
												Columns in the grid - ${countColumns()}
												GRid Size - `+ gridSize();
})

function countRows() {
	return GRID.length;
}

function countColumns() {
  return GRID[1].length;
}

function gridSize() {
	let rows = countRows();
	let columns = countColumns();
	let x = ''+rows + ' x ' +columns;
  return x;
}