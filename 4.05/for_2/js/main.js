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

// 6  запитати як зробити бо не виходить !!!!!!!!!!!!!!!!!!!!!!!!
// let num_1 = +prompt('Enter number');
// let operator = prompt('Enter operator');
// let num_2 = +prompt('Enter number');
// let res;
// let continueCalc = true;
// while(continueCalc){
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
// 			res = 'Error';
// 			continue;
// 	}
// 	alert(`Result: ${res}`);
// 	let continueInput = prompt('Do you want to do another one? (y or n)');
// 	if (continueInput != 'y') {
// 		continueCalc = false;
// 	}
// }
// alert('Thanks for using calculator');

// do {
// 	let num_1 = +prompt('Enter number');
// 	let operator = prompt('Enter operator');
// 	let num_2 = +prompt('Enter number');
// 	let res;
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
// 			res = 'Error';
// 			continue;
// 	}
// 	alert(`Result: ${res}`);
// 	let q = confirm('Do you want to do another one?');
// } while (!q);
// alert('Thanks for using calculator');

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

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
// alert('Guess the number (0 - 100)');
// let counter = 0;
// let end = 100;
// let number = end / 2;
// let step = number;
// while(true){
// 	let answer = prompt(`Your number \n> ${number}; \n< ${number}; \n= ${number};`);
// 	if(answer == '='){
// 		alert(`Your number ${number}`);
// 		break;
// 	}
// 	if(counter > 5){
// 		alert('Error!!!!! You missed your number');
// 		break;
// 	}
// 	step = parseInt(step / 2);
// 	if(answer == '<'){
// 		number -= step;
// 		if(step == 0){
// 			number--;
// 			counter++;
// 		}
// 	} else {
// 		start = number;
// 		number += step;
// 		if(step == 0){
// 			number++;
// 			counter++;
// 		}
// 	}
// }