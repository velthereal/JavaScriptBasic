// task 1
// {
// 	let num = +prompt('Enter number');
// 	let i = 0;
// 	document.write(`<p style="font-size:24px;">`);
// 	while (num >= i) {
// 		document.write(`${i} `);
// 		i++;
// 	}
// 	document.write(`</p>`);
// }

// task 2
// {
// 	let firstNumber = +prompt('Enter first number');
// 	let secondNumber = +prompt('Enter second number'); 
// 	if(firstNumber > secondNumber){
// 		let tmp = firstNumber;
// 		firstNumber = secondNumber;
// 		secondNumber = tmp;
// 	}
// 	// всі числа діапазону
// 	while(firstNumber <= secondNumber){
// 		document.write(`${firstNumber} `);
// 		firstNumber++;
// 	}
// 	// парні
// 	while(firstNumber <= secondNumber){
// 		if(firstNumber % 2 == 0){
// 			document.write(`${firstNumber} `);
// 		}
// 		firstNumber++;
// 	}
// 	// непарні
// 	while(firstNumber <= secondNumber){
// 		if(firstNumber % 2 != 0){
// 			document.write(`${firstNumber} `);
// 		}
// 		firstNumber++;
// 	}
// 	// кратні семи
// 	while(firstNumber <= secondNumber){
// 		if(firstNumber % 7 == 0){
// 			document.write(`${firstNumber} `);
// 		}
// 		firstNumber++;
// 	}
// }

// task 3
// {
// 	let firstNumber = +prompt('Enter first number');
// 	let secondNumber = +prompt('Enter second number');
// 	let sum = 0;
// 	while(firstNumber <= secondNumber){
// 		sum += firstNumber;
// 		firstNumber++;
// 	}
// 	document.write(`${sum} `);
// }

// task 4
// {
// 	let number;
// 	let sum = 0;
// 	do{
// 		number = +prompt('Enter number');
// 		sum += number;
// 	} while(number != 0);
// 	document.write(`Result: ${sum} `);
// }