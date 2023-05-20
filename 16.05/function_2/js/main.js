// 1 Напишіть функцію, яка приймає 2 числа і повертає -1, якщо перше менше, ніж друге; 1 - якщо перше більше, ніж друге; 0 - якщо числа рівні
// function num(num1, num2){
// 	if(num2 > num1) return -1;
// 	if(num2 < num1) return 1;
// 	if(num1 == num2) return 0;
// }
// console.log(num(3, 3));

// 2 Напишіть функцію, яка вираховує факторіал переданого їй числа
// function num(num1){
// 	let mult = 1;
// 	for(let i = 2; i <= num1; i++){
// 		mult *= i;
// 	}
// 	return mult;
// }
// console.log(num(10));

// 3 Напишіть функцію, яка приймає три окремі цифри і перетворює їх на одне число. Наприклад: цифри 1, 4, 9 перетворяться на число 149
// function numbers(num1, num2, num3){
// 	return (num1*100)+(num2*10)+num3;
// }
// console.log(numbers(5,2,8));

// 4 Напишіть функцію, яка приймає довжину та ширину прямокутника і обчислює його площу. Якщо у функцію передали 1 параметр, вона вираховує площу квадрата
// function num(num1, num2){
// 	if(num2 == undefined){
// 		return num1 * num1
// 	} else {
// 		return num1 * num2;
// 	}
// }
// console.log(num(2));

// 5 Напишіть функцію, яка перевіряє, чи є передане їй число досконалим. Досконале число – це число, що дорівнює сумі всіх своїх власних дільників
function num(num1){
	let sum = 0;
	for(let i = 1; i <= num1 / 2; i++){
		if(num1 % i == 0) sum += i;
	}
	if(sum == num1){
		return true;
	} else {
		return false;
	}
}
console.log(num(28));