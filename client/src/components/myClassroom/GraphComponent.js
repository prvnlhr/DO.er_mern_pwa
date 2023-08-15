import React, { useEffect, useState } from 'react'
import styles from "./styles/graphComponentStyles.module.css";
import chartStyles from "./styles/graphChartComponentStyles.module.css"
import CommonHeader from "./CommonHeader";
import Chart from 'chart.js/auto';
import { useSelector } from 'react-redux';



const GraphComponent = () => {


    const courseState = useSelector((state) => state.course.currentCourseState);

    const { dailyTimeSpent, isLoading } = courseState;

    const [timeSpendingData, setTimeSpendingData] = useState({
        hoursSpent: 0,
        minutesSpent: 0
    });

    const chartRef = React.useRef(null);

    const currentDayOfWeek = new Date().getDay();

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const getTotalHoursTillToday = () => {
        const totalMinutes = dailyTimeSpent.reduce((total, minutes) => total + minutes, 0);
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        setTimeSpendingData({ hoursSpent: hours, minutesSpent: minutes });
    };

    useEffect(() => {
        getTotalHoursTillToday();

    }, [dailyTimeSpent]);


    const [chartInstance, setChartInstance] = useState(null);

    useEffect(() => {
        if (chartRef.current) {
            if (chartInstance) {
                chartInstance.destroy(); // Destroy the previous chart instance
            }

            const ctx = chartRef.current.getContext('2d');

            const newChartInstance = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
                    datasets: [
                        {
                            label: 'Time Spent (Hours)',
                            data: dailyTimeSpent.map((value) => value / 60),
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
                        if (newChartInstance.tooltip) {
                            const activeElements = newChartInstance.getElementsAtEventForMode(event, 'nearest', { intersect: false });
                            if (activeElements && activeElements.length > 0) {
                                newChartInstance.tooltip.setActiveElements(activeElements);
                                newChartInstance.tooltip.update(true);
                                newChartInstance.draw();
                            }
                        }
                    },

                },
            });
            setChartInstance(newChartInstance);

        }
    }, [currentDayOfWeek, dailyTimeSpent]);

    return (
        <div className={styles.graphComponentWrapper} >
            <div className={styles.graphComponentInnerWrapper} >
                <div className={styles.graphTimeSpendingHeadingCell} >
                    <CommonHeader headingText={'Time Spendings'} />
                </div>
                <div className={styles.graphTimeSpendingValueCell} >
                    <div className={styles.graphTimeSpendingValueInnerCell} >
                        <p>{timeSpendingData.hoursSpent} <span>h</span> {timeSpendingData.minutesSpent}<span> m</span></p>
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