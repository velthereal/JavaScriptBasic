// let first_name = 'Ivan';
// let last_name = 'Ivanov';
// let date = '10.11.2001';
// let email = 'blabla.gmail.com';

// let arr = [1,2,3];
// arr.length

// let user = new Object(); //empty
// key : value

// let key = 'rating'//prompt('Enter name key');
// let value = 11//prompt('Enter value key');
// let user = {
//     name:'Ivan',
//     'last name':'Bondar',
//     date:'10.08.2005',
//     email:'itstep@academy.org',
//     isAdmin:false,
//     age:18,
//     city:undefined,
//     if:null,
//     // [key]:value,
// }
// user.checkAge = () => {
//     true_year = new Date().getFullYear() - user.date.split('.')[2];
//     console.log(true_year);
//     if(true_year < 18) return false;
//     if(user.date.split('.')[1] > new Date().getMonth() + 1) {
//         return false;
//     }
//     if(user.date.split('.')[0] > new Date().getDate()) return false;
//     return true;
// }
// user.checkAge();

// console.log(user);
// console.log(user.name);
// console.log(user["last name"]);
// console.log(user.date);
// console.log(user.email);
// console.log(user.isAdmin);
// console.log(user.age);
// console.log(user.city);
// console.log(user.if);
// console.log(user.key);

// user.average = 10.2;
// console.log(user);
// user.average = 11;
// console.log(user);
// if(user.average == undefined) {
//     console.log(false)
// }
// console.log(city in user);
// console.log(name in user);
// console.log(average in user);

// for (const key in user) {
//     console.log(key, ' : ', user[key]);
// }

// let a = 5;
// let b = a;
// a = 22;
// console.log('a :: ', a);
// console.log('b :: ', b);

// let user2 = user;
// user2.name = 'Dima';
// console.log('user 1', user);
// console.log('user 2', user2);

// let user2 = {};

// for (const key in user) {
//     user2[key] = user[key];
// }

// user2.name = 'Dima';
// console.log('user 1', user);
// console.log('user 2', user2);

// let createUser = (name, lastname, age) => {
//     let tmp = {
//         name,
//         lastname,
//         age
//     }
//     return tmp;
// }
// let user_1 = createUser('Ivan', 'Poluvko', 19);
// console.log(user_1);
// let user_2 = createUser('Petro', 'Savko', 22);
// console.log(user_2);