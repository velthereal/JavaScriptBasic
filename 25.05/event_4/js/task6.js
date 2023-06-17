let btn = document.querySelector('button');
let progressbar = document.querySelector('.progressbar');

let progress = 0;
btn.addEventListener('click', () => {
	if(progress < 100){
		progress += 5;
		progressbar.style.width = progress + '%';
	}
})