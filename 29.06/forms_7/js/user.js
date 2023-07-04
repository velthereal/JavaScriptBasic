let userInfo = document.forms.userInfo;
let firstName = userInfo.firstName;
let lastName = userInfo.lastName;
let year = userInfo.year;
let gender = userInfo.gender;
let phone = userInfo.phone;
let skype = userInfo.skype;
let saveButton = userInfo.save;
let exit = document.querySelector('a');
let userEmail = document.querySelector('span.userEmail');
let l = userInfo.elements.length;

saveButton.addEventListener('click', (e) => {
	for(let i = 0; i < l; i++) {
		if(userInfo.elements[i].tagName === 'BUTTON'){
			continue;
		}
		if(userInfo.elements[i] === phone){
			continue;
		}
		if(userInfo.elements[i] === skype){
			continue;
		}
		if(!checkEmpty(userInfo.elements[i].value)){
			userInfo.elements[i].classList.add('error');
			e.preventDefault();
		}
	}
	if(!checkName(firstName.value)){
		firstName.classList.add('error');
		e.preventDefault();
	}
	if(!checkName(lastName.value)){
		lastName.classList.add('error');
		e.preventDefault();
	}
	if(!checkYear(year.value)){
		year.classList.add('error');
		e.preventDefault();
	}
	if(phone.value.length !== 0){
		if(!checkPhone(phone.value)){
			phone.classList.add('error');
			e.preventDefault();
		}
	}
	if(skype.value.length !== 0){
		if(!checkSkype(skype.value)){
			skype.classList.add('error');
			e.preventDefault();
		}
	}
});

for(let i = 0; i < l; i++) {
	userInfo.elements[i].addEventListener('input', () => {
		userInfo.elements[i].classList.remove('error');
	});
}

function checkEmpty(str){
	return /^\S/.test(str);
}
function checkName(name){
	return /[A-Za-z]{2,20}/.test(name);
}
function checkYear(year){
	if(year > 1900){
		return true;
	}
	return false;
}
function checkPhone(phone){
	return /^[0-9()\s-]{10,12}$/.test(phone);
}
function checkSkype(skype){
	return /^[a-zA-Z0-9.-]*$/.test(skype);
}