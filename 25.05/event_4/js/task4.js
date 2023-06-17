let tabs = document.querySelectorAll('ul li');
let div = document.querySelectorAll('div');

tabs[0].addEventListener('click', () => {
	tabs[0].style.backgroundColor = '#4873a1';
	tabs[1].style.backgroundColor = 'transparent';
	tabs[2].style.backgroundColor = 'transparent';
	div[0].style.display = 'block';
	div[1].style.display = 'none';
	div[2].style.display = 'none';
})
tabs[1].addEventListener('click', () => {
	tabs[1].style.backgroundColor = '#4873a1';
	tabs[0].style.backgroundColor = 'transparent';
	tabs[2].style.backgroundColor = 'transparent';
	div[1].style.display = 'block';
	div[0].style.display = 'none';
	div[2].style.display = 'none';
})
tabs[2].addEventListener('click', () => {
	tabs[2].style.backgroundColor = '#4873a1';
	tabs[1].style.backgroundColor = 'transparent';
	tabs[0].style.backgroundColor = 'transparent';
	div[2].style.display = 'block';
	div[1].style.display = 'none';
	div[0].style.display = 'none';
})