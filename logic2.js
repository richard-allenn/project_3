// An array of cities and their locations
let cities = [
    {
      "Police Station": "Cottesloe Police Station",
      location: [115.76, -32.00],
      "Address": "166 CURTIN AV, COTTESLOE",
      "Postcode": 6011,
      "District": "Fremantle"
    },
    {
      "Police Station": "Rottnest",
      location: [115.54, -31.99],
      "Address": "1 SOMERVILLE DR, ROTTNEST ISLAND",
      "Postcode": 6161,
      "District": "Fremantle"
    },
    {
      "Police Station": "Fremantle",
      location: [115.75, -32.05],
      "Address": "88 HIGH ST, FREMANTLE",
      "Postcode": 6160,
      "District": "Fremantle"
    },
    {
       "Police Station": "Cockburn",
       location: [115.86, -32.12],
       "Address": "34 LINKAGE AV, COCKBURN CENTRAL",
       "Postcode": 6164,
       "District": "Fremantle"
    },
    {
        "Police Station": "Palmyra",
        location: [115.79, -32.04],
        "Address": "349 CANNING HWY, PALMYRA",
        "Postcode": 6157,
        "District": "Fremantle"
    },
    {
        "Police Station": "Murdoch",
        location: [115.84, -32.07],
        "Address": "120 MURDOCH DR, MURDOCH",
        "Postcode": 6150,
        "District": "Fremantle"
    },
    {
      "Police Station": "Perth",
      location: [115.85, -31.95],
      "Address": "2 FITZGERALD ST, NORTHBRIDGE",
      "Postcode": 6003,
      "District": "Perth"
      
    },
    {
        "Police Station": "Wembley",
        location: [115.81, -31.94],
        "Address": "188 SALVADO RD, WEMBLEY",
        "Postcode": 6014,
        "District": "Perth"
    },
    {
        "Police Station": "Ballajura",
        location: [115.90, -31.85],
        "Address": "37 CASSOWARY DR BALLAJURA",
        "Postcode": 6066,
        "District": "Midland"
    },
    {
        "Police Station": "Ellenbrook",
        location: [115.97, -31.78],
        "Address": "2 CIVIC TCE, ELLENBROOK",
        "Postcode": 6069,
        "District": "Midland"
    },
    {
        "Police Station": "Forrestfield",
        location: [116.01, -31.99],
        "Address": "40 STRELITZIA AV, FORRESTFIELD",
        "Postcode": 6058,
        "District": "Midland"
    },
    {
        "Police Station": "Kiara",
        location: [115.94, -31.89],
        "Address": "163 MORLEY DR E, KIARA",
        "Postcode": 6054,
        "District": "Midland"
    },
    {
        "Police Station": "Midland",
        location: [116.00, -31.89],
        "Address": "32 SPRING PARK RD, MIDLAND",
        "Postcode": 6056,
        "District": "Midland"
    },
    {
        "Police Station": "Mundaring",
        location: [116.17, -31.90],
        "Address": "7250 GREAT EASTERN HWY, MUNDARING",
        "Postcode": 6073,
        "District": "Midland"
    },
    {
        "Police Station": "Clarkson",
        location: [115.72, -31.69],
        "Address": "14 OCEAN KEYS BVD, CLARKSON",
        "Postcode": 6030,
        "District": "Joondalup"
    },
    {
        "Police Station": "Hillarys",
        location: [115.74, -31.81],
        "Address": "114 FLINDERS AV, HILLARYS",
        "Postcode": 6025,
        "District": "Joondalup"
    },
    {
        "Police Station": "Joondalup",
        location: [115.77, -31.74],
        "Address": "9 REID PROM, JOONDALUP",
        "Postcode": 6027,
        "District": "Joondalup"
    },
    {
        "Police Station": "Wanneroo",
        location: [115.81, -31.75],
        "Address": "51 DUNDEBAR RD, SINAGRA",
        "Postcode": 6065,
        "District": "Joondalup"
    },
    {
        "Police Station": "Warwick",
        location: [115.81, -31.84],
        "Address": "37 EDDINGTON RD, WARWICK",
        "Postcode": 6024,
        "District": "Joondalup"
    },
    {
        "Police Station": "Yanchep",
        location: [115.64, -31.55],
        "Address": "110 YANCHEP BEACH RD, YANCHEP",
        "Postcode": 6035,
        "District": "Joondalup"
    },
    {
        "Police Station": "Bayswater",
        location: [115.91, -31.92],
        "Address": "1A HAMILTON ST, BAYSWATER",
        "Postcode": 6053,
        "District": "Mirrabooka"
    },
    {
        "Police Station": "Mirrabooka",
        location: [115.86, -31.87],
        "Address": "50 CHESTERFIELD RD, MIRRABOOKA",
        "Postcode": 6061,
        "District": "Mirrabooka"
    },
    {
        "Police Station": "Morley",
        location: [115.89, -31.90],
        "Address": "318 COODE ST, DIANELLA",
        "Postcode": 6059,
        "District": "Mirrabooka"
    },
    {
        "Police Station": "Scarborough",
        location: [115.77, -31.89],
        "Address": "92 SCARBOROUGH BEACH RD, SCARBOROUGH",
        "Postcode": 6019,
        "District": "Mirrabooka"
    },
    {
        "Police Station": "Dwellingup",
        location: [116.06, -32.71],
        "Address": "55 MCLARTY ST, DWELLINGUP",
        "Postcode": 6213,
        "District": "Mandurah"
    },
    {
        "Police Station": "Kwinana",
        location: [115.82, -32.24],
        "Address": "2 SULPHUR RD, KWINANA TOWN CENTRE",
        "Postcode": 6167,
        "District": "Mandurah"
    },
    {
        "Police Station": "Mandurah",
        location: [115.74, -32.54],
        "Address": "333 PINJARRA RD, MANDURAH",
        "Postcode": 6210,
        "District": "Mandurah"
    },
    {
        "Police Station": "Pinjarra",
        location: [115.88, -32.63],
        "Address": "24 GEORGE ST, PINJARRA",
        "Postcode": 6208,
        "District": "Mandurah"
    },
    {
        "Police Station": "Armadale",
        location: [116.02, -32.15],
        "Address": "23 PROSPECT RD, ARMADALE",
        "Postcode": 6112,
        "District": "Armadale"
    },
    {
        "Police Station": "Canning Vale",
        location: [115.94, -32.06],
        "Address": "449 NICHOLSON RD, CANNING VALE",
        "Postcode": 6155,
        "District": "Armadale"
    },
    {
        "Police Station": "Gosnells",
        location: [116.00, -32.07],
        "Address": "2291 ALBANY HWY, GOSNELLS",
        "Postcode": 6110,
        "District": "Armadale"
    },
    {
        "Police Station": "Mundijong",
        location: [115.98, -32.30],
        "Address": "1445 MUNDIJONG RD, MUNDIJONG",
        "Postcode": 6123,
        "District": "Armadale"
    },
    {
        "Police Station": "Cannington",
        location: [115.93, -32.02],
        "Address": "1325 ALBANY HWY, CANNINGTON",
        "Postcode": 6107,
        "District": "Cannington"
    },
    {
        "Police Station": "Belmont",
        location: [115.93, -31.96],
        "Address": "273 ABERNETHY RD, CLOVERDALE",
        "Postcode": 6105,
        "District": "Cannington"
    },
    {

        "Police Station": "Kensington",
        location: [115.89, -31.99],
        "Address": "25 GEORGE ST, KENSINGTON",
        "Postcode": 6151,
        "District": "Cannington"
    }
  ];
  
  // An array that will store the created cityMarkers
  let cityMarkers = [];
  
  for (let i = 0; i < cities.length; i++) {
    // loop through the cities array, create a new marker, and push it to the cityMarkers array
    cityMarkers.push(
      L.marker(cities[i].location).bindPopup("<h1>" + cities[i].name + "</h1>")
    );
  }
  
  // Add all the cityMarkers to a new layer group.
  // Now, we can handle them as one group instead of referencing each one individually.
  let cityLayer = L.layerGroup(cityMarkers);
  
  // Define variables for our tile layers.
  let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  })
  
  let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
  });
  
  // Only one base layer can be shown at a time.
  let baseMaps = {
    Street: street,
    Topography: topo
  };
  
  // Overlays that can be toggled on or off
  let overlayMaps = {
    Cities: cityLayer
  };

  // Create a map object, and set the default layers.
  let myMap = L.map("map", {
    center: [46.2276, 2.2137],
    zoom: 6,
    layers: [street, cityLayer]
  });
  
  // Pass our map layers into our layer control.
  // Add the layer control to the map.
  L.control.layers(baseMaps, overlayMaps).addTo(myMap);
  