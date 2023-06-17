let li = document.querySelector('.menu>li:nth-of-type(2)');
console.log(li)
let list = document.querySelector('.menu ul');

li.addEventListener('click', () => {
	li.classList.toggle('bgc');
	list.classList.toggle('show');
})