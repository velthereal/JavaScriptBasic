let form = document.forms[0];
let text = document.querySelector('.result article');
let result = document.querySelector('.result');

form.btn.addEventListener('click', (e) => {
	let weight = form.bold;
	if(weight.checked){
		text.style.fontWeight = 'bold';
	}
	let decoration = form.underline;
	if(decoration.checked){
		text.style.textDecoration = 'underline';
	}
	let fStyle = form.italics;
	if(fStyle.checked){
		text.style.fontStyle = 'italic';
	}
	let text_align = form.align;
	console.log(text_align);
	for(let i = 0; i < text_align.length; i++){
		if(text_align[i].checked){
			text.style.textAlign = text_align[i].nextElementSibling.textContent.toLowerCase();
		}
	}
	
	form.classList.add('none');
	result.classList.remove('none');
	text.textContent = form.input.value;

	e.preventDefault();
})