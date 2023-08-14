import React, { useEffect, useState } from 'react'
import styles from "./styles/graphComponentStyles.module.css";
import CommonHeader from "./CommonHeader";
import Chart from 'chart.js/auto';

const GraphComponent = () => {

    const [timeSpendingData, setTimeSpendingData] = useState({
        hoursSpent: 0,
        minutesSpent: 0
    });
    const defaultData = [123, 456, 231, 175, 320, 100, 400];

    const dataFromLocalStorage = JSON.parse(localStorage.getItem('dailyTimeSpent')) || defaultData;
    const chartData = Object.values(dataFromLocalStorage);
    // console.log(chartData);

    const currentDayOfWeek = new Date().getDay();

    // console.log(currentDayOfWeek);

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const chartRef = React.useRef(null);

    const getTotalHoursTillToday = () => {
        // const currentDayOfWeek = new Date().getDay();
        // const totalMinutes = chartData.slice(0, currentDayOfWeek).reduce((a, b) => a + b);
        // const hours = Math.floor(totalMinutes / 60);
        // const minutes = Math.round(totalMinutes % 60);
        // setTimeSpendingData({
        // hoursSpent: hours,
        // minutesSpent: minutes
        // })
    };


    useEffect(() => {
        getTotalHoursTillToday();
    }, []);

    useEffect(() => {
        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');

            const myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
                    datasets: [
                        {
                            label: 'Time Spent (Hours)',
                            data: defaultData.map((value) => value / 60),
                            backgroundColor: (context) => {
                                return context.dataIndex === currentDayOfWeek ? '#9E92DC' : '#51637D';
                            },
                            borderWidth: 1,
                            barThickness: 4.5,
                            hoverBackgroundColor: '#9B8AFB',
                        },
                    ],
                },
                options: {
                    elements: {
                        bar: {
                            borderRadius: 20
                        }
                    },
                    responsive: true,
                    maintainAspectRatio: false,
                    font: {
                        family: 'Poppins'
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            display: false,

                            ticks: {
                                color: 'white',
                                callback: function (value) {
                                    const hours = Math.floor(value / 60);
                                    const minutes = (value % 60);
                                    return `${hours ? hours : ''}${minutes === 0 ? '' : minutes}`;
                                },

                            },
                            grid: {
                                display: false,
                            },



                        },
                        x: {
                            ticks: {
                                color: 'white',

                            },
                            grid: {
                                display: false,
                            },

                        },
                    },
                    plugins: {
                        legend: {
                            display: false,
                            labels: {
                                color: '#9B8AFB',

                            },
                        },
                        tooltip: {
                            enabled: true,
                            position: 'average',
                            callbacks: {
                                title(tooltipItem) {
                                    const clickedElementIndex = tooltipItem[0].dataIndex;
                                    const formattedLabel = daysOfWeek[clickedElementIndex];
                                    return formattedLabel;
                                },
                                label(tooltipItem) {
                                    const totalMinutes = tooltipItem.formattedValue * 60;
                                    const roundedTotalMinutes = Math.round(totalMinutes); // Round off the total minutes
                                    if (roundedTotalMinutes >= 60) {
                                        const hours = Math.floor(roundedTotalMinutes / 60);
                                        const minutes = Math.round(roundedTotalMinutes % 60); // Round off the minutes
                                        return `${hours}hr ${minutes}min`;
                                    } else {
                                        return `${roundedTotalMinutes}min`;
                                    }
                                },
                            },
                            backgroundColor: '#9B8AFB'
                        }
                    },
                    onClick: (event, elements) => {
                        if (myChart.tooltip) {
                            const activeElements = myChart.getElementsAtEventForMode(event, 'nearest', { intersect: false });
                            if (activeElements && activeElements.length > 0) {
                                myChart.tooltip.setActiveElements(activeElements);
                                myChart.tooltip.update(true);
                                myChart.draw();
                            }
                        }
                    },

                },
            });

        }
    }, [currentDayOfWeek]);



    return (
        <div className={styles.graphComponentWrapper} >
            <div className={styles.graphComponentInnerWrapper} >
                <div className={styles.graphTimeSpendingHeadingCell} >
                    <CommonHeader headingText={'Time Spendings'} />
                </div>
                <div className={styles.graphTimeSpendingValueCell} >
                    <div className={styles.graphTimeSpendingValueInnerCell} >
                        <p>12 <span>h</span> 30<span> m</span></p>
                    </div>
                </div>
                <div className={styles.graphChartCell} >
                    <div className={styles.graphChartInnerCell} >
                        <canvas className={styles.canvas} ref={chartRef} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GraphComponent