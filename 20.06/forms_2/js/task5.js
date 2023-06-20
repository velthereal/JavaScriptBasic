let form = document.forms[0];
let q = document.querySelector('.q');

form.addEventListener('submit', (e) => {
	let question = form.question.value;
	let correctAnswer = form.correct.value;
	let wrongAnswer = form.wrong.value;

	let div = document.createElement('div');
	let pQuestion = document.createElement('p');
	pQuestion.style.textDecoration = 'underline';
	pQuestion.textContent = question;
	let pCorrectAnswer = document.createElement('p');
	pCorrectAnswer.textContent = `Correct answer: ${correctAnswer}`;
	let pWrongAnswer = document.createElement('p');
	let hr = document.createElement('hr');
	pWrongAnswer.textContent = `Wrong answer: ${wrongAnswer}`;
	div.insertAdjacentElement('beforeend', pQuestion);
	div.insertAdjacentElement('beforeend', pCorrectAnswer);
	div.insertAdjacentElement('beforeend', pWrongAnswer);
	div.insertAdjacentElement('beforeend', hr);
	q.insertAdjacentElement('beforeend', div);
	e.preventDefault();
})