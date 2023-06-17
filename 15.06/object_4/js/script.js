let days = document.querySelector('#days span');
let hours = document.querySelector('#hours span');
let minutes = document.querySelector('#minutes span');
let seconds = document.querySelector('#seconds span');

let currentDate = new Date();

let nextYear = currentDate.getFullYear() + 1;
let newYearDate = new Date(nextYear, 0, 1);
console.log(newYearDate)
let difference = newYearDate.getTime() - currentDate.getTime();
console.log(difference)

let daysTime = Math.floor(difference / (1000 * 60 * 60 * 24));
let hoursTime = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutesTime = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
let secondsTime = Math.floor((difference % (1000 * 60)) / 1000);

if(daysTime < 10){
	daysTime = '0' + daysTime;
}
if(hoursTime < 10){
	hoursTime = '0' + hoursTime;
}
if(minutesTime < 10){
	minutesTime = '0' + minutesTime;
}
if(secondsTime < 10){
	secondsTime = '0' + secondsTime;
}
days.textContent = daysTime;
hours.textContent = hoursTime;
minutes.textContent = minutesTime;
seconds.textContent = secondsTime;