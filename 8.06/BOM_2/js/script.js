// Task 1
// let up = document.querySelector('#up');
// let down = document.querySelector('#down');
// let p = document.querySelector('p');

// let number = 0;
// console.log(number);

// up.addEventListener('click', () => {
//    number++;
//    console.log(number);
//    p.innerHTML = number;
// })
// down.addEventListener('click', () => {
//    number--;
//    console.log(number);
//    p.innerHTML = number;
// })

// Task 2 не виходить
// let btn = document.querySelector('button');
// let container = document.querySelector('section');

// btn.addEventListener('click', addBlock);
// function addBlock(){
// 	let div = document.createElement('div');
// 	div.classList.add('block');
//    div.style.backgroundColor = randomColor();
// 	container.appendChild(div);
// 	console.log(div);
// 	div.addEventListener('click', () => {
// 		div.classList.remove('block');
// 		div.classList.remove('close-block');
// 	})
// }
// function randomColor() {
// 	let letters = '0123456789ABCDEF';
// 	let color = '#';
// 	for (let i = 0; i < 6; i++) {
// 		color += letters[Math.floor(Math.random() * 16)];
// 	}
// 	return color;
// }

// Task 3
// let text = document.querySelector('p');
// let color_cells = document.querySelectorAll('.colors div');

// for(let i = 0; i < color_cells.length; i++){
// 	color_cells[i].addEventListener('click', changeTextColor);
// }
// function changeTextColor(e){
// 	let colorClick = e.target.getAttribute('data-color');
// 	text.style.color = colorClick;
// }

// Task 4 не знаю як зробити взагалі
// let btn = document.querySelector('button');

// Task 5
// let countries = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Cabo Verde', 'Cambodia', 'Cameroon', 'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czechia', 'Democratic Republic of the Congo', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Holy See', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar', 'Namibi', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Korea', 'North Macedonia', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Palestine State', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Korea', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States of America', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'];
// let input = document.querySelector('#country');
// let countriesList = document.querySelector('#countries-names');

// input.addEventListener('input', showCountriesList);
// countriesList.addEventListener('click', selectCountry);

// function showCountriesList(){
// 	let inputText = input.value.toLowerCase();
// 	let matchingCountries = [];

// 	for(let i = 0; i < countries.length; i++){
// 		let country = countries[i];
// 		if(country.toLowerCase().indexOf(inputText) == 0){
// 			matchingCountries.push(country);
// 		}
// 	}
// 	countriesList.innerHTML = '';

// 	for(let j = 0; j < 10 && j < matchingCountries.length; j++){
// 		let $country = matchingCountries[j];
// 		let li = document.createElement('li');
// 		li.textContent = $country;
// 		countriesList.appendChild(li);
// 	}

// }

// function selectCountry(e) {
// 	if(e.target.tagName == 'LI'){
// 		input.value = e.target.textContent;
// 		countriesList.innerHTML = '';
// 	}
// }

// Task 6 є баг
// let board = document.querySelector('.board');
// let res = document.querySelector('.calculate p');

// let number1 = 0, number2 = 0, result;
// let symbol;
// let flag = true;

// board.addEventListener('click', (e) => {
//     if(e.target.tagName == 'BUTTON' && !e.target.classList.contains('res')){
//         symbol = parseInt(e.target.textContent);
//         if(!symbol) symbol = e.target.textContent;
//         calculate(symbol);
//         if(flag) {
//             res.textContent = number1;
//         } else if (!flag && number2 == 0) {
//             res.textContent = number1 + ' ' + symbol;
//         } else {
//             res.textContent = number1 + ' ' + symbol + ' ' + number2;

//         }
//         return;
//     }
//     symbol = result;
//     switch(symbol){
//         case '+':
//             result = number1 + number2;
//             break;
//         case '-':
//             result = number1 - number2;
//             break;
//         case '*':
//             result = number1 * number2;
//             break; 
//         case '/':
//             result = number1 / number2;
//             break;
//     }
//     res.textContent = number1 + ' ' + symbol + ' ' + number2 + ' = ' + result;
// })

// function calculate(symbol){
//     if(symbol == '*' || symbol == '/' || symbol == '+' || symbol == '-') {
//         flag = false;
//         result = symbol;
//         return;
//     }
//     if(flag){
//         number1 *=10;
//         number1 += symbol;
//     } else {
//         number2 *= 10;
//         number2 += symbol;
//     }
// }