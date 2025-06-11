export default function displayCourseNoteList(data, subjectID)
{
	let subjectData;
	let subjectTitle;
	let sectionList;
	
	subjectData = data.subjects.filter(subject => (subject.id === subjectID))[0];

	if (subjectData === undefined)
	{
		subjectData = {
			title: '',
			sections: []
		};
	}

	subjectTitle = document.getElementsByClassName('subjectTitle')[0];
	subjectTitle.textContent = subjectData.title;

	sectionList = document.getElementsByClassName('sectionList')[0];
	sectionList.textContent = '';

	for (let i = 0; i < subjectData.sections.length; i++)
	{
		let section = subjectData.sections[i];

		let sectionListItem;
		let sectionTitle;
		let courseNoteList;

		sectionListItem = document.createElement('li');
		sectionListItem.classList.add('section');

		sectionTitle = document.createElement('h2');
		sectionTitle.classList.add('section__title');
		sectionTitle.textContent = `${i+1}.  ${section.title}`;
		sectionListItem.appendChild(sectionTitle);

		courseNoteList = document.createElement('ol');
		courseNoteList.classList.add('section__courseNoteList');

		for (let j = 0; j < section.courseNotes.length; j++)
		{
			let courseNote = section.courseNotes[j];

			let courseNoteListItem;
			let courseNoteAnchor;
			let courseNoteTitle;
			let courseNoteNo;

			courseNoteNo = document.createElement('span');
			courseNoteNo.classList.add('section__courseNoteNo');
			courseNoteNo.textContent = `${i+1}.${j+1}.`;

			courseNoteTitle = document.createElement('span');
			courseNoteTitle.classList.add('section__courseNoteTitle');
			courseNoteTitle.textContent = courseNote.title;

			courseNoteAnchor = document.createElement('a');
			courseNoteAnchor.classList.add('section__courseNoteLink');
			courseNoteAnchor.setAttribute('href', `/courseNotes/${courseNote.id}.pdf`);
			courseNoteAnchor.setAttribute('target', `_blank`);
			courseNoteAnchor.appendChild(courseNoteNo);
			courseNoteAnchor.appendChild(courseNoteTitle);

			courseNoteListItem = document.createElement('li');
			courseNoteListItem.classList.add('section__courseNote')
			courseNoteListItem.appendChild(courseNoteAnchor);

			courseNoteList.appendChild(courseNoteListItem);
		}

		sectionListItem.appendChild(courseNoteList);

		sectionList.appendChild(sectionListItem);
	}
}
