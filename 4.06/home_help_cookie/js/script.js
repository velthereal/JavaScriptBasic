// let date = new Date();
// date.setHours(new Date().getHours() + 5);

if(document.cookie.indexOf('id') == -1){
	document.cookie = `id=${1}; expires=${date.toDateString()}`;
}
// let form = document.forms[0];
// let email = form.email;
// let password = form.password;
// let link = document.querySelector('form a');
// let wrong = document.querySelectorAll('form span');

link.addEventListener('click', (e) => {
	if(!checkEmail(email.value)){
		wrong[0].classList.add('wrong');
		e.preventDefault();
	}

	setCookie(email.value, password.value);
});

function getId(){
	let index = document.cookie.indexOf('id');
	let id = +(document.cookie[index + 3]);
	// id++;
	document.cookie = `id=${id+1}; expires=${date.toUTCString()}`
	return id
}
email.addEventListener('input', () => {
	deleteWrong(wrong[0]);
})
password.addEventListener('input', () => {
	deleteWrong(wrong[1]);
})

function deleteWrong(wrong){
	wrong.classList.remove('wrong');
}

function checkEmail(email){ // сама перевір все
	if(email.length == 0){
		return false;
	}
	if(!/@/.test(email)){
		return false;
	}
	return true;
}

function setCookie(email, password){
	let id = getId();
	document.cookie = `user${id}=${email.value}; expires=${date.toUTCString()}`;
	document.cookie = `password${id}=${password.value}; expires=${date.toUTCString()}`;
}

function getCookie(){
	let res = document.cookie.split('; ');
	let arr = [];
	let count = res[res.indexOf('id') +3];
	for(let i = 0; i < count; i++){
		let obj = {};
		for(	let n = 0; n < 2; n++){
			user = res[i].split('=');
			if(obj[0].indexOf('user') != -1){
				obj.user = obj[1];
			}
			if(obj[0].indexOf('password') != -1){
				obj.password = obj[1];
			}
		}
		arr.push(obj);
	}

}