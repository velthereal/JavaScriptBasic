let listImg = document.querySelectorAll('ul li img');
let srcImg = [];

let index = 0;

let right = document.querySelector('#right');
let left = document.querySelector('#left');
let bigImg = document.querySelector('#img');

for(let i = 0; i < listImg.length; i++){
	srcImg.push(listImg[i].getAttribute('src'));

	listImg[i].addEventListener('click', () => {
		img.src = srcImg[i];
		index = i;
	});

   listImg[i].addEventListener('mouseenter', () => {
      listImg[i].classList.add('img-hover');
   });
   listImg[i].addEventListener('mouseleave', () => {
      listImg[i].classList.remove('img-hover');
   });
}

right.addEventListener('mouseenter', () => {
	right.classList.add('left-right_hover');
});
right.addEventListener('mouseleave', () => {
	right.classList.remove('left-right_hover');
});

right.addEventListener('click', () => {
	index++;
	if(index == listImg.length) index = 0;
	img.src = srcImg[index];
});

left.addEventListener('mouseenter', () => {
	left.classList.add('left-right_hover');
});
left.addEventListener('mouseleave', () => {
	left.classList.remove('left-right_hover');
});

left.addEventListener('click', () => {
	index--;
	if(index < 0) index = listImg.length - 1;
	img.src = srcImg[index];
});