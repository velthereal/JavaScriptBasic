let form = document.forms[0];

form.addEventListener('submit', (event) => {
	let name = form.login.value;
	let remember = form.remember;
	if(form.login.value == '' || form.password.value == ''){
		form.login.classList.add('empty-input');
		form.password.classList.add('empty-input');
		event.preventDefault();
		return;
	} else if(form.login.value != '' || form.password.value != '') {
		form.password.classList.remove('empty-input');
		form.login.classList.remove('empty-input');
	}
	
	if(remember.checked){
		alert(`Привіт, ${name}! Я тебе запам'ятав`);
	} else {
		alert(`Привіт, ${name}! Я тебе не запам'ятав`);
	}

	event.preventDefault();
})