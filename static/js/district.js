// district map

let myMap = L.map("map", {
    center: [-32.8, 117.9],
    zoom: 7
  });
  
  // Adding the tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);
  
  var data = fetchJSON('Perth_data.geojson')
            .then(function(data) { return data })
  
  d3.json(data).then(function(response) {
  
    //console.log(response);
    features = response.features;
  
    //console.log(features);
  
    for (let i = 0; i < features.length; i++) {
  
      let location = features[i].geometry;
      if(location){
        L.marker([location.coordinates[1], location.coordinates[0]]).addTo(myMap);
      }
    
    }
  
  });
  