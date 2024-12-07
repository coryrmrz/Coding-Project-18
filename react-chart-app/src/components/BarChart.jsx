const BarChart = ({ data }) => { //define data structure for bar chart
    const barChartData = {
        labels: data.months, //x-axis represents months
        datasets: [
            {
                label: 'Monthly Sales', //data label
                data: data.sales, //sales data y-axis
                backgroundColor: 'rgba(235, 58, 205, 0.8)', //background color
                borderColor: 'rgba(235, 58, 205)', //border color
                borderWidth: 1, //bar borders width
            },
        ],
    };
    const barChartOptions = { //bar chart configuration options
        scales: {
            y: {
                beginAtZero: true, //y-axis starts at 0
            },
        },
    };
    return <ChartComponent type="bar" data={barChartData} options={barChartOptions} />; //chart component with defined data and options
};