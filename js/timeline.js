function generateTimeline() {   
	var myJSON;
    var xhr = new XMLHttpRequest();
    xhr.onload = function(){
    	myJSON = JSON.parse(xhr.responseText);
    	var timelineEvents = myJSON.events;
	    createTimeline(timelineEvents);
    }

    var url = "../js/timeline.json";
    xhr.open('GET', url, true);
    xhr.send();
}

function createTimeline(events){
    var timeline = document.querySelector('.timeline')
    timeline.innerHTML = '';
    var selectedYear = document.querySelector('.timeline_buttons').querySelector('.selected').innerText;

    events.forEach(function(event){
        if(event.date.includes(selectedYear)){
            var newEvent = document.createElement('div');
            newEvent.setAttribute('class', 'timeline_item light-theme');
            newEvent.innerHTML = '<div class="item_text"><h5 class="date">'+ event.date +'</h5><h4 class="event-title">' + event.title + '</h4></div>';

            timeline.appendChild(newEvent);
        }
    });
}