// Heat map 

const url = ""

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

  let stations = new L.layergroup(basemaps);
  let homicide = new L.layergroup(basemaps);
  let familyAssualt = new L.layergroup(basemaps);
  let assualt = new L.layergroup(basemaps);
  let stealingMv = new L.layergroup(basemaps);
  let arson = new L.layergroup(basemaps);
  let drugOffences = new L.layergroup(basemaps);
  let weapons = new L.layergroup(basemaps);

  let overlayMaps = {
    "district crime totals": stations,
    "Homicide Total": homicide,
    "Assault (Non-Family) Total": familyAssualt,
    "Stealing of Motor Vehicle": stealingMv,
    "Arson Total": arson,
    "Drug Offences Total": drugOffences,
    "Regulated Weapons Offences": weapons
  }

  let myMap = L.map("map", {
    center: [-31.9523, 115.8613],
    zoom: 7
  });
  
  L.control.layers(baseMaps, overlayMaps).addTo(myMap);

  d3.json(url).then(function(response) {

    console.log(response);
    features = response.features;
  
    let heatArray = [];
  
    for (let i = 0; i < features.length; i++) {
      let location = features[i].geometry;
      if (location) {
        //console.log(location);
        heatArray.push([location.coordinates[i].y, location.coordinates[i].x]);
      }
  
    }

    let heat = L.heatLayer(heatArray, {
      radius: 20,
      blur: 35
    }).addTo(stations);
  
  });

  // Crime data for Homicide total 
d3.json(url).then(function(response) {
  data = response.filter(object=>object.Shift=='Homicide Total');
    let heatArray = [];
    for (let i = 0; i < data.length; i++) {
      if (response) {
        heatArray.push([data[i].y, data[i].x]);
      }
    }
  
    // Settings for the heat array
    let heatHomicide = L.heatLayer(heatArray, {
      scaleRadius: true,
      radius:20,
      blur: 35
    }).addTo(homicide);
  
  });

// Crime data for family assualt total 
d3.json(url).then(function(response) {
  data = response.filter(object=>object.Shift=='Assault (Family) Total');
    let heatArray = [];
    for (let i = 0; i < data.length; i++) {
      if (response) {
        heatArray.push([data[i].y, data[i].x]);
      }
    }
  
    // Settings for the heat array
    let heatfamilyAssualt = L.heatLayer(heatArray, {
      scaleRadius: true,
      radius:20,
      blur: 35
    }).addTo(familyAssualt);
  
  });

  // Crime data for Assualt (non-family) total 
d3.json(url).then(function(response) {
  data = response.filter(object=>object.Shift=='Assault (Non-Family) Total');
    let heatArray = [];
    for (let i = 0; i < data.length; i++) {
      if (response) {
        heatArray.push([data[i].y, data[i].x]);
      }
    }
  
    // Settings for the heat array
    let heatAssualt = L.heatLayer(heatArray, {
      scaleRadius: true,
      radius:20,
      blur: 35
    }).addTo(assualt);
  
  });

    // Crime data for Stealing of Motor Vehicle total 
d3.json(url).then(function(response) {
  data = response.filter(object=>object.Shift=='Stealing of Motor Vehicle');
    let heatArray = [];
    for (let i = 0; i < data.length; i++) {
      if (response) {
        heatArray.push([data[i].y, data[i].x]);
      }
    }
  
    // Settings for the heat array
    let heatstealingMv = L.heatLayer(heatArray, {
      scaleRadius: true,
      radius:20,
      blur: 35
    }).addTo(stealingMv);
  
  });

    // Crime data for Arson Total 
    d3.json(url).then(function(response) {
      data = response.filter(object=>object.Shift=='Arson Total');
        let heatArray = [];
        for (let i = 0; i < data.length; i++) {
          if (response) {
            heatArray.push([data[i].y, data[i].x]);
          }
        }
      
        // Settings for the heat array
        let heatarson = L.heatLayer(heatArray, {
          scaleRadius: true,
          radius:20,
          blur: 35
        }).addTo(arson);
      
      });

 // Crime data for Drug Offences Total 
 d3.json(url).then(function(response) {
  data = response.filter(object=>object.Shift=='Drug Offences Total');
    let heatArray = [];
    for (let i = 0; i < data.length; i++) {
      if (response) {
        heatArray.push([data[i].y, data[i].x]);
      }
    }
  
    // Settings for the heat array
    let heatdrugOffences = L.heatLayer(heatArray, {
      scaleRadius: true,
      radius:20,
      blur: 35
    }).addTo(drugOffences);
  
  });

  // Crime data for Regulated Weapons Offences Total 
 d3.json(url).then(function(response) {
  data = response.filter(object=>object.Shift=='Regulated Weapons Offences');
    let heatArray = [];
    for (let i = 0; i < data.length; i++) {
      if (response) {
        heatArray.push([data[i].y, data[i].x]);
      }
    }
  
    // Settings for the heat array
    let heatweapons = L.heatLayer(heatArray, {
      scaleRadius: true,
      radius:20,
      blur: 35
    }).addTo(weapons);
  
  });