// 1
// let number = prompt('Enter number');
// if (number > 0) {
// 	document.write("Це додатнє число");
// }
// else if (number < 0) {
// 	document.write("Це від'ємне число");
// }
// else {
// 	document.write("Це число нуль");
// }

// 2
// let age = prompt("Введіть свій вік:");
// if (age >= 0 && age <= 120) {
//    document.write("Ваш вік: " + age);
// }
// else {
//    document.write("Ви ввели некоректні дані");
// }

// 3
// let number = prompt("Введіть число:");
// let finNum;
// if (number < 0) {
// 	finNum = -number;
// }
// else {
// 	finNum = number;
// }
// document.write("Модуль дорівнює " + finNum);

// 4
// let hours = parseInt(prompt("Введіть години"));
// let minutes = parseInt(prompt("Введіть хвилини"));
// let seconds = parseInt(prompt("Введіть секунди"));
// if (hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59 && seconds >= 0 && seconds <= 59) {
//   document.write(hours + ":" + minutes + ":" + seconds);
// }
// else {
// 	document.write("Некоректні дані");
// }

// 5
// let x = parseFloat(prompt("Введіть координату x"));
// let y = parseFloat(prompt("Введіть координату y"));
// if (x == 0 && y == 0) {
//   document.write("Точка знаходиться на початку координат");
// }
// else if (x == 0) {
//    document.write("Точка знаходиться на oсі Y");
// }
// else if (y == 0) {
//    document.write("Точка знаходиться на oсі X");
// }
// else if (x > 0 && y > 0) {
//    document.write("Точка знаходиться в першій чверті");
// }
// else if (x < 0 && y > 0) {
//    document.write("Точка знаходиться в другій чверті");
// }
// else if (x < 0 && y < 0) {
//    document.write("Точка знаходиться в третій чверті");
// }
// else {
//    document.write("Точка знаходиться в четвертій чверті");
// }