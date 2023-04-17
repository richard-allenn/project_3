// markers
const url = "http://127.0.0.1:5000/api/v1.0/stations"

let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

let toposheets = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
  });
  
let basemaps = {
    "Street map": street,
    "Topographic Map": toposheets
};

let myMap = L.map("map", {
  center: [-32.8, 117.9],
  zoom: 7
});

  
L.control.layers(baseMaps).addTo(myMap);

  d3.json(url).then(function(response) {
  
    //console.log(response);
    features = response.features;
  
    //console.log(features);
  
    for (let i = 0; i < features.length; i++) {
  
      let location = features[i].geometry;
      if(location){
        L.marker([location.coordinates[1].y, location.coordinates[0].x]).addTo(myMap);
      }
    
    }
  
  });
  