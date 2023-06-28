let form = document.forms[0];
let div = document.querySelectorAll('.group');
let topic = document.querySelector('.result span');
let td = document.querySelectorAll('.result .td');

form.select.addEventListener('click', (e) => {
	div[0].classList.remove('none');
	e.preventDefault();
});
form.save.addEventListener('click', (e) => {
	topic.textContent = form.topic.value;
	for(let i = 0; i < form.present.length; i++){
		if(form.present[i].checked){
			td[i].textContent = 'present';
		}
	}
	div[0].classList.add('none');
	e.preventDefault();
})