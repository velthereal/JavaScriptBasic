let form = document.forms[0];
let elements = form.elements;

form.addEventListener('submit', (e) => {
	// for(let i = 0; i < elements.length - 1; i++){
	// 	if(elements[i].value.length == 0){
	// 		elements[i].classList.add('error');
	// 		e.preventDefault();
	// 	}
	// 	elements[i].addEventListener('input', (e) => {
	// 		elements[i].classList.remove('error');
	// 	})
	// }

	if(!checkEmail(form.email.value)){
		form.email.classList.add('error');
		e.preventDefault();
	} else {
		form.email.classList.add('right');
	}
	// console.log(checkEmail(form.email.value));
});
form.email.addEventListener('input', (e) => {
	if(checkEmail(form.email.value)){
	form.email.classList.add('right');
	} else {
		form.email.classList.add('error');
	}
})
function checkEmail(email){
	let temp = /(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})/;
	return temp.test(email);
}