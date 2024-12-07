const ScatterChart = ({ data }) => { //scatter chart data structure
    const scatterChartData = {
        datasets: [
            {
                label: 'Expenses VS Profits', //dataset label
                data: data.expenses.map((value, index) => ({
                    x: value, //expenses x-axis
                    y: data.profits[index], //profits y-axis
                })),
                backgroundColor: "rgba(290, 64, 32, 0.8)", //points color
            },
        ],
    };
    return <ChartComponent type="scatter" data={scatterChartData} />; //chart component with defined data and options
};
export default ScatterChart;