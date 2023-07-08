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

	if(checkUser(email.value, password.value)){
		checkUser(email.value, password.value);
	}
	setCookie(email.value, password.value);
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

function setCookie(email, password){
	let date = new Date();
	date.setHours(new Date().getHours() + 1);
	let obj = {
		email: email, 
		password: password
	}
	let arr = [];
	if(getCookie() != null){
		arr = getCookie();
	}
	if(checkUser(email, password)){
		return;
	}
	arr.push(obj);
	document.cookie = `current=${arr.length - 1}; expires=${date.toUTCString()}`;
	document.cookie = `users=${JSON.stringify(arr)}; expires=${date.toUTCString()}`;
}
function getCookie(){
	let res = document.cookie.split('; ');
	for(let i = 0; i < res.length; i++){
		let s = res[i].split('=');
		if(s[0] == 'users'){
			return JSON.parse(s[1]);
		}
	}
	return null;
}

function checkUser(email, password){
	let users = getCookie();
	if(!users) return false;
	for(let i = 0; i < users.length; i++){
		if(users[i].email == email && users[i].password == password){
			document.cookie = `current=${i}; expires=${date.toUTCString()}`;
			return true;
		}
	}
	document.cookie = `current=${users.length}; expires=${date.toUTCString()}`;
	return false;
}