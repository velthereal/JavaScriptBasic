// 1
// let age = prompt('Enter your age');
// if (age >= 0 && age < 12) {
// 	document.write(`<h2> You are child </h2>`);
// }
// else if (age >= 12 && age < 18) {
// 	document.write(`<h2> You are teenager </h2>`);
// }
// else if (age >= 18 && age < 60) {
// 	document.write(`<h2> You are adult </h2>`);
// }
// else if (age >= 60) {
// 	document.write(`<h2> You are pensioner </h2>`);
// }
// else {
// 	document.write(`<h2> Error </h2>`);
// }

// 2
// let num = +prompt('Enter a number from 0 to 9');
// switch (num){
// 	case 0:
// 		document.write(`<h2> ) </h2>`);
// 		break;
// 	case 1:
// 		document.write(`<h2> ! </h2>`);
// 		break;
// 	case 2:
// 		document.write(`<h2> @ </h2>`);
// 		break;
// 	case 3:
// 		document.write(`<h2> # </h2>`);
// 		break;
// 	case 4:
// 		document.write(`<h2> $ </h2>`);
// 		break;
// 	case 5:
// 		document.write(`<h2> % </h2>`);
// 		break;
// 	case 6:
// 		document.write(`<h2> ^ </h2>`);
// 		break;
// 	case 7:
// 		document.write(`<h2> & </h2>`);
// 		break;
// 	case 8:
// 		document.write(`<h2> * </h2>`);
// 		break;
// 	case 9:
// 		document.write(`<h2> ( </h2>`);
// 		break;
// 	default:
// 		document.write(`<h2> Error </h2>`);
// 		break;
// }

// 3
// let number = prompt('Enter a three-digit number');
// let c = number % 10;
// number = parseInt(number / 10);
// let b = number % 10;
// number = parseInt(number / 10);
// let a = number % 10;
// if (a == b || b == c || c == a){
// 	document.write(`<h2> This number has the same digits </h2>`);
// }
// else {
// 	document.write(`<h2> This number doesn't has the same digits </h2>`);
// }

// 4
// let year = +prompt('Enter current year');
// if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
// 	day = 29;
// 	document.write(`<h2> ${year} рік є високосним </h2>`);
// }
// else{
// 	day = 28;
// 	document.write(`<h2> ${year} рік не є високосним </h2>`);
// }

// 5
// let number = prompt("Введіть п'ятирозрядне число");
// let firstDigit = parseInt(number / 10000);
// let secondDigit = parseInt(number / 1000) % 10;
// let fourthDigit = parseInt(number / 10) % 10;
// let fifthDigit = number % 10;
// if (firstDigit === fifthDigit && secondDigit === fourthDigit) {
//    document.write(`<h2> Це число паліндром </h2>`);
// }
// else {
//    document.write(`<h2> Це число не паліндром </h2>`);
// }

// 6
let usd = prompt("Введіть кількість USD");
let currency = prompt("Введіть валюту, в яку потрібно конвертувати (EUR, UAH, AZN)");
let rate;
switch (currency) {
	case "EUR":
   	rate = 0.82;
   	break;
	case "UAH":
   	rate = 28.16;
   	break;
	case "AZN":
   	rate = 1.7;
   	break;
	default:
   	document.write("Введіть коректну валюту");
   	break;
}
let result = usd * rate;
document.write(`<h2> ${usd} USD = ${result} ${currency} </h2>`);