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

window.addEventListener('DOMContentLoaded', () => {
	let res = getCookie();
	let id =  getCurrent();
	let user = res[id];
	userEmail.textContent = user.email;
	if(Object.keys(user).length > 2){
		showInfo(user);
		return;
	}
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
		let flag = true;
		if(!checkName(firstName.value)){
			firstName.classList.add('error');
			flag = false;
			e.preventDefault();
		}
		if(!checkName(lastName.value)){
			lastName.classList.add('error');
			flag = false;
			e.preventDefault();
		}
		if(!checkYear(year.value)){
			year.classList.add('error');
			flag = false;
			e.preventDefault();
		}
		if(phone.value.length !== 0){
			if(!checkPhone(phone.value)){
				phone.classList.add('error');
				flag = false;
				e.preventDefault();
			}
		}
		if(skype.value.length !== 0){
			if(!checkSkype(skype.value)){
				skype.classList.add('error');
				flag = false;
				e.preventDefault();
			}
		}
		if(!flag) return;
		addInfo(res[id]);
		let date = new Date();
		date.setHours(new Date().getHours() + 1);
		document.cookie = `users=${JSON.stringify(res)}; expires=${date.toUTCString()}`;
	});

	exit.addEventListener('click', (e) => {
		deleteCookie('current');
	})
})

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
function getCurrent(){
	let res = document.cookie.split('; ');
	for(let i = 0; i < res.length; i++){
		let s = res[i].split('=');
		if(s[0] == 'current'){
			return +s[1];
		}
	}
}
function addInfo(obj){
	obj.firstName = firstName.value;
	obj.lastName = lastName.value;
	obj.year = year.value;
	obj.gender = gender.value;
	obj.phone = phone.value;
	obj.skype = skype.value;
}
function showInfo(obj){
	firstName.value = obj.firstName;
	lastName.value = obj.lastName;
	year.value = obj.year;
	gender.value = obj.gender;
	phone.value = obj.phone;
	skype.value = obj.skype;
	let dis = userInfo.elements;
	for(let i = 0; i < dis.length; i++){
		dis[i].setAttribute('disabled', 'true');
	}
}

function deleteCookie(cookieName) {
	document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}