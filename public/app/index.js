import fillSidebar from './fillSidebar.js';
import displayCourseNoteList from './displayCourseNoteList.js';
import manageSidebarSwitch from './manageSidebarSwitch.js';

import data from './data.js';



fillSidebar(data);

displayCourseNoteList(data, document.location.hash.slice(1));



window.addEventListener('popstate', function (event)
{
	displayCourseNoteList(data, document.location.hash.slice(1));
});



manageSidebarSwitch();
