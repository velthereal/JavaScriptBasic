// 1 Напишіть функцію, яка приймає 2 рядки та порівнює їх довжину. Функція повертає 1, якщо в першому рядку більше символів, ніж у другому; -1 – якщо у другому більше символів, ніж у першому; 0 – якщо рядки однакової довжини

// function str(str1, str2){
// 	if(str1.length > str2.length) {
// 		return 1;
// 	} else if(str1.length < str2.length){
// 		return -1;
// 	} else {
// 		return 0;
// 	}
// }
// let string_1 = 'Mother';
// let string_2 = 'Father';
// console.log(str(string_1, string_2));

// 2 Напишіть функцію, яка переводить у верхній регістр перший символ переданого рядка
// function string(str){
// 	return str[0].toUpperCase() + str.slice(1);
// }
// let word = 'world';
// console.log(string(word));

// 3 Напишіть функцію, яка підраховує кількість голосних літер у переданому рядку
function symbols(str){
	let vowels = ['а', 'е', 'и', 'і', 'є', 'ї', 'о', 'у', 'ю', 'я'];
	let count = 0;
	for(let i = 0; i < str.length; i++){
		let char = str[i].toLowerCase();
		for(let j = 0; j < vowels.length; j++){
			if(char == vowels[j]){
				count++;
				break;
			}
		}
	}
	return count;
}
let word = 'функція';
console.log(symbols(word));