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
// function symbols(str){
// 	let vowels = ['а', 'е', 'и', 'і', 'є', 'ї', 'о', 'у', 'ю', 'я'];
// 	let count = 0;
// 	for(let i = 0; i < str.length; i++){
// 		let char = str[i].toLowerCase();
// 		for(let j = 0; j < vowels.length; j++){
// 			if(char == vowels[j]){
// 				count++;
// 				break;
// 			}
// 		}
// 	}
// 	return count;
// }
// let word = 'функція';
// console.log(symbols(word));

// 4 Напишіть функцію для перевірки спаму в переданому рядку. Функція повертає true, якщо рядок містить спам. Спамом вважати наступні слова: 100% безкоштовно, збільшення продажів, тільки сьогодні, не видаляйте, ххх. Функція має бути нечутливою до регістру
// function message(text){
// 	let spam = ['100% безкоштовно', 'збільшення продажів', 'тільки сьогодні', 'не видаляйте'];
// 	text = text.toLowerCase();
// 	for(let i = 0; i < spam.length; i++){
// 		if(text.indexOf(spam[i].toLowerCase()) != -1){
// 			return true;
// 		}
// 	}
// 	return false;
// }
// let texts = 'якийсь тект непонятно який без спаму';
// console.log(message(texts));

// 5 Напишіть функцію скорочення рядка. Функція приймає рядок та його максимальну довжину. Якщо довжина рядка більша, ніж максимальна, необхідно відкинути зайві символи, додавши замість них трикрапку. Наприклад: truncate("Hello, world!", 8) має повернути "Hello..."

// function string(str, maxLength){
// 	if(str.length <= maxLength){
// 		return str;
// 	} else {
// 		return str.slice(0, maxLength) + '...';
// 	}
// }
// let text = 'My name is Valeriia';
// console.log(string(text, 18));
// console.log(text.length);

// 6 Напишіть функцію, яка перевіряє, чи є переданий рядок паліндромом
// function string(str){
// 	let cleanStr = '';
// 	for(let i = 0; i < str.length; i++){
// 		let char = str[i].toLowerCase();
// 		cleanStr += char;
// 	}
// 	let reversedStr = '';
// 	for(let j = cleanStr.length -1; j >= 0; j--){
// 		reversedStr += cleanStr[j];
// 	}
// 	return cleanStr == reversedStr;
// }
// let something = 'mom';
// console.log(string(something));

// 7 Напишіть функцію, яка підраховує кількість слів у реченні
// function wordsCounter(sentence){
// 	let words = sentence.split(' ');
// 	return words.length;
// }
// let sentence = 'I love my mother and father';
// console.log(wordsCounter(sentence));

// 8 Напишіть функцію, яка повертає найдовше слово з речення
// function words(sentence){
// 	let wordsInSentence = sentence.split(' ');
// 	let max = wordsInSentence[0];
// 	for(let i = 0; i < wordsInSentence.length; i++){
// 		if(max.length < wordsInSentence[i].length){
// 			max = wordsInSentence[i];
// 		}
// 	}
// 	return max;
// }
// let sentence = 'I love my alaminute and dhdslkkjsfkzk';
// console.log(words(sentence));

// 9 Напишіть функцію, яка підраховує середню довжину слова у реченні
// function words(sentence){
// 	let wordsInSentence = sentence.split(' ');
// 	let totalLength = 0;
// 	for(let i = 0; i < wordsInSentence.length; i++){
// 		totalLength += wordsInSentence[i].length;
// 	}
// 	return totalLength / wordsInSentence.length;
// }
// let sentence = 'I love my minute';
// console.log(words(sentence));

// 10 Напишіть функцію, яка приймає рядок і символ і виводить індекси, за якими знаходиться цей символ у рядку. Також виведіть, скільки разів зустрічається цей символ у рядку
// function string(str, char){
// 	let indexes = [];
// 	let counter = 0;
// 	let index = str.indexOf(char);
// 	while(index != -1){
// 		indexes.push(index);
// 		counter++;
// 		index = str.indexOf(char, index + 1);
// 	}
// 	console.log("Індекси, за якими знаходиться символ", char, "у рядку:", indexes);
//   	console.log("Кількість зустрічей символу", char, "у рядку:", counter);
// }
// let smth = 'frontent development';
// let symbol = 'o';
// console.log(string(smth, symbol));