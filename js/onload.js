function init() {

	/*match up timeline to selected year*/
	var selectedYear = document.querySelector('.timeline_buttons').querySelector('.selected').innerText;
	console.log(document.querySelector('.timeline_buttons').querySelector('button'));
	document.querySelector('.timeline_buttons').querySelectorAll('button').forEach(function(button){
			button.onclick = function(e){
			document.querySelector('.timeline_buttons').querySelector('.selected').setAttribute('class', '');
			e.target.setAttribute('class', 'selected');

			generateTimeline();
		}
	});

	/*open the modal*/
}