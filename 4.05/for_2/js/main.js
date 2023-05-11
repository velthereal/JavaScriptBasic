// PRACTICE 
// 1
// let start = +prompt('Enter number');
// let end = +prompt('Enter number');
// let sum = 0;
// while (start <= end) {
// 	sum += start;
// 	start++;
// }
// document.write(`${sum} `);

// 2
// let first = +prompt('Enter number');
// let second = +prompt('Enter number');
// let res = 1;
// if(first < second){
// 	for(let i = 2; i <= first; i++){
// 		if(first % i == 0 && second % i == 0){
// 			res = i;
// 		}
// 	}
// } else {
// 	for(let i = 1; i <= second; i++){
// 		if(first % i == 0 && second % i == 0){
// 			res = i;
// 		}
// 	}
// }
// document.write(`${res} `);

// 3
// let num = +prompt('Enter number');
// for(let i = 1; i <= num; i++){
// 	if(num % i == 0){
// 		document.write(`${i} `);
// 	}
// }

// 4
// let num = +prompt('Enter number');
// let counter = 0;
// while(num != 0) {
// 	counter++;
// 	num = parseInt(num / 10);
// }

// document.write(`${counter} `);

// 5
// let positiveCounter = 0;
// let negativeCounter = 0;
// let zeroCounter = 0;
// let evenCounter = 0;
// let oddCounter = 0;
// for(let i = 1; i <= 10; i++){
// 	let num = +prompt('Enter number');
// 	if(num > 0){
// 		positiveCounter++;
// 	} else if(num < 0) {
// 		negativeCounter++;
// 	} else {
// 		zeroCounter++;
// 	}

// 	if(num % 2 == 0){
// 		evenCounter++;
// 	}else {
// 		oddCounter++;
// 	}
// }
// document.write(`Кількість додатних чисел : ${positiveCounter} <br>`);
// document.write(`Кількість від'ємних чисел : ${negativeCounter} <br>`);
// document.write(`Кількість нулів : ${evenCounter} <br>`);
// document.write(`Кількість парних чисел : ${evenCounter} <br>`);
// document.write(`Кількість непарних чисел : ${oddCounter} `);

// 6
// let res;
// let contCalc = true;
// while(contCalc){
// 	let num_1 = +prompt('Enter number');
// 	let operator = prompt('Enter operator');
// 	let num_2 = +prompt('Enter number');
// 	switch (operator) {
// 		case '+':
// 			res = num_1 + num_2;
// 			break;
// 		case '-':
// 			res = num_1 - num_2;
// 			break;
// 		case '*':
// 			res = num_1 * num_2;
// 			break;
// 		case '/':
// 			res = num_1 / num_2;
// 			break;
// 		default:
// 			alert('Error');
// 			break;
// 	}
// 	alert(`Result: ${res}`);
// 	contCalc = confirm('Do you want to do another one?');
// }
// alert('Thanks for using calculator');

// 7
// let step = 0;
// let num = parseInt(prompt('Enter number'));
// let divide = 10;
// let tmp = num;
// while(tmp > 0){
// 	step++;
// 	tmp = parseInt(num / 10);
// }
// console.log(number);
// divide = divide ** (step - 1);
// let offset = +prompt('Enter offset digit');
// for(let i = 0; i < offset % step; i++){
// 	let n = parseInt(number / divide);
// 	number %= divide;
// 	number = number * 10 + n;
// }
// console.log(number);

// 8
// let dayNumber = 0;
// while (true) {
// 	let dayName;
// 	switch (dayNumber) {
//    case 0:
//    	dayName = "Неділя";
//    	break;
//    case 1:
//    	dayName = "Понеділок";
//       break;
//    case 2:
//       dayName = "Вівторок";
//       break;
//    case 3:
//       dayName = "Середа";
//       break;
//    case 4:
//       dayName = "Четвер";
//       break;
//    case 5:
//       dayName = "П'ятниця";
//       break;
//    case 6:
//       dayName = "Субота";
//       break;
// 	}
// 	let q = confirm(`День тижня: ${dayName}. Бажаєте побачити назву наступного дня тижня?`);
// 	if (!q) {
//     break;
// 	}
// 	dayNumber = (dayNumber + 1) % 7;
// }

// 9
// document.write('<table>')
// for(let q = 0; q < 8; q+=4){
// 	document.write('<tr>')
// 	for(let j = 2; j < 6; j++){
// 		document.write('<td>')
// 		for(let i = 1; i <= 10; i++){
// 			document.write(`${j + q} x ${i} = ${(j + q) * i} <br>`)
// 		}
// 		document.write('</td>')
// 	}
// 	document.write('</tr>')
// }
// document.write('</table>')

// 10
alert('Guess the number (0 - 100)');
let counter = 0;
let end = 100;
let number = end / 2;
let step = number;
while(true){
	let answer = prompt(`Your number \n> ${number}; \n< ${number}; \n= ${number};`);
	if(answer == '='){
		alert(`Your number ${number}`);
		break;
	}
	if(counter > 5){
		alert('Error!!!!! You missed your number');
		break;
	}
	step = parseInt(step / 2);
	if(answer == '<'){
		number -= step;
		if(step == 0){
			number--;
			counter++;
		}
	} else {
		start = number;
		number += step;
		if(step == 0){
			number++;
			counter++;
		}
	}
}