let form = document.forms[0];
let firstnameTd = document.querySelector('#firstname');
let lastnameTd = document.querySelector('#lastname');
let birthdayTd = document.querySelector('#birthday');
let genderTd = document.querySelector('#gender');
let countryTd = document.querySelector('#country');
let cityTd = document.querySelector('#city');
let skillsTd = document.querySelector('#skills');
let result = document.querySelector('.result');

form.addEventListener('submit', (event) => {
	let firstname = form.firstname.value;
	firstnameTd.textContent = firstname;
	let lastname = form.lastname.value;
	lastnameTd.textContent = lastname;
	let birthday = form.birthday.value;
	birthdayTd.textContent = birthday;
	let male = form.male;
	let gender;
	for (let i = 0; i < male.length; i++) {
		if(male[i].checked){
			gender = male[i].nextElementSibling.textContent;
		}
	}
	genderTd.textContent = gender;
	let country = form.country.value;
	countryTd.textContent = country;
	let city = form.city.value;
	cityTd.textContent = city;
	let skills = form.skills;
	let skillsColection = [];
	for (let i = 0; i < skills.length; i++) {
		if(skills[i].checked){
			skillsColection.push(skills[i].nextElementSibling.textContent);
		}
	}
	skillsTd.textContent = skillsColection;

	form.style.display = 'none';
	result.classList.remove('result-none');
	event.preventDefault();
});