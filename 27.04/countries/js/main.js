let countryQuestion = prompt(`Виберіть країну:
Україна
Німеччина
Франція
Австрія
Болгарія`);

let country_name;
let capital;
let languages;
let political_system;
let independence;
let area;

switch(countryQuestion){
	case 'Україна':
	case 'україна':
		country_name = 'Україна';
		capital = 'Київ';
		languages = 'Українська';
		political_system = 'Парламентсько-президентська республіка';
		independence = '24 серпня 1991';
		area = '603 628 км';
		break;
	case 'Німеччина':
	case 'німеччина':
		country_name = 'Німеччина';
		capital = 'Берлін';
		languages = 'Німецька';
		political_system = 'Федеративна парламентська республіка';
		independence = '23 травня 1949';
		area = '357 578 км';
		break;
	case 'Франція':
	case 'франція':
		country_name = 'Франція';
		capital = 'Париж';
		languages = 'Французька';
		political_system = 'Президентсько-парламентська республіка';
		independence = '22 вересня 1792';
		area = '671 308 км';
		break;
	case 'Австрія':
	case 'австрія':
		country_name = 'Австрія';
		capital = '	Відень';
		languages = 'Австрійський варіант німецької мови';
		political_system = 'Федеративна парламентська республіка';
		independence = '27 липня 19551 ';
		area = '83 871 км';
		break;
	case 'Болгарія':
	case 'болгарія':
		country_name = 'Болгарія';
		capital = 'Софія';
		languages = 'Болгарська';
		political_system = 'Унітарна парламентська республіка';
		independence = '5 жовтня 1908';
		area = '110 993 км';
		break;
		default:
			alert(`Error`);
			break;
}

document.write(`<div><h1>${country_name}</h1><h2>Столиця</h2><p>${capital}</p><h2>Офіційні мови</h2><p>${languages}</p><h2>Державний устрій</h2><p>${political_system}</p><h2>Незалежність</h2><p>${independence}</p><h2>Площа</h2><p>${area}</p></div>`);