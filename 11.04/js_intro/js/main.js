// 1
// let name = prompt('Enter your name');
// alert(`Привіт, ${name} !`);

// 2
// let birthYear = prompt('Enter year when you born');
// const year_now = 2023;
// alert(year_now - birthYear);

// 3
// let length = prompt('Enter length');
// length = length * 4;
// alert(`The perimeter of the square is ${length}`);

// 4
// let r = prompt('Enter radius');
// const pi = 3.14;
// let area;
// area = pi * r * r;
// alert(`The area of the circle is ${area}`);

// 5
// let distance = prompt('Enter distance');
// let time = prompt('Enter time');
// let speed;
// speed = distance / time;
// alert(`To cover a distance of ${distance}km in ${time}h, you need to move with speed ${speed}`);

// 6
// let dol = parseFloat(prompt('Enter dollars'));
// const euro = 0.91;
// alert(dol * euro , 'euro');

// 7
// let gb = prompt('Введіть обсяг флешки у ГБ: ');
// let gb_in_mb = gb * 1024;
// const mb = 820;
// let num_of_files;
// num_of_files = parseInt(gb_in_mb / mb);
// alert(`На флешці об'ємом ${gb} ГБ (${gb_in_mb} МБ) вміститься ${num_of_files} файлів розміром 820 МБ.`);

// 8
// let sum = prompt('Enter amount of money');
// let chocolate = prompt('Enter the price of one chocolate bar');
// let amount_of_chocolate;
// amount_of_chocolate = parseInt(sum / chocolate);
// let change;
// change = sum % chocolate;
// alert(`You can buy ${amount_of_chocolate} chocolate bar and you will have ${change} change`);

// 9
// let num = prompt("Введіть трьохзначне число:");
// let firstDigit = num % 10;
// let secondDigit = Math.floor((num / 10) % 10);
// let thirdDigit = Math.floor(num / 100);
// let reversedNum = firstDigit * 100 + secondDigit * 10 + thirdDigit;
// alert(`Паліндром числа ${num}: ${reversedNum}`);

// 10
// let num = parseInt(prompt("Введіть ціле число:"));
// let isEven = num % 2 === 0;
// let result = isEven ? "Парне" : "Непарне";
// alert(`Число є ${result}`);