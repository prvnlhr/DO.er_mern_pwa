import React, { useEffect, useState } from 'react';
import styles from './styles/graphComponentStyles.module.css';
import Chart from 'chart.js/auto';
import { useSelector } from 'react-redux';

const GraphComponent = () => {

    // S  M  T   W  T  F  S 
    // 0  1  2   3  4  5  6
    // const chartDat = [125, 372, 66, 340, 423, 203, 276];

    const [timeSpendingData, setTimeSpendingData] = useState({
        hoursSpent: 0,
        minutesSpent: 0
    });



    const defaultData = [0, 0, 0, 0, 0, 0, 0];

    const dataFromLocalStorage = JSON.parse(localStorage.getItem('dailyTimeSpent')) || defaultData;
    // console.log(dataFromLocalStorage);
    const chartData = Object.values(dataFromLocalStorage);
    // console.log(chartData);

    const currentDayOfWeek = new Date().getDay();

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const chartRef = React.useRef(null);

    const getTotalHoursTillToday = () => {
        const currentDayOfWeek = new Date().getDay();
        const totalMinutes = chartData.slice(0, currentDayOfWeek).reduce((a, b) => a + b);
        const hours = Math.floor(totalMinutes / 60);
        const minutes = Math.round(totalMinutes % 60);
        // console.log(hours, minutes);
        setTimeSpendingData({
            hoursSpent: hours,
            minutesSpent: minutes
        })
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
                            data: chartData.map((value) => value / 60),
                            backgroundColor: chartData.map((value, index) =>
                                index === currentDayOfWeek ? '#9B8AFB' : '#51637D'
                            ),
                            borderWidth: 1,
                            barThickness: 4,
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
                            callbacks: {
                                title(tooltipItem) {
                                    const clickedElementIndex = tooltipItem[0].dataIndex;
                                    const formattedLabel = daysOfWeek[clickedElementIndex];
                                    return formattedLabel;
                                },
                                label(tooltipItem) {
                                    const totalMinutes = tooltipItem.formattedValue * 60;
                                    if (totalMinutes >= 60) {
                                        const hours = Math.floor(totalMinutes / 60);
                                        const minutes = Math.round(totalMinutes % 60); // Round off the minutes
                                        return `${hours}hr ${minutes}min`;
                                    } else {
                                        return `${totalMinutes}min`;
                                    }
                                },
                            },
                            backgroundColor: '#9B8AFB'
                        }
                    },

                },
            });
        }
    }, [currentDayOfWeek]);

    const TimeSpendingsElement = () => {
        return (
            <div className={styles.timeSpendingElementWrapper} >
                <div className={styles.timeSpendingAttrWrapper} >
                    <p>Time Spendings</p>
                </div>
                <div className={styles.timeSpendingValueWrapper} >
                    <p>{timeSpendingData.hoursSpent}<span> h&nbsp;&nbsp;&nbsp;&nbsp;</span>{timeSpendingData.minutesSpent}<span> m</span></p>
                </div>
            </div>
        )
    }


    return (
        <div className={styles.graphComponentWrapper}>
            <div className={styles.graphInnerWrapper}>
                <div className={styles.timeSpendingWrapper} >
                    <TimeSpendingsElement />
                </div>
                <div className={styles.graphWrapper} >
                    <canvas className={styles.canvas} ref={chartRef} />
                </div>
            </div>
        </div>
    );
};

export default GraphComponent;
