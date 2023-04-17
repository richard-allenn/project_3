let chart;

      async function fetchdata(selectedDate = '') {
        const url = 'http://127.0.0.1:5000/api/v1.0/crimedata';
        const response = await fetch(url);
        const datapoints = await response.json();
        console.log('Fetched data:', datapoints);

        // Filter data by selected date if provided
        if (selectedDate) {
          return datapoints.filter(datapoint => datapoint['Month and Year'] === selectedDate);
        }
        
        return datapoints;
      }

      function createChart(datapoints) {
        console.log('Creating chart with data:', datapoints);
        const districts = datapoints.reduce((acc, curr) => {
          if (!acc.includes(curr.District)) {
            acc.push(curr.District);
          }
          return acc;
        }, []);
        console.log('Districts:', districts);

        const monthLabels = datapoints.map(datapoint => datapoint['Month and Year']);
        console.log('Month labels:', monthLabels);

        // Extract unique dates from the monthLabels array
        const uniqueDates = [...new Set(monthLabels)];
        console.log('Unique dates:', uniqueDates);

        // Create a dropdown menu with the unique dates
        const dateSelect = document.getElementById('date-select');
        uniqueDates.forEach(date => {
          const option = document.createElement('option');
          option.value = date;
          option.text = date;
          dateSelect.appendChild(option);
        });

        const datasets = districts.map((district) => {
          const districtData = datapoints.filter(
            (datapoint) => datapoint.District === district
          );

          const crimeCounts = districtData.map(
            (datapoint) => datapoint['Assault (Non-Family) Total']
          );

          return {
            label: district,
            data: crimeCounts,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          };
        });
        console.log('Datasets:', datasets);

        const ctx = document.getElementById('myChart').getContext('2d');
        chart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: districts,
            datasets: datasets,
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });

        // Add an event listener to update the chart when the date is changed
        dateSelect.addEventListener('change', () => {
          const selectedDate = dateSelect.value;
          const filteredData = datapoints.filter(datapoint => datapoint['Month and Year'] === selectedDate);
          const filteredDistricts = districts.filter(district => filteredData.some(datapoint => datapoint.District === district));
          const filteredDatasets = datasets.filter(dataset => filteredDistricts.includes(dataset.label));
          const filteredCrimeCounts = filteredDatasets.map(dataset => dataset.data);
          const labels = filteredData.map(datapoint => datapoint.District);
          chart.data.datasets = filteredDatasets;
          chart.data.labels = labels;
          chart.update();
        });
      }

      async function updateChart() {
        const date_select = document.getElementById('date-select').value;
        
        const datapoints = await fetchdata(date_select);

        chart.destroy();
        createChart(datapoints);
      }

      fetchdata().then((datapoints) => createChart(datapoints));