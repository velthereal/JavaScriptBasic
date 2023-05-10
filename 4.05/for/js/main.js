// let i;
// for(i = 0; i < 10;){
// 	i++;
// 	document.write(i + ' ');
// }
// alert(i);

// for (let i = 0; i < 10; i++) {
// 	let num = +prompt('Enter number');
// 	if(num % 2 == 0)
// 		continue;
// 	document.write(`${num} `);
// }

// 1
// let num = +prompt('Enter number');
// let flag = false;
// let it = 0;
// for (let i = 2; i <= num / 2; i++) {
// 	it++;
// 	if(num % i == 0) {
// 		flag = true;
// 		break;
// 	}
// }
// if(flag){
// 	console.log('Is Prime');
// } else {
// 	console.log('Is simple');
// }
// console.log(it);

// FOR
// 1
// let num = +prompt('Enter number');
// for(let i = 1; i <= 100; i++){
// 	if(i % num == 0){
// 		document.write(`${i} `);
// 	}
// }

// 2 
// let num_1 = +prompt('Enter number');
// let num_2 = +prompt('Enter number');
// for(let i = num_1; i <= num_2; i+=4){
// 	document.write(`${i} `);
// }

// 3
// let count = 0;
// for(let i = 100; i <= 999; i++){
// 	let a = parseInt(i / 100);
// 	let b = parseInt((i / 10) % 10);
// 	let c = i % 10;
// 	if(a == b || b == c || c == a){
// 		count++;
// 	}
// }
// console.log(count);

// // 4
// let flag = 0;
// for(let i = 100; i <= 999; i++){
// 	let a = parseInt(i / 100);
// 	let b = parseInt((i / 10) % 10);
// 	let c = i % 10;
// 	if(a != b || b != c || c != a){
// 		flag++;
// 	}
// }
// console.log(flag);

// 5
// document.write('<table>')

// for(let q = 0; q < 8; q+=4){
// 	document.write('<tr>')
// 	for(let j = 2; j < 6; j++){
// 		document.write('<td>')
// 		for(let i = 1; i <= 10; i++){
// 			document.write(`${j + q} x ${i} = ${(j + q) * i} <br>`)
// 		}
// 		document.write('</td>')
// 	}
// 	document.write('</tr>')
// }
// document.write('</table>')