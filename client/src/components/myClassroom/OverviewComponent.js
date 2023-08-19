import React from 'react'
import styles from "./styles/overviewComponentStyles.module.css";
import CommonHeader from "./CommonHeader";
import CompletedIcon from "./overIcons/CompletedIcon";
import DaysSpentIcon from "./overIcons/DaysSpentIcon";
import MaxStreakIcon from "./overIcons/MaxStreakIcon";
import { useSelector } from 'react-redux'

const OverviewComponent = () => {

    const courseData = useSelector((state) => state.course.currentCourseState);
    const { maxStreak, totalTimeSpent, completedCourses } = courseData;
    const minutesInAnHour = 60;
    const hoursInADay = 24;
    const totalTimeSpentInDays = totalTimeSpent / (minutesInAnHour * hoursInADay);

    // Split the days and fractions
    const days = Math.floor(totalTimeSpentInDays);
    const fraction = totalTimeSpentInDays - days;




    // Convert fraction to a common fraction string
    let fractionString = "";
    const roundedFraction = Math.floor(fraction * 4) / 4;

    // console.log(roundedFraction);

    if (roundedFraction === 0.25) fractionString = "1/4";
    else if (roundedFraction === 0.5) fractionString = "1/2";
    else if (roundedFraction === 0.75) fractionString = "3/4";


    const displayValue = `${days > 0 ? days : ''} ${fractionString}`;


    const numCompletedCourses = Object.values(completedCourses).filter((completed) => completed).length;


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
                        <OverviewElement attr={'Max Streak'} val={maxStreak} Icon={MaxStreakIcon} />
                        <OverviewElement attr={'Days Spent'} val={displayValue} Icon={DaysSpentIcon} />
                        <OverviewElement attr={'Completed'} val={numCompletedCourses} Icon={CompletedIcon} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OverviewComponent