pos1 = [0,0]

var mymap = L.map('mapid').setView(pos1, 11);

// L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox.streets',
//     accessToken: 'your.mapbox.access.token'
// }).addTo(mymap);

pos2 = [0,0.05]
var polygon = L.polygon([
    pos1,
    pos2
]).addTo(mymap)

var circle = L.circle(pos1, {
    color: '#f06292',
    fillOpacity: 1,
    radius: 500
}).addTo(mymap);


var circle2 = L.circle(pos2, {
    color: '#1e88e5',
    fillOpacity: 1,
    radius: 500
}).addTo(mymap);



//
// marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
// circle.bindPopup("I am a circle.");
// polygon.bindPopup("I am a polygon.");
//
//
// var popup = L.popup()
//     .setLatLng([51.5, -0.09])
//     .setContent("I am a standalone popup.")
//     .openOn(mymap);
//
//
//     function onMapClick(e) {
//         alert("You clicked the map at " + e.latlng);
//     }
//
//     mymap.on('click', onMapClick);
//
//
//     var popup = L.popup();
//
//   function onMapClick(e) {
//       popup
//           .setLatLng(e.latlng)
//           .setContent("You clicked the map at " + e.latlng.toString())
//           .openOn(mymap);
//   }
//
//   mymap.on('click', onMapClick);
