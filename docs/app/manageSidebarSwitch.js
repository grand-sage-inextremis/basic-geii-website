export default function manageSidebarSwitch()
{
	const sidebarSwitch = document.getElementById('sidebarSwitch');
	const sidebarSwitchLabels = document.getElementsByClassName('sidebarSwitch_label');
	
	const rem = parseFloat(getComputedStyle(document.body).fontSize);

	let lastScrollYValue;



	window.addEventListener('popstate', function (event)
	{
		sidebarSwitch.checked = false;
	});



	window.addEventListener('resize', function (event)
	{
		if (window.innerWidth >= 44 * rem)
		{
			sidebarSwitch.checked = false;
		}
	});



	function manageScrollY(event)
	{
		event.preventDefault();

		if (!sidebarSwitch.checked)
		{
			lastScrollYValue = window.scrollY;
			sidebarSwitch.checked = true;
			window.scroll(window.scrollX, 0);
		}
		else {
			sidebarSwitch.checked = false;
			window.scroll(window.scrollX, lastScrollYValue);
		}
	}


	
	for (const sidebarSwitchLabel of sidebarSwitchLabels)
	{
		sidebarSwitchLabel.addEventListener('click', manageScrollY);
	}
}
