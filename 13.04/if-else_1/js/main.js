
// zapytaty v korystuvacha chas, vyvesty k-ct secund
// let h = parseInt(prompt('Enter hours'));
// let m = parseInt(prompt('Enter minutes'));
// let s = parseInt(prompt('Enter seconds'));

// let allSeconds = h * 3600 + m * 60 + s;
// document.write(`${h} : ${m} : ${s} = ${allSeconds} seconds have passed since the begining of the day`);
// document.write(h, ' : ', m, ' : ', s, '=', allSeconds , 'seconds have passed since the begining of the day');

// vyvesty hodyny, hvylyny, sekundy yaki zalyshylysia do kincia dnia
// let h = parseInt(prompt('Enter hours'));
// let m = parseInt(prompt('Enter minutes'));
// let s = parseInt(prompt('Enter seconds'));

// let allSeconds = h * 3600 + m * 60 + s;
// document.write('<p class = "text">');
// document.write(`${h} : ${m} : ${s} = ${allSeconds} seconds have passed since the begining of the day`);
// // document.write(h, ' : ', m, ' : ', s, '=', allSeconds , 'seconds have passed since the begining of the day');
// let allSecondsOfDay = 24 * 3600;
// allSeconds = allSecondsOfDay - allSeconds; //7563
// h = parseInt(allSeconds / 3600);
// // allSeconds = allSeconds - (h * 3600); //363
// allSeconds = allSeconds % 3600;
// m = parseInt(allSeconds / 60); // 6
// // s = allSeconds - (m * 60); //360
// s = allSeconds % 60;
// document.write(`<br>${h} : ${6} : ${s}`);
// document.write('</p>');

// IF, else if, ELSE
// ==, >, <, >=, <=, !=
// let day = prompt('Enter number of day');
// if(day == 1){
// 	document.write(`Monday`);
// }
// else if(day == 2){
// 	document.write(`Tuesday`);
// }
// else if(day == 3){
// 	document.write(`Wednesday`);
// }
// else if(day == 4){
// 	document.write(`Thursday`);
// }
// else if(day == 5){
// 	document.write(`Friday`);
// }
// else if(day == 6){
// 	document.write(`Suturday`);
// }
// else if(day == 7){
// 	document.write(`Sunday`);
// }
// else{
// 	document.write(`Error`);
// }
// 1 - 12
// || - or; && - and;
// let month = prompt('Enter number of month');
// if(month == 1){
// 	document.write(`<h2 class ="winter"> Winter </h2>`);
// }
// else if(month == 2){
// 	document.write(`<h2 class ="winter"> Winter </h2>`);
// }
// else if(month == 12){
// 	document.write(`<h2 class ="winter"> Winter </h2>`);
// }
// if(month == 1 || month == 2 || month == 12){
// 	document.write(`<h2 class ="winter"> Winter </h2>`);
// }
// else if(month == 3 || month == 4 || month == 5){
// 	document.write(`<h2 class ="spring"> Spring </h2>`);
// }
// else if(month == 6 || month == 7 || month == 8){
// 	document.write(`<h2 class ="summer"> Summer </h2>`);
// }
// else if(month == 9 || month == 10 || month == 11){
// 	document.write(`<h2 class ="Autumn"> Autumn </h2>`);
// }
// else{
// 	document.write(`<h2 class ="error"> Error </h2>`);
// }

// let number = prompt('Enter number');
// if(number % 2 == 0){
// 	document.write(`<h2 class ="even"> Even number</h2>`);
// }
// else{
// 	document.write(`<h2 class ="odd"> Odd number</h2>`);
// }

// let number = prompt('Enter');

// if(number >= 0 && number <= 20){
// 	document.write('належить до діапазону [0;20;]');
// }
// else{
// 	document.write('не належить до діапазону [0;20;]');
// }

let login = prompt('Хто прийшов?');
if(login == 'адмін'){
	let pass = prompt('Пароль')
	if (pass == 'ШАГ'){
		document.write('Ласкаво просимо');
	}
	else if(login == null){
		document.write('Вхід скасований');
	}
	else{
		document.write('Пароль невірний');
	}
}
else if(login == null){
	document.write('Вхід скасований');
}
else{
	document.write('Я вас не знаю');
}