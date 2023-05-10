// 1
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

// 2
// let number = prompt('Enter number');
// if(number >= 0 && number <= 20){
// 	document.write('належить до діапазону [0;20;]');
// }
// else{
// 	document.write('не належить до діапазону [0;20;]');
// }

// 3
// let temperature = prompt('Enter your body temperature');
// if(temperature < 20 || temperature > 46){
// 	alert('Ви труп');
// }
// else if(temperature >= 20 && temperature <= 27){
// 	alert('Ви у комі');
// }
// else if(temperature >= 28 && temperature < 36 || temperature >= 37 && temperature <= 42){
// 	alert('Ви хворі');
// }
// else if(temperature >= 36 && temperature < 37){
// 	alert('Ви здорові');
// }
// else if(temperature >= 42 && temperature <= 46){
// 	alert('Ви втратили свідомість');
// }

// 4
// let number = prompt('Enetr number 1 or 2');
// if(number == 1){
// 	let val = prompt('Введіть гривні');
// 	let ex_rate = prompt('Введіть курс');
// 	alert(val / ex_rate);
// }
// if(number == 2){
// 	let val = prompt('Введіть долари');
// 	let ex_rate = prompt('Введіть курс');
// 	alert(val * ex_rate);
// }

// 5
// let sex = prompt('Введіть стать');
// let age = prompt('Введіть вік');
// if(sex == 'ж' && age >= 60){
// 	alert('Час на пенсію');
// }
// else if(sex == 'ч' && age >= 65){
// 	alert('Час на пенсію');
// }
// else{
// 	alert('Ще попрацюйте');
// }

// 6
// let unit = prompt('Введіть величину');
// let length = prompt('Введіть довжину');
// if(unit == 'мм'){
// 	length = length / 1000;
// 	alert(length + ' м');
// }
// else if(unit == 'дм'){
// 	length = length / 10;
// 	alert(length + ' м');
// }
// else if(unit == 'см'){
// 	length = length / 100;
// 	alert(length + ' м');
// }
// else if(unit == 'м'){
// 	alert(length + ' м');
// }
// else if (unit !== "м") {
// 	alert("Неправильні одиниці вимірювання");
// 	length = undefined;
// }

// 7
// let q = prompt('Бажаєте дізнатись свою ідеальну вагу? (так/ні)');
// if(q == 'так'){
// 	let height = prompt('Введіть зріст');
// 	let b_year = prompt('Введіть рік народження');
// 	let idealWeight = (b_year < 1981) ? (height - 100) : (height - 90);
// 	alert(`Ваша ідеальна вага: ${idealWeight} кг`);
// }
// else {
// 	alert("Дякую за увагу!");
// }

// 8
// let number = prompt('Enter number');
// if (number % 3 === 0) {
// 	alert(`${number} кратне 3`);
// }
// else if (number % 5 === 0) {
// 	alert(`${number} кратне 5`);
// }
// else if (number % 7 === 0) {
// 	alert(`${number} кратне 7`);
// }
// else if (number % 9 === 0) {
// 	alert(`${number} кратне 9`);
// }
// else if (number % 11 === 0) {
// 	alert(`${number} кратне 11`);
// }
// else {
// 	alert(`${number} не є кратним жодному з перелічених чисел`);
// }

// 9
// let number = prompt('Enter number');
// if (number % 2 === 0) {
// 	alert(`${number} кратне 2`);
// }
// else{
// 	alert(`${number} не кратне 2`);
// } 

// 10
// let a = prompt("Введіть перший катет:");
// let b = prompt("Введіть другий катет:");
// let c = prompt("Введіть гіпотенузу:");
// if (a ** 2 + b ** 2 === c ** 2 || b ** 2 + c ** 2 === a ** 2 || a ** 2 + c ** 2 === b ** 2) {
//    alert("Трикутник є прямокутним");
// }
// else {
//    alert("Трикутник не є прямокутним");
// }

// 11
// let number = prompt("Введіть число:");
// let result = number ** 3;
// alert(`Результат: ${result}`);