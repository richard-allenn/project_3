// Set the URL of the data
const url = "http://127.0.0.1:5000/";

async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

function createChart(data, dateIndex) {
    // filter the data by the selected date
    const filteredData = data.filter(item => item["Month and Year"] === data[dateIndex]["Month and Year"]);

    // group the data by district
    const groupedData = filteredData.reduce((acc, item) => {
        if (!acc[item.District]) {
            acc[item.District] = [];
        }
        Object.keys(item).forEach(key => {
            if (key !== "District" && key !== "Month and Year") {
                acc[item.District].push(item[key]);
            }
        });
        return acc;
    }, {});

    // create the chart
    const ctx = document.getElementById('myChart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(groupedData),
            datasets: Object.keys(data[0])
                .filter(key => key !== "District" && key !== "Month and Year")
                .map((key, index) => {
                    return {
                        label: key,
                        backgroundColor: `hsl(${index * (360 / (Object.keys(data[0]).length - 2))}, 70%, 50%)`,
                        data: Object.values(groupedData).map(item => item[index])
                    }
                })
        },
        options: {
            responsive: true,
            legend: {
                position: 'bottom',
            },
            scales: {
                xAxes: [{
                    stacked: true,
                }],
                yAxes: [{
                    stacked: true,
                }]
            }
        }
    });
}

async function initialize() {
    const data = await getData();
    createChart(data, 0);
}

initialize();