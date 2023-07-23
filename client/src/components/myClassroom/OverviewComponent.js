import React from 'react';
import styles from "./styles/overviewComponentStyles.module.css";
import OverviewStreakIcon from "../icons/OverviewStreakIcon";
import OverviewScoreIcon from "../icons/OverviewScoreIcon";
import OverviewCompletedIcon from "../icons/OverviewCompletedIcon";
import BackBtnIcon from "../icons/BackBtnIcon"
const OverviewComponent = () => {
    return (
        <div className={styles.outerWrapper} >

            <div className={styles.overviewHeadingwrapper} >

                <div className={styles.headingIndicatorContainer}>
                    <div className={styles.indicatorDiv} >
                    </div>
                </div>

                <div className={styles.headingContainer}>
                    <p>Overview</p>
                </div>

            </div>

            <div className={styles.overviewContentWrapper} >
                <div className={styles.contentInnerWrapper} >

                    <div className={styles.infoElementWrapper} >
                        <div className={styles.infoIconWrapper} >
                            <OverviewStreakIcon />
                        </div>
                        <div className={styles.infoAttributeWrapper} >
                            <p className={styles.infoAtrrText} >Streak</p>
                        </div>
                        <div className={styles.infoValueWrapper} >
                            <p className={styles.infoValueText} >24 Days</p>

                        </div>
                    </div>
                    <div className={styles.infoElementWrapper} >
                        <div className={styles.infoIconWrapper} >
                            <OverviewScoreIcon />
                        </div>
                        <div className={styles.infoAttributeWrapper} >
                            <p className={styles.infoAtrrText} >Score</p>

                        </div>
                        <div className={styles.infoValueWrapper} >
                            <p className={styles.infoValueText} >85.2 %</p>

                        </div>
                    </div>
                    <div className={styles.infoElementWrapper} >
                        <div className={styles.infoIconWrapper} >
                            <OverviewCompletedIcon />
                        </div>
                        <div className={styles.infoAttributeWrapper} >
                            <p className={styles.infoAtrrText} >Completed</p>
                        </div>
                        <div className={styles.infoValueWrapper} >
                            <p className={styles.infoValueText} >5</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default OverviewComponent;