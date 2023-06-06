// 1.Створіть масив із 10 випадкових чисел і напишіть кілька функцій для роботи з ним
// let numbers = [71, 11, 5, 8, 14, 1, 2, 3, 4, 5];
// 1.1 Функція приймає масив і виводить його на екран
// function nums(num){
// 	for(let i = 0; i < num.length; i++){
// 		console.log(num[i]);
// 	}
// }
// nums(numbers);

// 1.2 Функція приймає масив і виводить лише парні елементи
// function nums(num){
// 	let even = [];
// 	for(let i = 0; i < num.length; i++){
// 		if(num[i] % 2 == 0){
// 			even.push(num[i]);
// 		}
// 	}
// 	return even;
// }
// console.log(nums(numbers));

// 1.3 Функція приймає масив і повертає суму всіх елементів масиву
// function nums(num){
// 	let sum = 0;
// 	for(let i = 0; i < num.length; i++){
// 		sum += num[i];
// 	}
// 	return sum;
// }
// console.log(nums(numbers));

// 1.4 Функція приймає масив і повертає його максимальний елемент
// function nums(num){
// 	let max = num[0];
// 	for(let i = 0; i < num.length; i++){
// 		if(max < num[i]) {
// 			max = num[i];
// 		}
// 	}
// 	return max;
// }
// console.log(nums(numbers));

// 1.5 Функція додавання нового елемента в масив за вказаним індексом
// function nums(num, index, element){
// 	num[index] = element;
// 	return num;
// }
// console.log(nums(numbers, 2, 111));

// 1.6 Функція видалення елемента з масиву за вказаним індексом
// function nums(num, index){
// 	num.splice(index, 1);
// 	return num;
// }
// console.log(nums(numbers, 0));

// 2 Створіть ще один масив із 5 випадкових чисел і написати наступні функції
// let another = [1, 2, 3, 4, 5];
// 2.1 Функція приймає 2 масиви і повертає новий масив, в якому зібрані всі елементи двох масивів без повторень
// function nums(one, two){
// 	for(let i = 0; i < one.length; i++){
// 		for(let j = 0; j < two.length; j++){
// 			if(one[i] == two[j]) {
// 				two.splice(j, 1);
// 			}
// 		}
// 	}
// 	return one.concat(two);
// }
// console.log(nums(numbers, another));

// 2.2 Функція приймає 2 масиви і повертає новий масив, у якому зібрані загальні елементи (тобто елементи, які трапляються у першому та другому масивах) без повторень
// function nums(one, two){
// 	let something = [];
// 	for(let i = 0; i < one.length; i++){
// 		let found = false;
// 		for(let j = 0; j < something.length; j++){
// 			if(one[i] == something[j]){
// 				found = true;
// 				break;
// 			}
// 		}
// 		if(!found){
// 			for(let j = 0; j < two.length; j++){
// 				if(one[i] == two[j]) {
// 					something.push(one[i]);
// 					break;
// 				}
// 			}
// 		}
// 	}
// 	return something;
// }
// console.log(nums(numbers, another))

// 2.3 Функція приймає 2 масиви і повертає новий масив, в якому зібрані всі елементи з першого масиву, яких немає у другому масиві
// function nums(one, two){
// 	let newNumbers = [];
// 	for (let i = 0; i < one.length; i++) {
// 		let element = one[i];
// 		let found = false;
// 		for(let j = 0; j < two.length; j++){
// 			if(element == two[j]){
// 				found = true;
// 				break;
// 			}
// 		}
// 		if(!found){
// 			newNumbers.push(element);
// 		}
// 	}
// 	return newNumbers;
// }
// console.log(nums(numbers, another))

// 3 Створіть масив фруктів та відсортуйте його за алфавітом Напишіть наступні функції
let fruits = ['apple', 'orange', 'wathermelon', 'melon', 'tangerine', 'plum', 'peach', 'mango', 'cherry'];
let sortFruits = fruits.sort();
console.log(sortFruits);

// 3.1 Виведення на екран за допомогою document.write() у вигляді списку (за допомогою тегів ul і li)
// function fruit(str){
// 	document.write(`<ul>`)
// 	for(let i = 0; i < str.length; i++){
// 		document.write(`<li>${str[i]}</li>`)
// 	}
// 	document.write(`</ul>`)
// }
// console.log(fruit(sortFruits))

// 3.2 Пошук фрукта в масиві. Функція приймає назву фрукта і повертає індекс знайденого елемента або -1, якщо не знайдено. Пошук повинен бути нерегістрозалежний
function fruit(str, name){;
	for(let i = 0; i < str.length; i++){
		if(str[i].toLowerCase() == name.toLowerCase()){
			return i;
		}
	}
	return -1;
}
let fruitName = 'MELON';
console.log(fruit(sortFruits, fruitName));
