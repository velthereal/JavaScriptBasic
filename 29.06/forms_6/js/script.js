// let date = new Date();
// date.setTime((new Date().getTime()) + 60 * 1000)
// console.log(date);

// document.cookie = `userLogin=dev; expires=${date}; path=/`;
// document.cookie = `password=devuser; expires=${date}; path=/`;
// console.log('cookie', document.cookie);

let res = document.cookie;
console.log(res.split('; '));

res = res.split('; ');
let cookieObj = {};

for (let i = 0; i < res.length; i++) {
   if(res[i] != 'undefined'){
      let str = res[i].split('=');
      cookieObj[str[0]] = str[1];
   }
   
}

console.log(cookieObj);