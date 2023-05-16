// let a = 5;

// let divide = function(one, two){
// 	if(two == 0){
// 		console.error('Error');
// 		return;
// 	}
// 	let res = one / two;
// 	return res;
// }

// let number = divide(10, 2);
// console.log(divide(45, 9));

// function divide(one, two){
// 	if(two == 0){
// 		console.error('Error');
// 		return;
// 	}
// 	let res = one / two;
// 	return res;
// }
// console.log('number = ' + number);

// function printMessage(){
// 	// let b = 5;
// 	// console.log(a);
// 	// console.log(a + b);
// 	alert(`Hello`);
// }
// console.log(a);
// for (let i = 0; i < 5; i++) {
// 	printMessage();
// }

// 3 Напишіть функцію, яка приймає 2 числа та знак (+ - * /),підраховує приклад і повертає результат

// let sum = function(one, two){
// 	return one + two;
// }
// let sum = (one, two) =>{
// 	return one + two;
// }
// let sum = (one, two) => one + two;

// let sub = function(one, two){
// 	return one - two;
// }
// let mult = function(one, two){
// 	return one * two;
// }
// let divide = function(one, two){
// 	return two == 0 ? undefined : one / two;

	// if(two == 0){
	// 	return undefined;
	// }

	// return one / two;
// }
// let calculate = function(one, two, op){
// 	switch(op){
// 		case '+' : return sum(one, two);
// 		case '-' : return sub(one, two);
// 		case '*' : return mult(one, two);
// 		case '/' : return divide(one, two);
// 		default:
// 			console.error(`Not found operation`);
// 	}
// }
// let a = +prompt('enter first number');
// let b = +prompt('enter second number');
// let op = prompt('enter operator');
// document.write(`Result fumction calculate :: ${a} ${op} ${b} = ${calculate(a,b, op)} <br>`);
// document.write(`Result fumction calculate :: ${calculate(a,b, '+')} <br>`);
// document.write(`Result fumction calculate :: ${calculate(a,b,'-')} <br>`);
// document.write(`Result fumction calculate :: ${calculate(a,b,'*')} <br>`);
// document.write(`Result fumction calculate :: ${calculate(a,b,'/')}`);

// 5 Напишіть функцію, яка приймає число і виводить таблицю множення для цього числа. Викличте функцію для всіх чисел від 2 до 9.

// let multiTable = (number) => {
// 	for (let i = 1; i <= 10; i++) {
// 		document.write(`${number} x ${i} = ${i * number} <br>`);
		
// 	}
// }

// document.write(`<table>`)
// for(let i =2; i < 10; i++){
// 	if(i == 2 || i == 6) {
// 		document.write(`<tr>`)
// 	}
// 	document.write(`<td>`)
// 	multiTable(i)
// 	document.write(`</td>`)
// 	if(i == 5 || i == 9){
// 		document.write(`</tr>`)
// 	}
// }
// document.write(`</table>`)

// 6 Напишіть функцію, яка реалізує роботу оператора %. Функція приймає 2 параметри та повертає залишок від ділення першого параметра на другий. У функції використовуйте тільки + - * /, а оператор % не використовувати. 

// let remainder = (one, two) =>{
// 	let int = parseInt(one / two);
// 	let res = one - int * two;
// 	return res;
// }

// let remainder = (one, two) => one - (parseInt(one / two) * two);
// console.log(remainder(17, 5));

// 1 Напишіть функцію, яка приймає 2 числа та повертає менше з них

// function numbers(one, two) {
// 	return one > two ?  two : one;
// }
// console.log(numbers(5, 3));

// 2 Напишіть функцію, яка зводить передане число у вказаний ступінь

// let number = (one, two) => one ** two;
// let pow = +prompt('Enter power');
// console.log(number(2, pow));

// 4 Напишіть функцію, яка перевіряє, чи є передане їй число простим
// let num = (one) =>{
// 	for (let i = 2; i <= one; i++) {
// 		if(one % i == 0){
// 			return false;
// 		}
// 	}
// 	return true;
// }
// console.log(num(11));

// 7 Напишіть функцію, яка приймає від 1 до 5 чисел і повертає їх суму

// function sumNumbers(one, two, three, four, five){
// 	let sum = 0;
// 	let numbers = [one, two, three, four, five];
// 	for (let i = 0; i < numbers.length; i++) {
// 		sum += numbers[i];
// 	}
// 	return sum;
// }
// console.log(sumNumbers(1, 5, 8, 9, 8));

// 8 Напишіть функцію, яка приймає від 1 до 5 чисел і повертає більше з них

// function numbers(one, two, three, four, five){
// 	let nums = [one, two, three, four, five];
// 	let max = nums[0];
// 	for (let i = 0; i < nums.length; i++) {
// 		if(max < nums[i]){
// 			max = nums[i];
// 		}
// 	}
// 	return max;
// }
// console.log(numbers(1, 16, 8, 9, 8));

// 9 Напишіть функцію, яка виводить усі парні або непарні числа у вказаному користувачем діапазоні. Які числа виводити, визначається третім параметром типу bool (true – парні, false – непарні)

// function printNumbers(start, end, even) {
// 	if(even) {
// 		for(let i = start; i <= end; i++) {
// 			if (i % 2 === 0) {
// 				console.log(i);
// 			}
// 		}
// 	} else {
// 		for (let i = start; i <= end; i++) {
// 			if (i % 2 !== 0) {
// 				console.log(i);
// 			}
// 		}
// 	}
// }
// let start = +prompt('Enter start number');
// let end = +prompt('Enter end number');
// let q = confirm('Even(true) or odd(false)');
// console.log(printNumbers(start, end, q));

// 10 Напишіть функцію, яка приймає дату (день, місяць, рік) і повертає дату наступного дня у вигляді рядка «день.місяць.рік». Перевірку на високосний рік бажано написати окремою функцією

function getNextDate(day, month, year) {
	if (day < 1 || month < 1 || month > 12 || year < 0) {
	  return "Неправильна дата";
	}
	let daysInMonth;
	switch (month) {
		case 2:
			daysInMonth = year % 4 == 0 && year % 100 != 0 || year % 400 == 0 ? 29 : 28;
			break;
		case 4:
		case 6:
		case 9:
		case 11:
			daysInMonth = 30;
			break;
		default:
			daysInMonth = 31;
			break;
	}
	if (day === daysInMonth) {
		day = 1;
		if (month === 12) {
			month = 1;
			year++;
		} else {
			month++;
		}
	} else {
		day++;
	}
	let formattedDate = `${day}.${month}.${year}`;
	return formattedDate;
}
console.log(getNextDate(28, 2, 2013));