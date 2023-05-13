// Завдання 2:
// Задано масив з числовими значеннями 45,-65,48,52,-45,-78,-96,25,14,25,45;
// В масиві визначити добуток елементів з парними номерами.
// Знайти суму елементів, розташованих між найбільшим та найменшим елементами.

let numbers = [45,-65,48,52,-45,-78,-96,25,14,25,45];
let mult = 1;

for (let i = 0; i < numbers.length; i++) {
    if(i % 2 == 0){
        mult *= numbers[i];
    }
}
console.log(numbers);
console.log(mult);

let min = numbers[0];
let max = numbers[0];
let idMin = 0, idMax = 0;
for(let i = 0; i < numbers.length; i++){
    if(min > numbers[i]){
        min = numbers[i];
        idMin = i;
    }
    if(max < numbers[i]){
        max = numbers[i];
        idMax = i;
    }
}
let start = idMin >= idMax ? idMax : idMin;
let end = idMin >= idMax ? idMin : idMax;
let sum = 0;
for(let i = start+1; i < end; i++){
    sum += numbers[i];
}
console.log(sum);

// Завдання 3:
// Задано масив з числовими значеннями 45,65,48,52,45,-78,-96,25,14,25,45;
// В одновимірному масиві визначити номер максимального елемента масива.
// Визначити суму елементів, розташованих до першого від’ємного елемента.

// Завдання 3:
let num = [45,65,48,52,45,-78,-96,25,14,25,45];

let max = num[0];
let idMax = 0;
for(let i = 0; i < num.length; i++){
    if(max < num[i]){
        max = num[i];
        idMax = i;
    }
}
console.log('Max element', max, ' - element id', idMax);
let sum = 0;
for(let i = 0; i < num.length; i++){
    if(num[i] < 0){
        break;
    }
    sum += num[i];
}
console.log('Sum', sum);
