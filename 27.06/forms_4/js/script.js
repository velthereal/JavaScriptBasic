// let form = document.forms[0];

// form.addEventListener('submit', (e) => {
//    // if(form.name.value.length == 0){
//    //    form.name.style.borderColor = 'red';
//    //    e.preventDefault();
//    // }

//    // if(form.email.value.indexOf('@') == -1){
//    //    form.email.style.borderColor = 'red';
//    //    e.preventDefault();
//    // }
   
//    if(!checkPassOfDigit(form.password.value)) {
//       form.password.style.borderColor = 'red';
//       e.preventDefault();
//    }
// })

// function checkPassOfDigit(pass){
//    for(let i = 0; i < 10; i++){
//       if(pass.indexOf(i) != -1) 
//          return true;
//    }
//    return false;
// }

// function checkPassOfDigit(pass){
//    for(let i = 0; i < 10; i++){
//       if(pass.indexOf(i) != -1) 
//          return true;
//    }
//    return false;
// }

let template = /1/;

let line_1 = '123 -';
let line_2 = '234 ipsum';
let line_3 = 'Lorem ipsum 21 doLor';

console.log('Exemple', template);
console.log(line_1, '--->', template.test(line_1));
console.log(line_2, '--->', template.test(line_2));
console.log(line_3, '--->', template.test(line_3));

// template = /12/;
// console.log('Exemple', template);
// console.log(line_1, '--->', template.test(line_1));
// console.log(line_2, '--->', template.test(line_2));
// console.log(line_3, '--->', template.test(line_3));

// template = /[12]/;
// console.log('Exemple', template);
// console.log(line_1, '--->', template.test(line_1));
// console.log(line_2, '--->', template.test(line_2));
// console.log(line_3, '--->', template.test(line_3));

// template = /[ld]/;
// console.log('Exemple', template);
// console.log(line_1, '--->', template.test(line_1));
// console.log(line_2, '--->', template.test(line_2));
// console.log(line_3, '--->', template.test(line_3));

// template = /[0-9]/;
// console.log('Exemple', template);
// console.log(line_1, '--->', template.test(line_1));
// console.log(line_2, '--->', template.test(line_2));
// console.log(line_3, '--->', template.test(line_3));

// template = /[a-z]/;
// console.log('Exemple', template);
// console.log(line_1, '--->', template.test(line_1));
// console.log(line_2, '--->', template.test(line_2));
// console.log(line_3, '--->', template.test(line_3));

// template = /[A-Z]/;
// console.log('Exemple', template);
// console.log(line_1, '--->', template.test(line_1));
// console.log(line_2, '--->', template.test(line_2));
// console.log(line_3, '--->', template.test(line_3));

template = /\D/;
console.log('Exemple', template);
console.log(line_1, '--->', template.test(line_1));
console.log(line_2, '--->', template.test(line_2));
console.log(line_3, '--->', template.test(line_3));

template = /^1/; // на початку рядка
console.log('Exemple', template);
console.log(line_1, '--->', template.test(line_1));
console.log(line_2, '--->', template.test(line_2));
console.log(line_3, '--->', template.test(line_3));

template = /4$/; // в кінці рядка
console.log('Exemple', template);
console.log(line_1, '--->', template.test(line_1));
console.log(line_2, '--->', template.test(line_2));
console.log(line_3, '--->', template.test(line_3));

template = /[^234]/;
console.log('Exemple', template);
console.log(line_1, '--->', template.test(line_1));
console.log(line_2, '--->', template.test(line_2));
console.log(line_3, '--->', template.test(line_3));

template = /\W/; // спецсимволи
console.log('Exemple', template);
console.log(line_1, '--->', template.test(line_1));
console.log(line_2, '--->', template.test(line_2));
console.log(line_3, '--->', template.test(line_3));

template = /\D{2}/;
console.log('Exemple', template);
console.log(line_1, '--->', template.test(line_1));
console.log(line_2, '--->', template.test(line_2));
console.log(line_3, '--->', template.test(line_3));


template = /^\d+[!]/;
console.log('Exemple', template);
console.log(line_1, '--->', template.test(line_1));
console.log(line_2, '--->', template.test(line_2));
console.log(line_3, '--->', template.test(line_3));

let phone = '+380956523654';

template = /^\+[0-9]{12}$/
console.log(phone, template.test(phone));

let str = 'http';

template = /https?/;
console.log(str, ' --> ', template.test(str));

template = /[0-9]{3}/g;
let str_1 = '123abc456qwer114';
console.log(str_1, ' ---> ', template.exec(str_1));


line_3 = '652 - 536 - 589';
console.log(line_3, ' ---> ', line_3.replace('-', ''));
console.log(line_3, ' ---> ', line_3.replace(/[- ]/g, ''));

console.log(line_3, ' ---> ', line_3.split(/\D+/));

template = /\d+/g;
console.log(line_3, ' ---> ', line_3.match(template));