import React from 'react'
import styles from "./styles/productivityGraphStyles.module.css"
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
        { hr: "08" },
        { hr: "07" },
        { hr: "06" },
        { hr: "05" },
        { hr: "04" },
        { hr: "03" },
        { hr: "02" },
        { hr: "01" },
        { hr: "00" },
    ]
    return (
        <div className={styles.graphWrapper}  >
            <div className={styles.hoursTextWrapper} >
                {
                    hoursData.map((hrData, index) => (
                        <p className={styles.hrText}>{hrData.hr}</p>
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
        </div >
    )
}

export default ProductivityGraphComponent