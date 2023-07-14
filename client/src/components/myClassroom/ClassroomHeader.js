import React from 'react'
import styles from "./styles/classroomHeaderStyles.module.css"
import OverviewInfoComponent from "./OverviewInfoComponent"
import ProductivityGraphComponent from './ProductivityGraphComponent'
import ClockIcon from '../icons/ClockIcon'
const ClassroomHeader = () => {
    return (
        <div className={styles.classroomHeaderWrapper} >
            <div className={styles.overviewSectionWrapper} >
                <div className={styles.mainHeadingWrapper} >
                    <p className={styles.mainHeadingText} >My Classroom</p>
                </div>
                <div className={styles.overViewHeadingWrapper} >
                    <div className={styles.headingIndicator}  ></div>
                    <p className={styles.overHeadingText} >overview</p>
                </div>
                <div className={styles.overviewContentWrapper} >
                    <OverviewInfoComponent />
                </div>
            </div>
            <div className={styles.productivitySectionWrapper} >


                <div className={styles.productivityHeadingWrapper}>
                    <div className={styles.headingIndicator}  ></div>
                    <p className={styles.prodHeadingText} >Productivity</p>
                </div>


                <div className={styles.timeSpentWrapper}>
                    <div className={styles.timeSpentIconWrapper} >
                        <ClockIcon />
                    </div>
                    <div className={styles.timeSpentTextWrapper} >
                        <p className={styles.timeSpentText} >
                            28h
                        </p>
                    </div>
                </div>


                <div className={styles.graphWrapper}>
                    <ProductivityGraphComponent />
                </div>



            </div>
        </div>
    )
}

export default ClassroomHeader