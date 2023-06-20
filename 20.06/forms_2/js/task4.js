let form = document.forms[0];
let blocks = document.querySelector('.blocks');

form.addEventListener('submit', (event) => {
	let r = form.r.value;;
	let g = form.g.value;
	let b = form.b.value;

	let div = document.createElement('div');
	div.classList.add('result');
	let colorDiv = document.createElement('div');
	colorDiv.classList.add('color');
	colorDiv.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
	div.insertAdjacentElement('beforeend', colorDiv);
	let p = document.createElement('p');
	p.textContent = `RGB (${r}, ${g}, ${b})`;
	div.insertAdjacentElement('beforeend', p);

	blocks.insertAdjacentElement('beforeend', div);
	event.preventDefault();
});