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
												GRid Size - ${gridSize()}
												Column number - ${convertColumn('C4')}`;
})

let height = countRows();
let width = countColumns();

function countRows() {
	return GRID.length;
}

function countColumns() {
  return GRID[1].length;
}

function gridSize() {
	let x = '' + width + ' x ' + height;
  return x;
}

function totalCells() {
  let x = width * height;
  return x;
}

function convertColumn(column) {
	let x = column.toLowerCase().split('').shift();
	return x.charCodeAt(0) - 97;
}