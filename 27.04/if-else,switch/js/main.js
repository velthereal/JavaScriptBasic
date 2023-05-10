// 10
// let day, month, year, fullDays;
// day = +prompt('Enter day');
// month = +prompt('Enter month');
// year = +prompt('Enter year');
// document.write(`<h2> ${day < 10 ? '0': ''}${day}.${month < 10 ? '0': ''}${month}.${year} </h2>`);
// switch (month) {
// 	case 1:
// 	case 3:
// 	case 5:
// 	case 7:
// 	case 8:
// 	case 10:
// 	case 12:
// 		fullDays = 31;
// 		break;
// 		case 7:
// 	case 4:
// 	case 6:
// 	case 9:
// 	case 11:
// 		fullDays = 30;
// 		break;
// 	case 2:
// 		fullDays = (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) ? 29 : 28;
// 		break;
// 	default:
// 		break;
// }
// day++;
// if (day > fullDays) {
// 	month++;
// 	day = 1;
// }
// if(month > 12){
// 	month = 1;
// 	year++;
// }
// document.write(`<h2> ${day < 10 ? '0': ''}${day}.${month < 10 ? '0': ''}${month}.${year} </h2>`);

// 11
// let firstDay = +prompt('Enter first day');
// let firstMonth = +prompt('Enter first month');
// let firstYear = +prompt('Enter first year');

// let secondDay = +prompt('Enter second day');
// let secondMonth = +prompt('Enter second month');
// let secondYear = +prompt('Enter second year');

// let fullDays;

// document.write(`<h2> ${firstDay < 10 ? '0': ''}${firstDay}.${firstMonth < 10 ? '0': ''}${firstMonth}.${firstYear} </h2>`);
// document.write(`<h2> ${secondDay < 10 ? '0': ''}${secondDay}.${secondMonth < 10 ? '0': ''}${secondMonth}.${secondYear} </h2>`);
// switch (firstMonth, secondMonth) {
// 	case 12: fullDays += 31;
// 	case 11: fullDays = 30;
// 	case 10: fullDays += 31;
// 	case 9: fullDays = 30;
// 	case 8: fullDays += 31;
// 	case 7: fullDays = 30;
// 	case 6: fullDays = 30;
// 	case 5: fullDays += 31;
// 	case 4: fullDays = 30;
// 	case 3: fullDays += 31;
// 	case 2: fullDays = (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) ? 29 : 28;
// 	case 1: fullDays += 31;
// }
// let firstDaysPassed = (parseInt(firstMonth) - 1) * fullDays + parseInt(firstDay);
// document.write(`<h2> Пройшло ${firstDaysPassed} днів від початку року </h2>`);
// let secondDaysPassed = (parseInt(secondMonth) - 1) * fullDays + parseInt(secondDay);
// document.write(`<h2> Пройшло ${secondDaysPassed} днів від початку року </h2>`);
// let subtraction;
// subtraction = secondDaysPassed - firstDaysPassed;
// document.write(`<h2>${subtraction} днів </h2>`);

// 12
let firstQuestion = prompt('Професор ліг спати о 8 годині, а встав о 9 годині. Скільки годин проспав професор?');
let secondQuestion = prompt('На двох руках десять пальців. Скільки пальців на 10?');
let thirdQuestion = prompt('Скільки цифр у дюжині?');
let fourthQuestion = prompt('Скільки потрібно зробити запилів, щоб розпиляти колода на 12 частин?');
let fifthQuestion = prompt('Лікар зробив три уколи в інтервалі 30 хвилин. Скільки часу він витратив?');
let sixthQuestion = prompt('Скільки цифр 9 в інтервалі 1100?');
let seventhQuestion = prompt('Пастух мав 30 овець. Усі, крім однієї, розбіглися. Скільки овець лишилося?');
let firstAnswer = 0;
let secondAnswer = 0;
let thirdAnswer = 0;
let fourthAnswer = 0;
let fifthAnswer = 0;
let sixthAnswer = 0;
let seventhAnswer = 0;

let result;

if (firstQuestion == 1) {
	firstAnswer = 1;
}
if (secondQuestion == 50) {
	secondAnswer = 1;
}
if (thirdQuestion == 2) {
	thirdAnswer = 1;
}
if (fourthQuestion == 11) {
	fourthAnswer = 1;
}
if (fifthQuestion == 30) {
	fifthAnswer = 1;
}
if (sixthQuestion == 1) {
	sixthAnswer = 1;
}
if (seventhQuestion == 1) {
	seventhAnswer = 1;
}
result = firstAnswer + secondAnswer + thirdAnswer + fourthAnswer + fifthAnswer + sixthAnswer + seventhAnswer;
console.log(result);
switch (result) {
	case 7:
		document.write(`<p>Геній</p>`);
		document.body.style.backgroundImage = "url('https://thumbs.dfs.ivi.ru/storage37/contents/5/0/de154360a23641eb7924502f2e59a7.jpg')";
		break;
	case 6:
		document.write(`<p>Ерудит</p>`);
		document.body.style.backgroundImage = "url('https://st2.depositphotos.com/4164793/6246/i/600/depositphotos_62461737-stock-photo-chess.jpg')";
		break;
	case 5:
		document.write(`<p>Нормальний</p>`);
		document.body.style.backgroundImage = "url('https://img.freepik.com/premium-vector/thumb-up-hand-gesture-cartoon-comic-background_530597-1654.jpg?w=2000')";
		break;
	case 4:
		document.write(`<p>Здібності середні</p>`);
		document.body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi1fHw8t7zg7PtLrxwywv_DXjdJOULZrDdDxHKC95yTx4dtMtXFIb2AeXd0jS9VE6poSU&usqp=CAU')";
		break;
	case 3:
		document.write(`<p>Здібності нижче середнього</p>`);
		document.body.style.backgroundImage = "url('https://i.work.ua/article/2219b.jpg')";
		break;
	case 2:
	case 1:
	case 0:
		document.write(`<p>Вам треба відпочити!</p>`);
		document.body.style.backgroundImage = "url('https://life.pravda.com.ua/images/doc/c/4/c401337-kit-son.jpg')";
		break;
}
// document.write(`<p>Геній</p>`);