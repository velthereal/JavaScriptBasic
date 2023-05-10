// let day = prompt('Enter number day');
// if (day == 1){
// 	document.write(`<h2> Monday </h2>`);
// }
// else if(day == 2){
// 	document.write(`<h2> Tuesday </h2>`);
// }
// else{
// 	document.write(`<h2> Error </h2>`);
// }

// let day = +prompt('Enter number day');
// console.log(typeof(day));
// console.log(typeof(1));
// switch (day) { // ===
// 	case 1:
// 		document.write(`<h2> Monday </h2>`);
// 		break;
// 	case 2:
// 		document.write(`<h2> Tuesday </h2>`);
// 		break;
// 	case 3:
// 		document.write(`<h2> Wednesday </h2>`);
// 		break;
// 	default:
// 		document.write(`<h2> Error </h2>`);
// 		break;
// }

// let month = +prompt('Enter number of month');
// let day;
// switch (month) {
// 	case 1: 
// 	case 3:
// 	case 5: 
// 	case 7: 
// 	case 8:
// 	case 10:
// 	case 12:
// 		day = 31;
// 		// document.write()
// 		break;
// 	case 4: 
// 	case 6:
// 	case 9: 
// 	case 11: 
// 		day = 30;
// 		break;
// 	case 2:
// 		{
// 			let year = +prompt('Enter current year');
// 			if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
// 				day = 29;
// 			}
// 			else{
// 				day = 28;
// 			}
// 			break;
// 		}
// 	default:
// 		console.log('Error')
// 		break;
// }
// if(day != undefined) {
// 	let color = prompt('Enter color');
// 	document.write(`<h2 style="color: ${color}"> Day of (${month}) = ${day} </h2>`);
// }

// let color = prompt('Enter color');
// switch (color) {
// 	case 'red': 
// 		document.write('Apple');
// 		document.body.style.backgroundImage = "url('./images/apple.png')";
// 		break;
// 	case 'blue': 
// 		document.write('Plum');
// 		break;
// 	case 'brown': 
// 		document.write('Potatoes');
// 		break;
// 	case 'gray': 
// 		document.write('Mushroom');
// 		break;
// 	case 'yellow': 
// 		document.write('Banana');
// 		break;
// 	case 'violet': 
// 		document.write('Blackbarry');
// 		break;
// 	case 'green': 
// 		document.write('Peas');
// 		break;
// 	case 'orange': 
// 		document.write('Orange');
// 		break;
// 	case 'rose': 
// 		document.write('Raspberry');
// 		break;
// 	case 'purple': 
// 		document.write('Cherry');
// 		break;
// 	default:
// 		console.log('Error');
// 		break;
// }

let day = prompt("Введіть день:");
let month = prompt("Введіть номер місяця:");
let daysInMonth;
switch (parseInt(month)) {
  	case 1:
	case 3:
	case 5:
	case 7:
	case 8:
	case 10:
	case 12:
    	daysInMonth = 31;
    	break;
  	case 2:
		let year = +prompt('Enter current year');
		if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
			day = 29;
		}
		else{
			day = 28;
		}
  	case 4:
	case 6:
	case 9:
	case 11:
    	daysInMonth = 30;
    	break;
  default:
    console.log("Некоректний номер місяця");
}
let daysPassed = (parseInt(month) - 1) * daysInMonth + parseInt(day);
document.write(`Пройшло ${daysPassed} днів від початку року`);


// let year = +prompt('Enter year of your birth');
// switch (year % 12) {
// 	case 4:
// 		document.write(`<h2>Ви народились в рік щура</h2> <img src="https://rozdil.lviv.ua/Kalendar/Zodiakporokah/2.jpg">`);
// 		break;
// 	case 5:
// 		document.write(`<h2>Ви народились в рік бика</h2> <img src="https://rozdil.lviv.ua/Kalendar/Zodiakporokah/3.jpg">`);
// 		break;
// 	case 6: 
// 		document.write(`<h2>Ви народились в рік тигра</h2> <img src="https://rozdil.lviv.ua/Kalendar/Zodiakporokah/4.jpg">`);
// 		break;
// 	case 7:
// 		document.write(`<h2>Ви народились в рік кролика</h2> <img src="https://rozdil.lviv.ua/Kalendar/Zodiakporokah/5.jpg">`);
// 		break;
// 	case 8:
// 		document.write(`<h2>Ви народились в рік дракона</h2> <img src="https://rozdil.lviv.ua/Kalendar/Zodiakporokah/6.jpg">`);
// 		break;
// 	case 9:
// 		document.write(`<h2>Ви народились в рік змії</h2> <img src="https://rozdil.lviv.ua/Kalendar/Zodiakporokah/7.jpg">`);
// 		break;
// 	case 10:
// 		document.write(`<h2>Ви народились в рік коня</h2> <img src="https://rozdil.lviv.ua/Kalendar/Zodiakporokah/8.jpg">`);
// 		break;
// 	case 11:
// 		document.write(`<h2>Ви народились в рік кози</h2> <img src="https://rozdil.lviv.ua/Kalendar/Zodiakporokah/9.jpg">`);
// 		break;
// 	case 0:
// 		document.write(`<h2>Ви народились в рік мавпи</h2> <img src="https://rozdil.lviv.ua/Kalendar/Zodiakporokah/10.jpg">`);
// 		break;
// 	case 1:
// 		document.write(`<h2>Ви народились в рік півня</h2> <img src="https://rozdil.lviv.ua/Kalendar/Zodiakporokah/11.jpg">`);
// 		break;
// 	case 2:
// 		document.write(`<h2>Ви народились в рік собаки</h2> <img src="https://rozdil.lviv.ua/Kalendar/Zodiakporokah/12.jpg">`);
// 		break;
// 	case 3:
// 		document.write(`<h2>Ви народились в рік свині</h2> <img src="https://rozdil.lviv.ua/Kalendar/Zodiakporokah/13.jpg">`);
// 		break;
// 	default:
// 		console.log('Error');
// 		break;
// }