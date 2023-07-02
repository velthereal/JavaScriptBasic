let form = document.forms[0];

form.addEventListener('submit', (e) => {
	for(let i = 0; i < form.elements.length; i++){
		if(form.elements[i].tagName == 'BUTTON'){
			continue;
		}
		if(!checkEmpty(form.elements[i].value)){
			form.elements[i].classList.add('error');
			e.preventDefault();
		} else {
			form.elements[i].classList.add('right');
		}

		if(!checkEmail(form.email.value)){
			form.email.classList.add('error');
			e.preventDefault();
		} else {
			form.email.classList.add('right');
		}

		if(!checkPhone(form.phone.value)){
			form.phone.classList.add('error');
			e.preventDefault();
		} else {
			form.phone.classList.add('right');
		}

		if(!checkYear(form.year.value)){
			form.year.classList.add('error');
			e.preventDefault();
		} else {
			form.year.classList.add('right');
		}

		if(!checkPassword(form.password.value)){
			form.password.classList.add('error');
			e.preventDefault();
		} else {
			form.password.classList.add('right');
		}
		
		if(form.confirmPassword.value != form.password.value){
			form.confirmPassword.classList.add('error');
			e.preventDefault();
		} else {
			form.confirmPassword.classList.add('right');
		}
	}
});

for(let i = 0; i < form.elements.length; i++){
	form.elements[i].addEventListener('input', () => {
		form.elements[i].classList.remove('error');
		if(!checkEmpty(form.elements[i].value)){
			form.elements[i].classList.add('error');
			form.elements[i].classList.remove('right');
		} else {
			form.elements[i].classList.add('right');
		}
	})
}

form.confirmPassword.addEventListener('input', () => {
	form.confirmPassword.classList.remove('error');
	if(form.confirmPassword.value != form.password.value){
		form.confirmPassword.classList.add('error');
		form.confirmPassword.classList.remove('right');
	} else {
		form.confirmPassword.classList.add('right');
	}
})

form.email.addEventListener('input', () => {
	form.email.classList.remove('error');
	if(!checkEmail(form.email.value)){
		form.email.classList.add('error');
		form.email.classList.remove('right');
	} else {
		form.email.classList.add('right');
	}
})

form.phone.addEventListener('input', () => {
	form.phone.classList.remove('error');
	if(!checkPhone(form.phone.value)){
		form.phone.classList.add('error');
		form.phone.classList.remove('right');
	} else {
		form.phone.classList.add('right');
	}
})

form.year.addEventListener('input', () => {
	form.year.classList.remove('error');
	if(!checkYear(form.year.value)){
		form.year.classList.add('error');
		form.year.classList.remove('right');
	} else {
		form.year.classList.add('right');
	}
})

form.password.addEventListener('input', () => {
	form.password.classList.remove('error');
	if(!checkPassword(form.password.value)){
		form.password.classList.add('error');
		form.password.classList.remove('right');
	} else {
		form.password.classList.add('right');
	}
})

function checkEmpty(str){
	return /^\S/.test(str);
}
function checkEmail(email){
	let temp1 = /(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})/;
	return temp1.test(email);
}
function checkPhone(num){
	let temp2 = /^\+[0-9]{12}$/;
	return temp2.test(num);
}
function checkYear(year){
	let temp3 = /^[0-9]{4}$/;
	return temp3.test(year);
}
function checkPassword(pass){
	let temp4 = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15})/;
	return temp4.test(pass);
}
