// Завдання 1: Кожне натуральне число n,n>1, однозначно розкладається у добуток простих помножувачів, наприклад, 13 = 13, 105 = 3 * 5 * 7, 72 = 2 * 2 * 2 * 3 * 3. Розкласти натуральне число на прості множники (факторизація числа)

// let n = 13;
// let divisor = 2;
// while(n > 1){
// 	if(n % divisor == 0){
// 		console.log(divisor);
// 		document.write(divisor + ' ');
// 		n /= divisor;
// 	} else {
// 		divisor++;
// 	}
// }

// Завдання 2: Знайдіть усі чотиризначні числа, сума цифр кожного з яких дорівнює 15

for(let num = 1000; num <= 9999; num++){
	let sum = 0;
	let tmp = num;
	while(tmp > 0){
		sum += tmp % 10; 
		tmp = parseInt(tmp / 10);
	}
	if(sum == 15){
		console.log(num);
	}
}