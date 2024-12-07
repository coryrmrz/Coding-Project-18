import React from "react"; //import react
import ChartComponent from "./ChartComponent.jsx"; //import ChartComponent

const BubbleChart = ({ data }) => { //define bubble chart data structure
    const bubbleChartData = {
        datasets: [
            {
                label: 'Sales, Expenses & Profits', //dataset label
                data: data.expenses.map((value, index) => ({
                    x: value, //expenses x-axis
                    y: data.profits[index], // profits y-axis
                    r: data.sales[index] / 1000, //bubble radius
                })),
                backgroundColor: 'rgba(29, 194, 194)', // bubbles fill color
                borderColor: 'rgba(29, 194, 194, 0.8)', //bubble border color
                borderWidth: 1, //bubble border thickness
            },
        ],
    };
    const bubbleChartOptions = { //bubble chart configuration options
        scales: {
            x: {
                type: 'category', //x-axis categories
                labels: data.expenses, //x-axis label
            },
            y: {
                beginAtZero: true, //y-axis starts at 0
            },
        },
    };
    return <ChartComponent type="bubble" data={bubbleChartData} options={bubbleChartOptions} />; //chart component with defined data and options
};
export default BubbleChart;