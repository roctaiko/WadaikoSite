

function getTimeline() {   
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
	console.dir(events);
}