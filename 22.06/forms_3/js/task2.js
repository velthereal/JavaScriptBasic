let form = document.forms[0];
let block = document.querySelectorAll('.block');
let result = document.querySelector('.result');
let correctAnswersSpan = document.querySelector('.result span');

let correctAnswers = 0;
form.btn[0].addEventListener('click', (e) => {
	block[1].classList.remove('none');
	block[0].classList.add('none');
	checkAnswer();

   e.preventDefault();
});
form.btn[1].addEventListener('click', (e) => {
	block[1].classList.add('none');
	checkAnswer();
	result.classList.remove('none');
	correctAnswersSpan.textContent = correctAnswers;
	e.preventDefault();
})
function checkAnswer() {
	let answer = form.amount;
	let counter;
	for(let i = 0; i < answer.length; i++){
		if(answer[i].checked){
			counter = answer[i].nextElementSibling.textContent;
			if(counter == 5){
				correctAnswers += 1;
			}
		}
	}
}