import React from 'react'
import styles from "./styles/productivityGraphStyles.module.css"
import ClockIcon from '../icons/ClockIcon'
const ProductivityGraphComponent = () => {

    let graphData = [

        {
            day: "Mon",
            hoursSpent: 2

        },
        {
            day: "Tue",
            hoursSpent: 5
        },
        {
            day: "Wed",
            hoursSpent: 1
        },
        {
            day: "Thu",
            hoursSpent: 7
        },
        {
            day: "Fri",
            hoursSpent: 6
        },
        {
            day: "Sat",
            hoursSpent: 4
        },
        {
            day: "Sun",
            hoursSpent: 3
        },
    ]

    let hoursData = [
        { hr: "8" },
        { hr: "7" },
        { hr: "6" },
        { hr: "5" },
        { hr: "4" },
        { hr: "3" },
        { hr: "2" },
        { hr: "1" },
        { hr: "0" },
    ]
    return (

        <div className={styles.graphComponentWrapper} >
            <div className={styles.headingTimeWrapper} >
                <div className={styles.headingIndicatorContainer}>
                    <div className={styles.indicatorDiv} >
                    </div>
                </div>

                <div className={styles.headingContainer}>
                    <p>Productivity</p>
                </div>
                <div className={styles.clockTimeContainer} >
                    <div className={styles.clockIconContainer} >
                        <div className={styles.clockIconDiv} >
                            <ClockIcon />
                        </div>
                    </div>
                    <div className={styles.timeTextContainer} >
                        <p>23h 52min</p>
                    </div>
                </div>
            </div>
            <div className={styles.graphWrapper} >

                <div className={styles.graphInnerWrapper}  >
                    <div className={styles.hoursTextWrapper} >

                        {
                            hoursData.map((hrData, index) => (
                                <div className={styles.hrTextDiv} >
                                    <p className={styles.hrText}>{hrData.hr}</p>
                                </div>
                            ))}
                    </div>
                    <div className={styles.dayBarWrapper} >
                        {
                            graphData.map((data, index) => (
                                <div className={styles.dayBarContainer}  >

                                    <div className={styles.dayTextDiv} >
                                        <p className={styles.dayText} >{data.day}</p>
                                    </div>

                                    <div className={styles.barContainer} >
                                        <div
                                            style={{ height: `${(data.hoursSpent / 8) * 100}%` }}
                                            className={styles.barDiv} >
                                        </div>
                                    </div>

                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>

        </div >
    )
}

export default ProductivityGraphComponent