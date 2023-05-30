// let p = document.querySelector('p');

// // let flag = false;
// let div = document.createElement('div');
// div.classList.add('done');
// div.textContent = 'ccusantium explicabo eos neque nam. Quo veritatis, quam distinctio amet laudantium ipsam officia sunt dolorum minima excepturi';
// console.log(div);
// p.addEventListener('click', () => {
//     document.querySelector('body').insertAdjacentElement('afterbegin' , div);

//     p.remove();
//     // console.log(p.textContent);
//     // p.textContent = 'Hyper Text <b> Mupkup </b> Language';

//     // console.log(p.innerText);
//     // console.log(p.innerHTML);

//     // p.innerHTML = 'Hyper Text <b> Mupkup </b> Language';
//     // p.className += ' add';
//     // p.classList.toggle('done');

//     // if(p.classList.contains('done')){
//     //     p.classList.remove('done');
//     // } else {
//     //     p.classList.add('done');
//     // } // як що є класм видаляєжмо

//     //console.log(p.classList);
//     // if(!p.classList.contains('done')){
//     //     p.classList.add('done');
//     //     //flag = true;
//     // } else {
//     //     p.classList.remove('done');
//     //    // flag = false;
//     // }
//     // // p.classList.add('done');
//     // console.log(p.classlist);
//     // if(!flag){
//     //     p.style.color = '#fff';
//     //     p.style.fontSize = '35px';
//     //     p.style.fontStyle = 'italic';
//     //     p.style.backgroundColor = 'rgba(0,0,0,.7)';

//     //     flag = true;
//     // } else {
//     //     p.style.color = '#000';
//     //     p.style.fontSize = '14px';
//     //     p.style.fontStyle = 'normal';
//     //     p.style.backgroundColor = '#fff';

//     //     flag = false;
//     // }
// });

let blue = document.querySelector('.blue');
let red = document.querySelector('.red');
let yellow = document.querySelector('.yellow');

blue.addEventListener('click', () => console.log('Blue'));
red.addEventListener('click', (event) => {
    event.stopPropagation();
    console.log('Red');
});
yellow.addEventListener('mouseenter', (event) =>{ 
    // event.stopPropagation();
    // // console.log(event);
    // console.log('Yellow');

    yellow.style.backgroundColor = 'purple';
});
yellow.addEventListener('mouseleave', () =>{ 
    yellow.style.backgroundColor = 'yellow';
});
yellow.addEventListener('mousedown', () =>{ 
    yellow.textContent = 'Mouse Down';
});
yellow.addEventListener('mouseup', () =>{ 
    yellow.textContent = 'Mouse Up';
});
yellow.addEventListener('contextmenu', (event) =>{ 
    event.preventDefault();
    yellow.textContent = 'Context Menu';
});
document.querySelector('a').addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e);
});
// document.body.addEventListener('mousemove', (event) => {
//     let x = event.clientX;
//     let y = event.clientY;
//     yellow.textContent = `X = ${x}; Y = ${y}`;
//     yellow.style.top = `${y}px`;
//     yellow.style.left = `${x}px`;
// });