import ChartComponent from "./ChartComponent"; //import ChartComponent

const LineChart = ({ data }) => { //define line chart data structure
    const lineChartData = {
        labels: data.months, //months x-axis label
        datasets: [
            {
                label: 'Monthly Profits', //dataset label
                data: data.profits, //monthly profits y-axis
                borderColor: 'rgba(255, 0, 26, 0.8)', //line color
                backgroundColor: 'rgba(0, 0, 0, 0)', //transparent background
                borderWidth: 2, //line thickness
            },
        ],
    };
    const lineChartOptions = { //line chart configuration options
        scales: {
            y: {
                beginAtZero: true, //y-axis starts at 0
            },
        },
    };
    return <ChartComponent type="line" data={lineChartData} options={lineChartOptions} />; //chart component with defined data and options
};