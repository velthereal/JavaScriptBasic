// let btn = document.getElementById('btnId');
// let allBtn = document.getElementsByClassName('btnClass');
// let list = document.getElementsByTagName('li');
// console.log(btn);
// console.log(allBtn);
// console.log(list);

// let btn = document.querySelector('hashtagbtnId');
// console.log(btn);
// let allBtn = document.querySelector('.btnClass');
// console.log(allBtn);
// let list = document.querySelectorAll('ul li:first-child');
// console.log(list);

// let btn = document.querySelector('button');
// let showMessege = () => {
//     alert('Hello World');
// }
// let text = document.querySelectorAll('p');
// btn.addEventListener('click', () => {
//     for(let i = 0; i < text.length; i++){
//         text[i].style.color = 'purple';
//         text[i].style.fontWeight = 'bold';
//         text[i].style.backgroundColor = 'pink';
//     }
// })

// // btn.addEventListener('click', showMessege);
// let flag = true; // true ----> Hello; false -----> Bye
// btn.addEventListener('click', ()=> {
//     // document.body.style.backgroundColor = 'violet';
//     // btn.innerText = 'Bye';
//     if(flag){
//         btn.innerText = 'Bye';
//         flag = false;
//     } else {
//         btn.innerText = 'Hello';
//         flag = true;
//     }
// })
// console.log(btn);

let openB = document.querySelector('button');
let closeB = document.querySelector('.block span');
let block = document.querySelector('.block');
openB.addEventListener('click', () => {
    block.style.height = '100vh';
});
closeB.addEventListener('click', () => {
    block.style.height = '0vh';
})