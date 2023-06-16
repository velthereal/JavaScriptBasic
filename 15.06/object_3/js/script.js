// let carFord = {
//     name: 'Ford',
//     year:2010,
//     distance:12542
// }
// console.log(carFord);

// function Car(name,year,distance){
//     this.name = name;
//     this.year = year;
//     this.distance = distance;
// }

// let ford = new Car('Ford',2010,12452);
// let bmw = new Car('BMW',2000,134545);
// Car.prototype.getYear = function(){
//     return new Date().getFullYear() - this.year;
// }
// Car.prototype.color = 'black';
// ford.color = 'red';
// console.log(Car);
// console.log(ford);
// console.log(bmw);
// for (const key in ford) {
//     console.log(key, ' :: ', ford[key]);
// }
// for (const key in bmw) {
//     if(Object.hasOwnProperty.call(bmw,key)){
//         console.log(key, ' :: ', bmw[key]);
//     }
// }
// console.log(Object.keys(ford));
// console.log(Object.keys(bmw));


// console.log('-----BMW-----');
// Object.keys(bmw).forEach((key)=>{
//     console.log(key, ' :: ', bmw[key]);
// })
// console.log('-----FORD-----');
// Object.keys(ford).forEach((key)=>{
//     console.log(key, ' :: ', ford[key]);
// })

// let ford = Object.create(
//     {
//         getAge: function(){
//             // console.log(new Date().getFullYear() - this.year)
//             Object.defineProperties(this, 'age', {
//                 value: new Date().getFullYear() - this.year})
//         },
//         colorCar:{
//             value:'black'
//         }
//     },
//     {
//         name:{
//             value:'Ford', //значенння властивості
//             enumerable:true, // перерахунок
//             writable:true, // чи можна редагувати значення
//             configurable:true //видалення властивостей
//         },
//         year:{
//             value:2001,
//             enumerable:true,
//             writable:false
//         },
//         distance:{
//             value:1254,
//             enumerable:true,
//             writable:true
//         },
//         color:{
//             get: function(){
//                 console.log('get color');
//                 return 'red';
//             },
//             set: function() {
//                 console.log('set color')
//             }
//         }
//     });
// // console.log(ford);
// Object.keys(ford).forEach((key) => {
//     console.log(key, ' :: ', ford[key]);
// })
// for (const key in ford) {
//     console.log(key, ' :: ', ford[key]);
// }

conaole.log(new Date());