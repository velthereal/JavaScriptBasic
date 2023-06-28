let btn = document.querySelectorAll('section article button');
let buy = document.forms[0];
let title = document.querySelectorAll('section article h3');
let container = document.querySelector('.container');

let order = document.querySelector('.result article');
let orderWrapper = document.querySelector('.result');


for(let i = 0; i < btn.length; i++){
   btn[i].addEventListener('click', () => {
      buy.classList.remove('none');
      buy.bookName.value = title[i].textContent;

   });
}

let getInfoBuy = (form) => {
   const{bookName,quantity,nameUser,address,date,comment} = form;
   return {
      bookName: bookName.value,
      quantity: quantity.value,
      nameUser: nameUser.value,
      address: address.value,
      date: date.value,
   	comment: comment.value,
   }
}
let result = (obj) => {
   const{bookName,nameUser,address,date} = obj;
   let p = document.createElement('p');
   p.textContent = `${nameUser}, thanks for order!`;
   order.insertAdjacentElement('beforeend', p);
   let p2 = document.createElement('p');
   p2.textContent = `Book "${bookName}" will delivered on ${date} to ${address}`;
   order.insertAdjacentElement('beforeend', p2);
   orderWrapper.classList.remove('none');
}
buy.buy.addEventListener('click', (e) => {
   e.preventDefault();
   res = getInfoBuy(buy);
   container.classList.add('none');
   result(res);
})