let form = document.forms.registration;
let email = form.email;
let password = form.password;
let repeatPassword = form.repeat;
let link = document.querySelector('form a');
let wrong = document.querySelectorAll('form span');

let date = new Date();
date.setHours((new Date().getHours()) + 1);

link.addEventListener('click', (e) => {
	let l = form.elements.length;
	for(let i = 0; i < l; i++) {
		if(!checkEmpty(form.elements[i].value)){
			wrong[i].classList.remove('none');
			e.preventDefault();
		}
	}
	if(!checkEmail(email.value)){
		wrong[0].classList.remove('none');
		e.preventDefault();
	}
	if(!checkPassword(password.value)){
		wrong[1].classList.remove('none');
		e.preventDefault();
	}
	if(repeatPassword.value != password.value){
		wrong[1].classList.remove('none');
		e.preventDefault();
	}
});
email.addEventListener('input', () => {
	wrong[0].classList.add('none');
});
password.addEventListener('input', () => {
	wrong[1].classList.add('none');
});
repeatPassword.addEventListener('input', () => {
	wrong[1].classList.add('none');
});

function checkEmpty(str){
	return /^\S/.test(str);
}
function checkEmail(email){
	return /(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})/.test(email);
}
function checkPassword(pass){
	return /((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15})/.test(pass);
}