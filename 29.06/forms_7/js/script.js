let form = document.forms[0];
let emailError = document.querySelector('.email');
let repeatError = document.querySelector('.repeat');
let date = new Date();
date.setTime((new Date().getTime()) + 60 * 1000);

form.addEventListener('submit', (e) => {
	for(let i = 0; i < form.elements.length; i++){
		if(form.elements[i].tagName == 'BUTTON'){
			continue;
		}
		if(!checkEmpty(form.elements[i].value)){
			form.elements[i].classList.add('error');
			e.preventDefault();
		}
	}

	if(!checkEmail(form.email.value)){
		emailError.classList.remove('none');
		e.preventDefault();
	} else {
		emailError.classList.add('none');
		let email = form.email.value;
		document.cookie = `email=${email}; expires=${date}`;
	}

	if(!checkPassword(form.password.value)){
		form.password.classList.add('error');
		e.preventDefault();
	}

	if(form.repeat.value != form.password.value){
		repeatError.classList.remove('none');
		e.preventDefault();
	} else {
		repeatError.classList.add('none');
		let password = form.password.value;
		document.cookie = `password=${password}; expires=${date}`;
	}
});

function checkEmpty(str){
	return /^\S/.test(str);
}
function checkEmail(email){
	let temp1 = /(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})/;
	return temp1.test(email);
}
function checkPassword(pass){
	let temp4 = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15})/;
	return temp4.test(pass);
}