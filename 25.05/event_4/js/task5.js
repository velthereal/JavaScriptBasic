let div = document.querySelectorAll('div');
let btn = document.querySelectorAll('button');

for(let i = 0; i < btn.length; i++){
	btn[i].addEventListener('click', () => {
		div[i].style.display = 'none';
	})
}