const url = "http://127.0.0.1:5000/api/v1.0/crimedata";

// Load the data from the server and initialize the dashboard
function initDashboard() {
  d3.json(url).then(function(data) {
    // Update the charts with the first set of data
    updateCharts(data);
  });
}

// Update the bar chart with the given data
function updateCharts(data) {
  let districts = data.map(entry => entry.District);
  let arsonTotal = data.map(entry => entry["Arson Total"]);
  let assaultFamilyTotal = data.map(entry => entry["Assault (Family) Total"]);
  let assaultNonFamilyTotal = data.map(entry => entry["Assault (Non-Family) Total"]);
  let drugOffencesTotal = data.map(entry => entry["Drug Offences Total"]);
  let homicideTotal = data.map(entry => entry["Homicide Total"]);
  let propertyDamageTotal = data.map(entry => entry["Property Damage Total"]);
  let regulatedWeaponsOffences = data.map(entry => entry["Regulated Weapons Offences"]);
  let stealingTotal = data.map(entry => entry["Stealing Total"]);
  let stealingOfMotorVehicle = data.map(entry => entry["Stealing of Motor Vehicle"]);

  // set up the trace 1
  let trace1 = {
    x: districts,
    y: assaultFamilyTotal,
    type: "bar"
  };

  //set up the layout
  let layout1 = {
    title: "assault within families"
  };
  Plotly.newPlot("bar", [trace1], layout1);



  // set up the trace 2
  let trace2 = {
    x: districts,
    y: assaultNonFamilyTotal,
    type: "bar"
  };


  //set up the layout
  let layout2 = {
    title: "Total assaults non family"
  };
  Plotly.newPlot("bar", [trace2], layout2);


}

// call the initialization functiion
initDashboard();