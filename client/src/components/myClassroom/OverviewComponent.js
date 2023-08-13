import React from 'react'
import styles from "./styles/overviewComponentStyles.module.css";
import CommonHeader from "./CommonHeader";
import CompletedIcon from "./overIcons/CompletedIcon";
import DaysSpentIcon from "./overIcons/DaysSpentIcon";
import MaxStreakIcon from "./overIcons/MaxStreakIcon";

const OverviewComponent = () => {

    const OverviewElement = ({ attr, val, Icon }) => {
        return (
            <div className={styles.overViewElementWrapper}>
                <div className={styles.elementIconWrapper} >
                    <div className={styles.elementIconContainer} >
                        <div className={styles.elementIconDiv}>
                            <Icon />
                        </div>
                    </div>
                </div>
                <div className={styles.elementValueWrapper}>
                    <p>{val}</p>
                </div>
                <div className={styles.elementAtrrWrapper}>
                    <p>{attr}</p>
                </div>
            </div>
        )

    }

    return (
        <div className={styles.overviewComponentWrapper} >
            <div className={styles.overviewComponentInnerWrapper} >
                <div className={styles.overviewComponentHeaderCell} >
                    <CommonHeader headingText={'Overview'} />
                </div>
                <div className={styles.overviewElementListCell} >
                    <div className={styles.overviewElementListInnerCell} >
                        <OverviewElement attr={'Max Streak'} val={'5'} Icon={MaxStreakIcon} />
                        <OverviewElement attr={'Days Spent'} val={'10'} Icon={DaysSpentIcon} />
                        <OverviewElement attr={'Completed'} val={'2'} Icon={CompletedIcon} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OverviewComponent