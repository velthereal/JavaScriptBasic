let listItem = document.querySelectorAll('img');

let target = -1;
for(let i = 0; i < listItem.length; i++){
	listItem[i].addEventListener('click', () => {
		if(target == -1){
			listItem[i].classList.toggle('img-click');
			target = i;
			return;
		}
		if(listItem[target].classList.contains('img-click')){
			listItem[target].classList.remove('img-click');
		}
		if(target == i){
			target = -1;
			return;
		}
		listItem[i].classList.toggle('img-click');
		target = i;
	});
}