let btn = document.querySelector('button');
let container = document.querySelector('article');

btn.addEventListener('click', addBlock);
function addBlock(){
	let div = document.createElement('div');
	div.classList.add('block');
   div.style.backgroundColor = randomColor();
	container.appendChild(div);
	console.log(div);
	div.addEventListener('click', () => {
		div.remove();
	})
}
function randomColor() {
	let letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}