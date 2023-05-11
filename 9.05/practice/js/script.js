// 1
// let start = 10;
// let end = 15;
// let counter = 0;
// for(let num = start; num <= end; num++){
// 	for(let i = 1; i <= num; i++){
// 		if(num % i == 0){
// 			counter++;
// 		}
// 	}
// 	console.log(`Число ${num} має ${counter} дільників.`);
// }

// 2
// for(let num = 2; num <= 1000; num++){
// 	let isPrime = true;
// 	for(let i = 2; i < num; i++){
// 		if(num % i == 0){
// 			isPrime = false;
//       	break;
// 		}
// 	}
// 	if(isPrime){
// 		console.log(num);
// 	}
// }

// 3
// let combinations = 0;
// for(let i = 1; i <= 9; i++){
// 	for(let j = 0; j <= 9; j++){
// 		if(j != i){
// 			for(let k = 0; k <= 9; k++){
// 				if(k != i && k != j){
// 					let code = i * 100 + j * 10 + k;
// 					console.log(code);
// 					combinations++;
// 				}
// 			}
// 		}
// 	}
// }
// console.log(`Кількість комбінацій: ${combinations}`);
// console.log(`Час для відкриття валізи (у гіршому випадку): ${combinations * 3} сек`);

// 4
// let totalPayment = 0;
// for(let i = 1; i <= 12; i++){
// 	let paymentMarch = parseFloat(prompt(`Введіть заробітну плату співробітника ${i} за березень:`));
// 	let paymentApril = parseFloat(prompt(`Введіть заробітну плату співробітника ${i} за квітень:`));
// 	let paymentMay = parseFloat(prompt(`Введіть заробітну плату співробітника ${i} за травень:`));

// 	let quarterlyPayment = paymentMarch + paymentApril + paymentMay;
// 	console.log(`Виплата співробітнику ${i} за квартал: ${quarterlyPayment}`);

// 	totalPayment += quarterlyPayment;
// }
// console.log(`Загальна виплата по всім співробітникам за квартал: ${totalPayment}`);

// 5
let month = +prompt('Enter number of month');
let start = +prompt('Enter strat day');

switch (month) {
case 1:
case 3:
case 5:
case 7:
case 8:
case 10:
case 12:
	month = 31;
	break;
case 4:
case 6:
case 9:
case 11:
	month = 30;
	break;
case 2:
	let year = +prompt('Enter current year');
	month = year % 4 == 0 && year % 100 != 0 || year % 400 == 0 ? 29 : 28;
	break;
}

let day = 0;
let counter = 0;
let weekend = 0;
let monthName; // не спарцьовує назва місяця
switch(month){
	case 1:
		monthName = 'January';
		break;
	case 2:
		monthName = 'February';
		break;
	case 3:
		monthName = 'March';
		break;
	case 4:
		monthName = 'April';
		break;
	case 5:
		monthName = 'May';
		break;
	case 6:
		monthName = 'June';
		break;
	case 7:
		monthName = 'July';
		break;
	case 8:
		monthName = 'August';
		break;
	case 9:
		monthName = 'September';
		break;
	case 10:
		monthName = 'October';
		break;
	case 11:
		monthName = 'November';
		break;
	case 12:
		monthName = 'December';
		break;
}
document.write(`<div>`)
document.write('<table>')
document.write(`<tr><th colspan="7">${monthName}</th></tr>`)
document.write('<tr><td>Mo</td><td>Tu</td><td>We</td><td>Th</td><td>Fr</td><td>Sa</td><td>Su</td></tr>')

for(let i = 0; i < month; i++){
	if(counter % 7 == 0){
		document.write(`<tr>`)
	}
	if(i == 0){
		for(let j = 0; j < start - 1; j++){
			document.write(`<td></td>`)
			counter++;
		}
	}
	day++;
	document.write(`<td>${day < 10 ? "0" : ""}${day}</td>`);
	counter++;
	if(counter % 7 == 0){
		weekend++;
		if(day > 1){
			weekend++;
		}
	}
	if(day == month){
		while(counter % 7 != 0){
			document.write(`<td></td>`)
			counter++;
		}
	}
	if(counter % 7 == 0){
		document.write(`</tr>`)
	}
}
document.write('</table>');
document.write(`<p>Number of weekend in month: ${weekend}</p>`)
document.write(`</div>`);