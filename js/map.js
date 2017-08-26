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


  // Marker One: Webb Auditorium
  var contentString = "<h2>Webb Auditorium</h2>";
  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });


  var marker = new google.maps.Marker({
    position: webb,
    map: map,
    icon: "../images/red_marker.png",
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });


  // Marker Two: Auxiliary Gym
  var contentString2 = "<h2>Auxiliary Gym</h2>";
  var infowindow2 = new google.maps.InfoWindow({
    content: contentString2
  });


  var marker2 = new google.maps.Marker({
    position: aux,
    map: map,
    icon: "../images/blue_marker.png"
  });

  marker2.addListener('click', function() {
    infowindow2.open(map, marker2);
  });


  // Marker Three: Ingle Auditorium
  var contentString3 = "<h2>Ingle Auditorium</h2>";
  var infowindow3 = new google.maps.InfoWindow({
    content: contentString3
  });


  var marker3 = new google.maps.Marker({
    position: ingle,
    map: map,
    icon: "../images/green_marker.png"
  });

  marker3.addListener('click', function() {
    infowindow3.open(map, marker3);
  });


  // Marker Four: Storage Locker
  var contentString4 = "<h2>Storage Locker</h2>";
  var infowindow4 = new google.maps.InfoWindow({
    content: contentString4
  });


  var marker4 = new google.maps.Marker({
  	position: storage,
    map: map,
    icon: "../images/yellow_marker.png"
  });

  marker4.addListener('click', function() {
    infowindow4.open(map, marker4);
  });

}