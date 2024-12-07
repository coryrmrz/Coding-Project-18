import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; //import chart.js

const ChartComponent = ({ type, data, options }) => { //ChartComponent gives chart.js chart
    const chartRef = useRef(null); //reference to canvas
    const chartInstanceRef = useRef(null); //reference to chart.js
    useEffect (() => {
        const ctx = chartRef.current.getContext('2d'); //get 2D drawing context of canvas
        if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy(); //destroy chart instance to avoid duplicates
        }
        chartInstanceRef.current = new Chart(ctx, { //create new chart.js instance and store in reference
            type, //chart type
            data, //chart data
            options, //chart configuration options
        });
        return () => { //cleanup function to detsroy chart when component unmounts
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy(); //destroy chart instance
                chartInstanceRef.current = null; //reset reference
            }
        };

    }, [type, data, options]); //re-run effect when type, data, options change
    return <canvas ref={chartRef}></canvas>; //give canvas element to draw chart on
}

export default ChartComponent; //export chart component