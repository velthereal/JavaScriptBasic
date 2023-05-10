// let i = 0;
// while(i < 10){
// 	i++;
// 	document.write(`<h3> ${i}) Hello </h3>`);
// }

// task 1
// let i = 0;
// document.write(`<p>`);
// while(i <= 10){
// 	document.write(`${i} `);
// 	i++;
// }
// document.write(`</p>`);

// task 2
// let i = 0;
// document.write(`<p>`);
// while(i <= 20){
//  way 1
// if(i % 2 == 0)
//document.write(`${i} `);
//i++;
// way 2
// 	document.write(`${i} `);
// 	i+= 2;
// }
// document.write(`</p>`);

// task 3
// let i = 10;
// document.write(`<p>`);
// while(i >= 0){
// 	document.write(`${i} `);
// 	i--;
// }
// document.write(`</p>`);

// task 4
// let i = 10;
// while(i >= 0){
// 	alert(i);
// 	i--;
// }
// document.body.style.backgroundImage = "url(https://media.tenor.com/9blGWJaDlI4AAAAC/%D0%BF%D1%80%D0%B8%D0%B2%D0%B5%D1%82-%D0%B7%D0%B0%D0%B9%D1%87%D0%B8%D0%BA.gif)";

// task 5
// let answer;
// do{
// 	answer = +prompt(" 2 + 2 = ?");
// }while(answer != 4);

//practice while
// task 1
// let num = +prompt('Enter number');
// while(num >= 0){
// 	document.write(`# `);
// 	num++;
// }

// task 2
// let num = +prompt('Enter number');
// if(num > 0){
// 	while(num > 0){
// 		document.write(`${num} `);
// 		num--;
// 	}
// }else{
// 	while(num < 0){
// 		document.write(`${num} `);
// 		num++;
// 	}
// }

// task 3
// let num = +prompt('Enter number');
// let pow = +prompt('Enter power');
// let res = 1;
// let i = 0;
// while (i < pow) {
// 	res = res * num;
// 	i++;
// }
// document.write(`${num}^${pow} = ${res}`);

// task 4
// let first = +prompt('Enter number');
// let second = +prompt('Enter number');
// let lower = first < second ? first : second;
// let i = 1;
// while (i <= lower) {
// 	if(first % i == 0 && second % i == 0){
// 		document.write(`${i} `);
// 	}
// 	i++;
// }

// task 5
// let num = +prompt('Enter number');
// if(num == 0 || num == 1){
// 	document.write(`1 `);
// }
// else{
// 	let i = 2;
// 	let res = 1;
// 	while(i <= num){
// 		res *= i;
// 		i++;
// 	}
// 	document.write(`${res}`);
// }

//practice do while
// task 1
// let answer;
// let counter = 0;
// do{
// 	answer = +prompt(" 2 + 2 * 2 = ?");
// 	counter++;
// }while(answer != 6);
// document.write(`Answer ${answer}`);
// document.write(`${counter}`);

// task 2
// let num = 1000;
// let counter = 0;
// do{
// 	num /= 2;
// 	counter++;
// }while(num > 50);
// document.write(`Number ${num} --> ${counter}`);

