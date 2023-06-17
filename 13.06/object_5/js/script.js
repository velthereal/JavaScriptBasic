// 1 Створіть об’єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість), і наступні функції для роботи з цим об’єктом

// let car = {
// 	manufacter: 'Volvo Cars',
// 	model: 'Volvo S90',
// 	year: 2016,
// 	speed: 100
// }

// 1.1 Функція для виведення інформації про автомобіль на екран
// let p = document.querySelectorAll('p');
// function carInfo(car){
// 	p[0].textContent += car.manufacter;
// 	p[1].textContent += car.model;
// 	p[2].textContent += car.year;
// 	p[3].textContent += car.speed;
// }
// carInfo(car);

// 1.2 Функція для підрахунку необхідного часу для подолання переданої відстані із середньою швидкістю. Враховуйте, що через кожні 4 години дороги, водієві необхідно робити перерву на 1 годину
// function timeOnTheRoad(distance, speed){
// 	let time = distance/speed;
// 	let restPeriods = Math.floor(time / 4);
// 	time += restPeriods;
// 	return time;
// }
// console.log(timeOnTheRoad(700, car.speed));

// 2 Створіть об’єкт, що зберігає окремий чисельник і знаменник дробу, і наступні функції для роботи з цим об’єктом
// let fract1 = {
// 	numerator: 2,
// 	denominator: 4
// }
// let fract2 = {
// 	numerator: 5,
// 	denominator: 6
// }
// // 2.1 Функція додавання 2 об’єктів-дробів
// function sum(fract1, fract2){
// 	let den = fract1.denominator * fract2.denominator;
// 	let newNum1 = fract1.numerator * fract2.denominator;
// 	let newNum2 = fract2.numerator * fract1.denominator;
// 	let sum = newNum1 + newNum2;
// 	return sum + '/' + den;
// }
// console.log(sum(fract1, fract2));
// // 2.2 Функція віднімання 2 об’єктів-дробів
// function subst(fract1, fract2){
// 	let den = fract1.denominator * fract2.denominator;
// 	let newNum1 = fract1.numerator * fract2.denominator;
// 	let newNum2 = fract2.numerator * fract1.denominator;
// 	let subst = newNum1 - newNum2;
// 	return subst + '/' + den;
// }
// console.log(subst(fract1, fract2));
// // 2.3 Функція множення 2 об’єктів-дробів
// function mult(fract1, fract2){
// 	let multNum1 = fract1.numerator * fract2.numerator;
// 	let multNum2 = fract1.denominator * fract2.denominator;
// 	return multNum1 + '/' + multNum2;
// }
// console.log(mult(fract1, fract2));
// // 2.4 Функція ділення 2 об’єктів-дробів
// function div(fract1, fract2){
// 	let divNum1 = fract1.numerator * fract2.denominator;
// 	let divNum2 = fract1.denominator * fract2.numerator;
// 	return divNum1 + '/' + divNum2;
// }
// console.log(div(fract1, fract2));
// 2.5 Функція скорочення об’єкта-дробу (НЕ ЗНАЮ ЯК)
// function reduction(fract){
// 	let nsd = findNSD(fract.numerator, fract.denominator);
// 	let simpleNum = fract.numerator / nsd;
// 	let simpleDen = fract.denominator / nsd;
// 	function findNSD(a, b){
// 		while(b != 0){
// 			let t = b;
// 			b = a % b;
// 			a = t;
// 		}
// 		return a;
// 	}
// 	return simpleNum + '/' + simpleDen;
// }
// console.log(reduction(fract2));

// 3 Створіть об’єкт, що описує час (години, хвилини, секунди), і наступні функції для роботи з цим об’єктом
// let time = {
// 	hours: 20,
// 	minutes: 13,
// 	seconds: 30
// }
// let ptime = document.querySelector('.time p');
// // 3.1 Функція виведення часу на екран
// function showTime(time){
// 	ptime.textContent = `${time.hours}:${time.minutes}:${time.seconds}`;
// }
// showTime(time);
// 3.2 Функція зміни часу на передану кількість секунд
// function seconds(time, sec){
// 	time.seconds += sec;
// 	if(time.seconds > 59){
// 		let smth = Math.floor(time.seconds / 60);
// 		time.seconds -= 60*smth;
// 		time.minutes += smth;
// 		if(time.minutes > 59){
// 			let hoursToAdd = Math.floor(time.minutes / 60);
// 			time.minutes -= 60*hoursToAdd;
// 			time.hours += hoursToAdd;
// 			if(time.hours > 23){
// 				time.hours %= 24;
// 			}
// 		}
// 	}
// 	return `${time.hours}:${time.minutes}:${time.seconds}`;
// }
// console.log(seconds(time, 3600));
// 3.3 Функція зміни часу на передану кількість хвилин
// function minutes(time, min){
// 	time.minutes += min;
// 	if(time.minutes > 59){
// 		let hoursToAdd = Math.floor(time.minutes / 60);
// 		time.minutes -= 60*hoursToAdd;
// 		time.hours += hoursToAdd;
// 		if(time.hours > 23){
// 			time.hours %= 24;
// 		}
// 	}
// 	return `${time.hours}:${time.minutes}:${time.seconds}`;
// }
// console.log(minutes(time, 800));
// 3.4 Функція зміни часу на передану кількість годин
// function hours(time,hours){
// 	time.hours += hours;
// 	if(time.hours > 23){
// 		time.hours %= 24;
// 	}
// 	return `${time.hours}:${time.minutes}:${time.seconds}`;
// }
// console.log(hours(time, 30));