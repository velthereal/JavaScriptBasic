let form = document.forms[0];

let groupBlock = document.querySelector('.group');
let attendanceList = document.querySelector('#attendanceList');
let attendanceListTopic = document.querySelector('#attendanceList span');
let attendanceTable = document.querySelector('#attendanceTable');
let topicLabel = document.querySelector('.group label[for="topic"]');

let attendanceData = {};

form.select.addEventListener('click', () => {
	let group = form.group.value;
	let lesson = form.lesson.value;
	groupBlock.classList.remove('none');
	attendanceList.classList.add('none');
	topicLabel.textContent = 'Topic:';
	form.topic.value = '';

	form.present.forEach(function(checkbox){
		checkbox.checked = false;
	});

	if(attendanceData.hasOwnProperty(group) && attendanceData[group].hasOwnProperty(lesson)){
		attendanceList.classList.remove('none');
		groupBlock.classList.add('none');
		attendanceListTopic.textContent = attendanceData[group][lesson].topic;
		let studentsAttendance = attendanceData[group][lesson].students;
		attendanceTable.innerHTML = '<tr><td>Name</td><td>Is present</td></tr>';

		for(let i = 0; i < studentsAttendance.length; i++){
			let row = document.createElement('tr');
			let nameCell = document.createElement('td');
			let presentCell = document.createElement('td');

			nameCell.textContent = studentsAttendance[i].name;
			presentCell.textContent = studentsAttendance[i].present ? 'present' : ' ';

			row.insertAdjacentElement('beforeend', nameCell);
			row.insertAdjacentElement('beforeend', presentCell);
			attendanceTable.insertAdjacentElement('beforeend', row);
		}
	} else {
		attendanceList.classList.add('none');
   	groupBlock.classList.remove('none');
   	attendanceTable.innerHTML = '';
	}
});

form.save.addEventListener('click', () => {
	let group = form.group.value;
	let lesson = form.lesson.value;
	let topic = form.topic.value;

	groupBlock.classList.add('none');
	attendanceListTopic.textContent = topic;

	let studentsAttendance = [];
	let checkboxes = form.present;

	for(let i = 0; i < checkboxes.length; i++){
		let name = checkboxes[i].parentNode.parentNode.querySelector('td:first-child').textContent;
		let present = checkboxes[i].checked;
		studentsAttendance.push({ name: name, present: present });
	}

	if(!attendanceData.hasOwnProperty(group)){
		attendanceData[group] = {};
	}
	if (!attendanceData[group].hasOwnProperty(lesson)) {
		attendanceData[group][lesson] = {};
	}

	attendanceData[group][lesson] = {
		topic: topic,
		students: studentsAttendance
	}

	if(form.lesson.value == lesson && form.group.value == group && !attendanceList.classList.contains('none')){
		attendanceListTopic.textContent = topic;
		attendanceTable.innerHTML = '<tr><td>Name</td><td>Is present</td></tr>';

		for(let i = 0; i < studentsAttendance.length; i++){
			let row = document.createElement('tr');
			let nameCell = document.createElement('td');
			let presentCell = document.createElement('td');

			nameCell.textContent = studentsAttendance[i].name;
			presentCell.textContent = studentsAttendance[i].present ? 'present' : ' ';

			row.insertAdjacentElement('beforeend', nameCell);
			row.insertAdjacentElement('beforeend', presentCell);
			attendanceTable.insertAdjacentElement('beforeend', row);
		}
	}
})