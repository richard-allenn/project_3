// Creating our initial map object:
// Set the starting Latitude and Longitude
let myMap = L.map("map", {
    center: [31.9523, 115.8613],
    zoom: 2
  });
  
  // Adding a title layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);

  let data = "///"

  d3.json(data).then(function(data) {
    L.geoJson(data).addTo(myMap);
  });