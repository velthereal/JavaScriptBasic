let div = document.querySelector('div');
let likes = document.querySelector('#likes');

let counter = 0;
div.addEventListener('click', () => {
	counter++;
	likes.textContent = counter;
})