let btn1 = document.querySelector('button:first-of-type');
let btn2 = document.querySelector('button:nth-of-type(2)');
let btn3 = document.querySelector('button:nth-of-type(3)');
let btn4 = document.querySelector('button:last-of-type');
let parag = document.querySelector('p');
btn1.addEventListener('click', () => {
    parag.style.backgroundColor = 'rgb(195, 235, 222)';
    parag.style.padding = '10px';
    parag.style.border = 'solid 2px lightblue';
    parag.style.fontSize = '20px';
    parag.style.fontStyle = 'italic';
    parag.style.fontWeigth = '700';
})