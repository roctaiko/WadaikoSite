function initMap() {
  var uluru = {lat: 43.084495, lng: -77.674611};
  var webb = {lat: 43.084927, lng: -77.677054};
  var aux = {lat: 43.084782, lng: -77.673894};
  var storage = {lat: 43.083926, lng: -77.674227};
  var ingle = {lat: 43.084109, lng: -77.674297};
  
  
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: webb,
    map: map,
    icon: "../images/red_marker.png"
  });
  var marker2 = new google.maps.Marker({
    position: aux,
    map: map,
    icon: "../images/blue_marker.png"
  });
  var marker3 = new google.maps.Marker({
    position: ingle,
    map: map,
    icon: "../images/green_marker.png"
  });
  var marker4 = new google.maps.Marker({
  	position: storage,
    map: map,
    icon: "../images/yellow_marker.png"
  });
}