import React from 'react'
import styles from "./styles/landingPageStyles.module.css"
import IntroSection from './IntroSection'
import FeaturesSection from './FeaturesSection'
import { coursesList } from "../../courseData/courseData"
const LandingPage = () => {
    // console.log(coursesList)

    return (
        <div className={styles.landingPageOuterWrapper} >
            <div className={styles.innerWrapper}>
                <IntroSection />
                <FeaturesSection />
            </div>
        </div>
    )
}

export default LandingPage