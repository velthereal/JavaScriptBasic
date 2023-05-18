// let email = 'blabla@gmai@l.com';

// let index = email.indexOf('@');
// console.log(index);
// index = email.indexOf('com');
// console.log(index);

// let index = email.indexOf('@');
// if(index == -1){
// 	console.log('not found');
// } else {
// 	while(index != -1){
// 		console.log(index);
// 		index = email.indexOf('@', index + 1);
// 	}
// }

// let index = email.lastIndexOf('@');
// if(index == -1){
// 	console.log('not found');
// } else {
// 	while(index != -1){
// 		console.log(index);
// 		index = email.lastIndexOf('@', index - 1);
// 	}
// }

// let find = (str, char) =>{
// 	for(let i = 0; i < str.length; i++){
// 		if(str[i] == char) return i;
// 	}
// 	return -1;
// }
// if(find(email, '@') != -1){
// 	console.log('ok');
// } else {
// 	console.log('not ok');
// }
// console.log(find(email, '@'));
// str = ['H', 'y', 'p', 'e', 'r']
// for(let i = 0; i < str.length; i++){
// 	document.write(`${str[i]} <br>`);
// }

// let str = 'Hyper Text Murkup Language';
// str += ' text text text'; // str = str + ''
// let newStr = str.substring(0,10);

// console.log(str);
// console.log(newStr);

// let email = 'dashakonopelco@gmail.com';
// let start = email.indexOf('@');
// let end = email.indexOf('.',start);
// console.log(email.substring(start+1,end));

console.log(Math.PI);
console.log(Math.SQRT1_2);

let min = 10, max = 20;
let number1 = Math.random() * (max - min + 1) + min;
console.log(number1); 
console.log('Random :: ' + Math.floor(number1)); // 5.7 => 5
console.log('Random :: ' + Math.round(number1)); // 5.7 => 6
