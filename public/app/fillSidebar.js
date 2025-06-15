export default function fillSidebar(data)
{
	let subjectList;
	let subjectListItem;
	let subjectLink;

	subjectList = document.getElementsByClassName('sidebar__subjectList')[0];

	for (const subject of data.subjects)
	{
		subjectLink = document.createElement('a');
		subjectLink.classList.add('sidebar__subjectLink');
		subjectLink.textContent = subject.title;
		subjectLink.setAttribute('href', '#' + subject.id);
		
		subjectListItem = document.createElement('li');
		subjectListItem.classList.add('sidebar__subject');
		subjectListItem.appendChild(subjectLink);

		subjectList.appendChild(subjectListItem);
	}	
}