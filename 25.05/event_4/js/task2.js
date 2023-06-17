let div = document.querySelector('#box');

div.addEventListener('mousemove', (e) => {
	let x = e.clientX;
	let y = e.clientY;
	div.textContent = `X = ${x}, Y = ${y}`;
});

div.addEventListener('mousedown', (e) => {
	let btn = '';
	if(e.button == 0){
		btn = 'left';
	} else if(e.button == 2){
		btn = 'right';
	}
	div.innerHTML += `<br> Mouse button: ${btn}`;
})