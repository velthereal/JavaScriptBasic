// task 1
let randomNumber = document.querySelector('.number');

document.querySelector('button').addEventListener('click', () => {
    randomNumber.textContent = Math.round(Math.random()* 101);
});

// task 3
// let p = document.querySelector('p');
// document.querySelector('button').addEventListener('click', () => {
//     p.classList.toggle('hideAndShow');
// });

// task 5
// let div = document.querySelector('div');
// document.querySelector('button').addEventListener('click', () => {
//     div.remove();
// })