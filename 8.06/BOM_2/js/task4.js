let name = document.querySelector('input');
let text = document.querySelector('textarea');
let btn = document.querySelector('button');
let box = document.querySelector('.comments');

btn.addEventListener('click', (e) => {
   e.preventDefault();
	if(name.value != '' && text.value != ''){
		createComment();
	}
	name.value = '';
	text.value = '';
} );

function createComment(){
   let div = document.createElement('div');
   let h3 = document.createElement('h3');
   h3.textContent = name.value;
   div.insertAdjacentElement('beforeend', h3);
   let p = document.createElement('p');
   p.textContent = new Date().toLocaleDateString();
   div.insertAdjacentElement('beforeend', p);
	p.style.fontSize = '12px';
   let ptext = document.createElement('p');
   ptext.textContent = text.value;
   div.insertAdjacentElement('beforeend', ptext);
   box.insertAdjacentElement('beforeend', div);
	let line = document.createElement('hr');
	div.insertAdjacentElement('beforeend', line);
}