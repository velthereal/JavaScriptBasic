// IF
// 1
// let num = +prompt('Enter number');
// if(num > 0){
// 	document.write(`Число додатне`);
// } else if(num < 0){
// 	document.write(`Число від'ємне`);
// } else{
// 	document.write(`Число НУЛЬ`);
// }

// 2
// let age = +prompt('Enter your age');
// if(age > 0 && age <= 120){
// 	document.write(`Your age ${age}`);
// } else {
// 	document.write(`This age can't exist`);
// }

// 3
// let num = +prompt('Enter number');
// if(num >= 0) {
// 	document.write(`Модуль числа ${num} --> ${num}`);
// } else {
// 	document.write(`Модуль числа ${num} --> ${-num}`);
// }

// 4
// let hours = +prompt('Enter hours');
// let minutes = +prompt('Enter minutes');
// let seconds = +prompt('Enter seconds');
// if(hours <= 23 && minutes <= 59 && seconds <= 59){
// 	document.write(`${hours}:${minutes}:${seconds}`);
// } else{
// 	document.write(`Error`);
// }

// 5
// let x = +prompt('Enter X');
// let y = +prompt('Enter Y');
// if (x > 0 && y > 0) {
// 	document.write(`Точка знаходиться в першій четверті`);
// } else if (x < 0 && y > 0){
// 	document.write(`Точка знаходиться в другій четверті`);
// } else if (x < 0 && y < 0){
// 	document.write(`Точка знаходиться в третій четверті`);
// } else if (x > 0 && y < 0){
// 	document.write(`Точка знаходиться в четвертій четверті`);
// } else {
// 	document.write(`Точка знаходиться на початку координат`);
// }

// SWITCH
// 1
// let numberOfMonth = +prompt('Enter number of month');
// switch (numberOfMonth) {
// 	case 1:
// 		document.write(`January`);
// 		break;
// 	case 2:
// 		document.write(`February`);
// 		break;
// 	case 3:
// 		document.write(`March`);
// 		break;
// 	case 4:
// 		document.write(`April`);
// 		break;
// 	case 5:
// 		document.write(`May`);
// 		break;
// 	case 6:
// 		document.write(`June`);
// 		break;
// 	case 7:
// 		document.write(`July`);
// 		break;
// 	case 8:
// 		document.write(`August`);
// 		break;
// 	case 9:
// 		document.write(`September`);
// 		break;
// 	case 10:
// 		document.write(`October`);
// 		break;
// 	case 11:
// 		document.write(`November`);
// 		break;
// 	case 12:
// 		document.write(`February`);
// 		break;
// 	default:
// 		document.write(`Error`);
// 		break;
// }

// 2
// let firstNumber = +prompt('Enter first number');
// let operator = prompt('Enter operator');
// let secondNumber = +prompt('Enter first number');
// switch(operator){
// 	case '+':
// 		document.write(firstNumber + secondNumber);
// 		break;
// 	case '-':
// 		document.write(firstNumber - secondNumber);
// 		break;
// 	case '*':
// 		document.write(firstNumber * secondNumber);
// 		break;
// 	case '/':
// 		document.write(firstNumber / secondNumber);
// 		break;
// }

// TERNARY
// 1
// let firstNumber = +prompt('Enter first number');
// let secondNumber = +prompt('Enter first number');
// document.write(firstNumber > secondNumber ? firstNumber : secondNumber);

// 2
// let number = +prompt('Enter number');
// document.write(number % 5 == 0 ? number : 'Error');

// 3
// let planet = prompt('Enter planet name');
// document.write((planet == 'Земля' || planet == 'земля') ? 'Привіт, землянине!' : 'Привіт, інопланетянине!');