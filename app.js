const data =
{
	"subjects": [
		{
			"id": "maths",
			"title": "Mathématiques",
			"sections": []
		},
		{
			"id": "gl",
			"title": "GL : Génie logicielle",
			"sections": [
				{
					"title": "Bases du langage C++",
					"courseNotes": [
						{
							"id": "code-minimal",
							"title": "Comprendre le code minimal"
						},
						{
							"id": "variables",
							"title": "Stocker des informations avec les variables"
						},
						{
							"id": "fonctions",
							"title": "Rendre le code modulable avec les fonctions"
						}
					]
				},
				{
					"title": "Manipulation de la mémoire",
					"courseNotes": [
						{
							"id": "pointeurs",
							"title": "Toucher à la mémoire avec les pointeurs"
						},
						{
							"id": "pointeurs_et_fonctions",
							"title": "Économiser la mémoire avec les pointeurs et les fonctions"
						},
						{
							"id": "desallocation_pointeurs",
							"title": "Désencombrer la mémoire avec la désallocation de pointeurs"
						}
					]
				},
				{
					"title": "Programmation orientée objet",
					"courseNotes": [
						{
							"id": "classes",
							"title": "Créer ses propres types avec les classes"
						},
						{
							"id": "heritage",
							"title": "Créer des types plus spécifiques avec l'héritage"
						},
						{
							"id": "espaces_de_noms",
							"title": "Éviter les conflits avec les espaces de noms"
						}
					]
				}
			]
		},
		{
			"id": "se",
			"title": "SE : Systèmes électroniques",
			"sections": []
		},
		{
			"id": "sn",
			"title": "SN : Systèmes numériques",
			"sections": []
		}
	]
};



function runApplication(data)
{

	/***************  FUNCTION: DISPLAY A LIST OF COURSE NOTES  ***********************************/

	function displayCourseNoteList(subjectID)
	{
		let subjectData;
		let subjectTitle;
		let sectionList;
		let sectionListItem;
		let sectionTitle;
		let courseNoteList;
		let courseNoteListItem;
		let courseNoteAnchor;
		
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

		for (const section of subjectData.sections)
		{
			sectionListItem = document.createElement('li');
			sectionListItem.classList.add('sectionList__section');
			sectionListItem.classList.add('section');

			sectionTitle = document.createElement('h2');
			sectionTitle.classList.add('section__title');
			sectionTitle.textContent = section.title;
			sectionListItem.appendChild(sectionTitle);

			courseNoteList = document.createElement('ol');
			courseNoteList.classList.add('section__courseNoteList');

			for (const courseNote of section.courseNotes)
			{
				courseNoteAnchor = document.createElement('a');
				courseNoteAnchor.classList.add('section__courseNoteLink');
				courseNoteAnchor.textContent = courseNote.title;
				courseNoteAnchor.setAttribute('href', `/courseNotes/${courseNote.id}.pdf`);
				courseNoteAnchor.setAttribute('target', `_blank`);

				courseNoteListItem = document.createElement('li');
				courseNoteListItem.classList.add('section__courseNote')
				courseNoteListItem.appendChild(courseNoteAnchor);

				courseNoteList.appendChild(courseNoteListItem);
			}

			sectionListItem.appendChild(courseNoteList);

			sectionList.appendChild(sectionListItem);
		}
	}



	/***************  FUNCTION: FILL THE SIDEBAR  *************************************************/
	
	function fillSidebar()
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



	/***************  CALL THE FUNCTIONS  *********************************************************/
	
	fillSidebar();
	
	displayCourseNoteList(document.location.hash.slice(1));

	window.addEventListener('popstate', function (event)
	{
		displayCourseNoteList(document.location.hash.slice(1));
	});


}



runApplication(data);
