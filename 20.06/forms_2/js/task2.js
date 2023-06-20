let form = document.forms[0];

form.addEventListener('submit', (event) => {
	let email = form.email.value;
	let password = form.password[0].value;
	let passwordRepeat = form.password[1].value;
	if(form.email.value == '' || form.login.value == ''){
		form.email.classList.add('wrong-password');
		form.login.classList.add('wrong-password');
		event.preventDefault();
		return;
	} else if(form.email.value != '' || form.login.value != '') {
		form.login.classList.remove('wrong-password');
		form.email.classList.remove('wrong-password');
	}
	if(password !== passwordRepeat){
		writrePasswordAgain();
	} else {
		alert(`На ${email} пошту надіслано лист із підтвердженням`);
	}
	event.preventDefault();
});
function writrePasswordAgain(){
	let p = document.createElement('p');
	p.textContent = 'Не правильно введений пароль! Спробуйте ще раз';
	form.insertAdjacentElement('beforeend', p);
	form.password[1].classList.add('wrong-password');
}