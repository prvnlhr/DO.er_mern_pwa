import React from 'react'
import styles from "./styles/graphHeaderStyles.module.css"
import ClockIcon from "../icons/ClockIcon"
const GraphHeaderComponent = () => {
    return (
        <div className={styles.graphHeaderWrapper} >
            <div className={styles.graphHeaderInnerWrapper} >
                <div className={styles.indicatorWrapper} >
                    <div className={styles.indicatorDiv} ></div>
                </div>
                <div className={styles.headingWrapper} >
                    <p>Productivity</p>
                </div>
                <div className={styles.productivityDurationWrapper} >
                    <div className={styles.clockIconWrapper} >
                        <div className={styles.clockIconDiv} >
                            <ClockIcon />
                        </div>
                    </div>
                    <div className={styles.hoursWrapper} >
                        <p>12 h</p>
                    </div>
                    <div className={styles.minutesWrapper} >
                        <p>52 min.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GraphHeaderComponent