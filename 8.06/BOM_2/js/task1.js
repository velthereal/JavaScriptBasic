let up = document.querySelector('#up');
let down = document.querySelector('#down');
let p = document.querySelector('p');

let number = 0;
console.log(number);

up.addEventListener('click', () => {
   number++;
   console.log(number);
   p.innerHTML = number;
})
down.addEventListener('click', () => {
   number--;
   console.log(number);
   p.innerHTML = number;
})