let form = document.forms[0];
let seatsDiv = document.querySelector('.seats');
let seatsPrice = document.querySelector('.seats span');
let result = document.querySelector('.result');
let tickets = document.querySelector('.result table');

form.search.addEventListener('click', (e) => {
	seatsDiv.classList.remove('none');
	form.direction.disabled = true;
	form.date.disabled = true;
	e.preventDefault();
})
form.book.addEventListener('click', (e) => {
	let seats = form.seat;
	let price = 0;
	let numberOfSeat = [];
	for(let i = 0; i < seats.length; i++){
		if(seats[i].checked){
			numberOfSeat.push(seats[i].nextElementSibling.textContent);
			price += 62;
			seatsPrice.textContent = price + '$';
			let tr = document.createElement('tr');
			let tdDirection = document.createElement('td');
			let tdDate = document.createElement('td');
			let tdSeat = document.createElement('td');

			tdDirection.textContent = form.direction.value;
			tdDate.textContent = form.date.value;
			for(let j = 0; j < numberOfSeat.length; j++){
				tdSeat.textContent = numberOfSeat[j];
			}
			tr.insertAdjacentElement('beforeend', tdDirection);
			tr.insertAdjacentElement('beforeend', tdDate);
			tr.insertAdjacentElement('beforeend', tdSeat);
			tickets.insertAdjacentElement('beforeend', tr);
			console.log(price);
		}
	}

	result.classList.remove('none');
	form.classList.add('none');


	e.preventDefault();
})