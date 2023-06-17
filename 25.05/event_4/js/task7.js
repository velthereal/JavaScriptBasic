let td = document.querySelectorAll('td');

for (let i = 0; i < td.length; i++) {
	td[i].addEventListener('mouseenter', () => {
		td[i].style.backgroundColor = '#ffa984';
	})
	td[i].addEventListener('mouseleave', () => {
		td[i].style.backgroundColor = 'transparent';
	})
}