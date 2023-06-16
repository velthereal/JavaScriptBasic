let text = document.querySelector('p');
let color_cells = document.querySelectorAll('.colors div');

for(let i = 0; i < color_cells.length; i++){
	color_cells[i].addEventListener('click', changeTextColor);
}
function changeTextColor(e){
	let colorClick = e.target.getAttribute('data-color');
	text.style.color = colorClick;
}