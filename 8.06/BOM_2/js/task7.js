let arrow = document.querySelector('.arrow');

window.addEventListener('scroll', (e) => {
	let y = window.scrollY;
	if(y > window.innerHeight){
		arrow.style.transform = 'scale(1)';
	}
})
arrow.addEventListener('click', () => {
	window.scrollBy(0, -window.scrollY);
	arrow.style.transform = 'scale(0)';
})