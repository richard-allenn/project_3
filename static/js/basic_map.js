// Create a map object.
let myMap = L.map("map", {
    center: [-32.00, 115.745851457675],
    zoom: 8
  });
  
  // Add a tile layer.
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);
  
  // An array containing each city's name, location, and population
  let cities = [{
    location: [-32.1514767067312, 116.017292932543],
    name: "Armadale",
    date: 1/12/2007,
    drug_offences: 323
  },
  {
    location: [-32.0628660078029, 115.936813830687],
    name: "Canning Vale",
    date: 1/12/2007,
    drug_offences: 323
  },
  {
    location: [-32.073429910748, 116.003489915344],
    name: "Gosnells",
    date: 1/12/2007,
    drug_offences: 323
  },
  {
    location: [-32.2980524655642, 115.979923915343],
    name: "Mundijong",
    date: 1/12/2007,
    drug_offences: 323
  },
  {
    location: [-32.0169938390929, 115.931190271162],
    name: "Cannington ",
    date: 1/12/2007,
    drug_offences: 591
  },
  {
    location: [-31.9603172437386, 115.934339271162],
    name: "Belmont",
    date: 1/12/2007,
    drug_offences: 591
  },
  {
    location: [-31.9850895500247, 115.886673728836,],
    name: "Kensignton",
    date: 1/12/2007,
    drug_offences: 591
  },
  {
    location: [-32.1245141121461, 115.855990999997,],
    name: "Cockburn",
    date: 1/12/2007,
    drug_offences: 374
  },
  {
    location: [-32.0005977826822, 115.760090670566],
    name: "Cottesloe",
    date: 1/12/2007,
    drug_offences: 374
  },
  {
    location: [-32.0544435465825, 115.745851457675],
    name: "Fremantle",
    date: 1/12/2007,
    drug_offences: 374
  },
  {
    location: [-32.0360191675285, 115.787011999994],
    name: "Palmyra",
    date: 1/12/2007,
    drug_offences: 374
  },
  {
    location: [-32.071677271376, 115.843683271159],
    name: "Murdoch",
    date: 1/12/2007,
    drug_offences: 374
  },
  {
    location: [-31.94669786, 115.8525752],
    name: "Perth",
    date: 1/12/2007,
    drug_offences: 815
  },
  {
    location: [-31.9414927609286, 115.807997271165],
    name: "Wembley",
    date: 1/12/2007,
    drug_offences: 815
  },
  {
    location: [-31.7409179346514, 115.768805626986],
    name: "Joondalup",
    date: 1/12/2007,
    drug_offences: 362
  },
  {
    location: [-31.5432364281963, 115.639459999999],
    name: "Yanchep",
    date: 1/12/2007,
    drug_offences: 362
  },
  {
    location: [-31.8398054427863, 115.812364373017],
    name: "Warwick",
    date: 1/12/2007,
    drug_offences: 362
  },
  {
    location: [-32.2848406238375, 115.7471163],
    name: "Rockingham",
    date: 1/12/2007,
    drug_offences: 335
  },
  {
    location: [-32.2404335373155, 115.815746373013],
    name: "Kwinana",
    date: 1/12/2007,
    drug_offences: 335
  },
  {
    location: [-32.5383373280192, 115.7434187],
    name: "Mandurah",
    date: 1/12/2007,
    drug_offences: 335
  },
  {
    location: [-31.8867367744777, 116.002348] ,
    name: "Midland",
    date: 1/12/2007,
    drug_offences: 345
  },
  {
    location: [-31.8987954457007, 115.889109271165] ,
    name: "Morely",
    date: 1/12/2007,
    drug_offences: 346
  },
  {
    location: [-31.8938402090877, 115.765923186509] ,
    name: "Scarborough",
    date: 1/12/2007,
    drug_offences: 346
  },
  ];
  
  // Looping through the cities array, create one marker for each city, bind a popup containing its name and population, and add it to the map.
  for (let i = 0; i < cities.length; i++) {
    let city = cities[i];
    L.marker(city.location)
      .bindPopup(`<h1>${city.name}</h1> <hr> <h3>Drug Offences: ${city.drug_offences.toLocaleString()}</h3>`)
      .addTo(myMap);
  }