let form = document.forms[0];
let container = document.querySelector('.container');

form.addEventListener('submit', (e) => {
   addMessage();
   e.preventDefault();
});

function addMessage(){
	if(form.name.value != '' && form.message.value != ''){
		let div = document.createElement('div');
		div.classList.add('box');
		let name = document.createElement('p');
		name.classList.add('name');
		name.textContent = form.name.value;
		div.insertAdjacentElement('beforeend', name);
		let message = document.createElement('p');
		message.classList.add('text');
		message.textContent = form.message.value;
		div.insertAdjacentElement('beforeend', message);
		let date = document.createElement('span');
		date.textContent = new Date().toLocaleTimeString() + ' ' + new Date().toLocaleDateString();
		name.insertAdjacentElement('beforeend', date);
		container.insertAdjacentElement('beforeend', div);
		console.log(date);
	}
}