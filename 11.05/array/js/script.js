// 1
// let colors = ['red', 'blue', 'pink', 'yellow', 'purple', 'brown', 'green'];
// console.log(colors);

// document.write(`<h1>${colors[0]}</h1>`)
// document.write(`<h1>${colors[1]}</h1>`)
// document.write(`<h1>${colors[2]}</h1>`)
// for(let i = 0; i < colors.length; i++){
//     document.write(`<h1 style = "color: ${colors[i]}">${colors[i]}</h1>`);
//     document.write(`<h1 style = "color: ${colors[colors.length - 1 - i]}">${colors[i]}</h1>`)
// }

//2
// let colors = [];
// for(let i = 0; i < 10; i++){
//     colors[i] = i;
// }
// for(let i = 0; i < 10; i++){
//     document.write(colors[i] + '<br>');
// }
// console.log(colors);

// 3
// let number = new Array();
// console.log(number);
// number = new Array(10);
// console.log(number);
// number = new Array(10, 3, true, 'text');
// console.log(number);

// 4
// Задано масив з числовими значеннями 2,-5,-9,2,-4,5,34,-11,2,3,4,5,-6,9; В масиві визначити суму від’ємних елементів. Знайти добуток елементів, розташованих між найбільшим та найменшим елементами

// let number = [2,-5,-9,34,2,-4,5,-11,2,3,4,5,-6,9];
// let sum = 0;
// for (let i = 0; i < number.length; i++) {
//     if(number[i] < 0){
//         sum += number[i];
//     }
// }
// let min = number[0];
// let max = number[0];
// let idMin = 0, idMax = 0;
// for(let i = 0; i < number.length; i++){
//     if(min > number[i]){
//         min = number[i];
//         idMin = i;
//     }
//     if(max < number[i]){
//         max = number[i];
//         idMax = i;
//     }
// }
// let start = idMin >= idMax ? idMax : idMin;
// let end = idMin >= idMax ? idMin : idMax;
// let mult = 1;
// for(let i = start+1; i < end; i++){
//     mult *= number[i];
// }
// console.log(sum);
// console.log(number);
// console.log(min, '--', idMin);
// console.log(max, '--', idMax);
// console.log(mult);

// ======================================
let colors = ['red', 'blue', 'pink', 'yellow', 'purple', 'brown', 'green'];

console.log('Print' , colors);

colors.push('gold', 'lime'); //додає нові елементи в кінець масиву
console.log('Push' , colors);

colors.pop(); // видаляє елемент в кінці
console.log('Pop' , colors);

colors.unshift('lime', 'violet');
console.log('Unshift' , colors); // додає на початок

colors.shift();
console.log('Shift' , colors); // видаляє перший елемент

colors.splice(1, 0, 'black', 'white', 'cyan'); // (start, deleteCount, ...items)
console.log('Splice' , colors); // додає, видаляє елементи на певній позиції

let newMas = colors.slice(1, 5); // (start, end)
console.log('Slice' , newMas); // виділяє новий масив не включаючи останній елемент

newMas = colors.concat(['color1', 'color2'], [true, false], newMas);
console.log('Concat' , newMas); // додає до поточного масиву ще якісь елементи і масиви

document.write(newMas.join('<br>'));
console.log(newMas.join(' - ')); // додає символ між кожним елементом масиву, перетворює масив на рядок

let line = ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, voluptas!'.split(' '); // перетворює масив в рядок, роби кожен окремий елемент коли знайдеш символ який в дужках
console.log(line);
// let digit = '1, 2, 3 4, 5 6, 7, 8, 9, 9, 10'.split(',');
let digit = [1,22,36,1,4,58,2,78,1,2,4,11];
console.log(digit);

digit.sort();
console.log('Sort', digit); // сортує по порядку

digit.reverse();
console.log('Reverse', digit); // в зворотньому порядку