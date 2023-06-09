// document.querySelector('p').style.color = 'red';
// document.addEventListener('DOMContentLoaded', () => {
// 	document.querySelector('p').style.color = 'red';
// 	alert('DOMContentLoaded');
// })
// window.onload = () => {
// 	alert('load');
// }
// window.onbeforeunload = (e) => {
// 	if(document.querySelector('textarea').value.length > 0){
// 		console.log(e);
// 		e.returnValue = 'beforeunload';
// 		return 'beforeunload';
// 	}
// 	return null;
// }

// let imgLoad = (text) => {
// 	document.querySelector('p').innerHTML += `${text} Load <br>`
// }
// let imgError = (text) => {
// 	document.querySelector('p').innerHTML += `${text} Error <br>`
// }
// document.querySelector('#img1').addEventListener('load', imgLoad('img1'));
// document.querySelector('#img2').addEventListener('load', imgLoad('img2'));

// document.querySelector('#img1').addEventListener('error', imgError('img1'));
// document.querySelector('#img2').addEventListener('error', imgError('img2'));

// function addMsg(text){
// 	document.querySelector('p').innerHTML += `${text} <br>`
// }


// document.querySelector('#img1').addEventListener('load', () => {
// 	document.querySelector('p').innerHTML += `Img 1 Load <br>`
// });
// document.querySelector('#img2').addEventListener('load', () => {
// 	document.querySelector('p').innerHTML += `Img 2 Load <br>`
// });

// document.querySelector('#img1').addEventListener('error', () => {
// 	document.querySelector('p').innerHTML += `Img 1 Error <br>`
// });
// document.querySelector('#img2').addEventListener('error', () => {
// 	document.querySelector('p').innerHTML += `Img 2 Error <br>`;
// 	// document.querySelector('#img2').remove();
// 	document.querySelector('#img2').src = 'https://aioseo.com/wp-content/uploads/2021/04/how-to-find-and-fix-404-errors-in-wordpress.png';
// });

// let colors = ['red', 'green', 'purple', 'brown', 'yellow', 'blue', 'orange'];

// let i = 0;
// let mixColor = () => {
// 	document.body.style.backgroundColor = colors[i];
// 	i++;
// 	if(i == colors.length) i = 0;
// 	// if(i == 3){
// 	// 	clearInterval(n);
// 	// }
// }

// let n;

// document.querySelectorAll('button')[0].addEventListener('click', () => {
// 	n = setInterval(mixColor, 1000);
// })
// document.querySelectorAll('button')[1].addEventListener('click', () => {
// 	clearInterval(n);
// })

let p = document.querySelector('p');
let x = 0, y = 0;
let heightW, widthW;
let widthBox = p.getBoundingClientRect().width;
let heightBox = p.getBoundingClientRect().height;
let left = () => {
	x -= 5;
	if(x < 0) x = 0;
	p.style.left = `${x}px`;
	// p.textContent = 'Arrow Left'
}
let right = () => {
	// p.textContent = 'Arrow Right'
	widthW = window.innerWidth;
	x += 5;
	if(x > widthW - widthBox) x = widthW - widthBox;
	p.style.left = `${x}px`;
}
let up = () => {
	// p.textContent = 'Arrow Up'
	y -= 5;
	if(y < 0) y = 0;
	p.style.top = `${y}px`;
}
let down = () => {
	// p.textContent = 'Arrow Down'
	y += 5;
	heightW = window.innerHeight;
	if(y > heightW - heightBox) y = heightW - heightBox;
	p.style.top = `${y}px`;
}

// window.addEventListener('keypress', (e) => {
// 	console.log(e, e.code, e.altKey);
// })
window.addEventListener('keydown', (e) => {
	// console.log(e.which);
	switch(e.which){
		case 37: 
			left();
			break;
		case 39:
			right();
			break;
		case 38:
			up();
			break;
		case 40:
			down();
			break;
	}
})